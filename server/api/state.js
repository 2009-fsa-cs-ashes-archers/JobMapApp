const router = require('express').Router()
const axios = require('axios')
const calculatePercHistogram = require('./histogramHelper')
const jobDataHelper = require('./jobDataHelper')
const googleApiHelper = require('./googleApiHelper')
const getAdzunaJobs = require('./getAdzunaJobs')
const getAdzunaHistogram = require('./getAdzunaHistogram')
const {
  californiaJavascriptJobs,
  californiaJavascriptData
} = require('../../utils/dummyData')
const {redisClient} = require('../api')
const stateCache = require('./stateCache')
module.exports = router

// For 2-word states and multiple filters, please submit them to this route with each word separated by a '-'
// For example: 'New-Jersey/jobs/react-redux-node

// Dynamic State Jobs -- * USE THIS ROUTE *
router.get('/:state/jobs/:filter', stateCache, async (req, res, next) => {
  try {
    let jobs
    let stateTotals
    const state = req.params.state.split('-').join('%20')
    const filter = req.params.filter.split('-').join('%20')
    // For Demo -- Use California Dummy Data with 500 Jobs
    if (state === 'California' && filter === 'javascript') {
      console.log('Still using CA dummy data')
      stateTotals = {
        count: californiaJavascriptData.count,
        averageSalary: californiaJavascriptData.averageSalary,
        histogramByPercent: californiaJavascriptData.histogramByPercent,
        jobs: californiaJavascriptJobs,
      }
    } else {
      // Multiple Pages -- We may want to comment this back in for production
      // let data = await Promise.all(
      // // EXAMPLE: 10 Pages = 500 Jobs
      //   [1, 2,].map(async page => {
      //     const pageJobs = await getAdzunaJobs(filter, state, 50, page)
      //     return pageJobs
      //   })
      // )
      // // Reformat Data
      // data = {
      //   count: data[0].count,
      //   mean: data[0].mean,
      //   results: data.reduce((arr, obj) => {
      //     // console.log('arr:', arr, 'currentObj:', obj)
      //     return [...arr, ...obj.results]
      //   }, [])
      // }


      // Only 1 Page (no need to Promise.all)
      const data = await getAdzunaJobs(filter, state, 50, 1)

      jobs = jobDataHelper(data.results)
      console.log('returns ' + jobs.length + ' jobs')
      // Set accurate lat/lng with Google Place Search API
      jobs = await Promise.all(
        jobs.map(async job => {
          const location = await googleApiHelper(
            job.company,
            job.longitude,
            job.latitude,
            req.params.state.split('-').join(' ')
          )
          // console.log('returned from Google:', location)
          if (location) {
            job.longitude = location.lng
            job.latitude = location.lat
          }
          return job
        })
      )

      const histData = await getAdzunaHistogram(filter, state)
      const histogramByPercent = calculatePercHistogram(histData)
      // Response Object
      stateTotals = {
        count: data.count,
        // This might be undefined:
        averageSalary: data.mean,
        histogramByPercent,
        jobs: jobs,
      }
    }
    console.log(
      `Setting Redis at key ${req.params.state}_${
        req.params.filter
      } for 24 hours`
    )
    // Cache response
    redisClient.setex(
      `${req.params.state}_${req.params.filter}`,
      86400,
      JSON.stringify(stateTotals)
    )
    // Send response
    res.json(stateTotals)
  } catch (err) {
    next(err)
  }
})
