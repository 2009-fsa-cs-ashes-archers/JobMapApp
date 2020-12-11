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
        jobs: californiaJavascriptJobs
      }
    } else {
      // Multiple Pages -- We may want to comment this back in for production
      // let data = await Promise.all(
      // // EXAMPLE: 10 Pages = 500 Jobs
      //   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(async page => {
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
      const data = await getAdzunaJobs(filter, state, 5, 1)

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
        jobs: jobs
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

//----------------------------------------------------------------------------

// Next route could be called when a user clicks on a specific state to get more thorough info on that state, but before making the above api call for jobs

// Dynamic State Totals -- * NO LONGER NECESSARY *
// router.get('/:state/totals-ranges/:filter', async (req, res, next) => {
//   try {
//     const state = req.params.state.split('-').join('%20')
//     // Please Pass in 'Javascript' to req.params.filter if user leaves field empty
//     const filter = req.params.filter.split('-').join('%20')
//     const res1 = await axios.get(
//       `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=bc9f8e70&app_key=83d35d0e2fa37d07733767a7b28952ca&results_per_page=50&what_and=${filter}&what_or=software%20developer%20engineer%20web%20javascript%20full%20stack&location0=US&location1=${state}`
//     )
//     const res2 = await axios.get(
//       `https://api.adzuna.com/v1/api/jobs/us/histogram?app_id=bc9f8e70&app_key=83d35d0e2fa37d07733767a7b28952ca&what=${filter}&location0=US&location1=${state}`
//     )
//     const histogram = res2.data.histogram
//     const histogramByPercent = calculatePercHistogram(histogram) // Helper function below
//     const stateTotals = {
//       count: res1.data.count,
//       averageSalary: res1.data.mean,
//       histogram: res2.data.histogram,
//       histogramByPercent
//     }
//     res.json(stateTotals)
//   } catch (err) {
//     next(err)
//   }
// })

// //* Danny: More notes below, I do not think we need to use those routes.

// //----------------------------------------------------------------------------

// // Note that for the URL to Adzuna, all states need to be reformatted
// // PLEASE be consistent in the way you submit states to the req.params object
// // Capitalize first letters and join words with a '-'

// // Get a histogram of salary ranges for all JavaScript jobs for a state
// router.get('/:state/ranges', async (req, res, next) => {
//   try {
//     const state = req.params.state.split('-').join('%20')
//     const {data} = await axios.get(
//       `https://api.adzuna.com/v1/api/jobs/us/histogram?app_id=bc9f8e70&app_key=83d35d0e2fa37d07733767a7b28952ca&what=javascript&location0=US&location1=${state}`
//     )
//     res.json(data)
//   } catch (err) {
//     next(err)
//   }
// })

// // Now when you actually want to query some JavaScript jobs
// // Only returns 50 jobs at a time!!!
// // Also limited to ads < 30 days old but I can change this
// router.get('/:state/jobs', async (req, res, next) => {
//   try {
//     const state = req.params.state.split('-').join('%20')
//     const {data} = await axios.get(
//       `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=bc9f8e70&app_key=83d35d0e2fa37d07733767a7b28952ca&results_per_page=50&what_and=javascript&what_or=software%20developer%20engineer%20web%20javascript%20full%20stack&location0=US&location1=${state}&max_days_old=30&sort_by=relevance&salary_include_unknown=1`,
//       {
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json'
//         }
//       }
//     )
//     // Cleaned up the response object
//     const jobs = jobDataHelper(data.results)

//     res.json({
//       count: data.count,
//       averageSalary: data.mean,
//       jobs: jobs
//     })
//   } catch (err) {
//     next(err)
//   }
// })
