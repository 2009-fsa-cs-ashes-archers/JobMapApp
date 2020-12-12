const router = require('express').Router()
const axios = require('axios')
const calculatePercHistogram = require('./histogramHelper')
const {states} = require('../../utils/constants')
const getAdzunaJobs = require('./getAdzunaJobs')
const getAdzunaHistogram = require('./getAdzunaHistogram')
const jobByStateHelper = require('./jobsByStateHelper')
const AdzunaKey = process.env.ADZUNA_API_KEY
const AdzunaId = process.env.ADZUNA_API_ID
// const {javaScriptJobsByState} = require('../../utils/dummyData')
const {redisClient} = require('../api')
const countryCache = require('./countryCache')
module.exports = router

// Dynamic US Totals -- * USE THIS ROUTE *
router.get('/totals-ranges/:filter', countryCache, async (req, res, next) => {
  try {
    const filter = req.params.filter.split('-').join('%20')
    // Returns total country-wide matched jobs and avg salary
    const res1 = await axios.get(
      `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${AdzunaId}&app_key=${AdzunaKey}&what_and=${filter}&what_or=software%20developer%20engineer%20web%20javascript%20full%20stack&location0=US&max_days_old=60&sort_by=relevance`
    )
    // Returns Histogram of Salary Distribution
    const histData = await getAdzunaHistogram(filter)
    const histogramByPercent = calculatePercHistogram(histData)
    // Returns Distribution of Jobs by State
    let jobsPerState

    // 50 Adzuna Queries (1 for each state)
    jobsPerState = await Promise.all(
      states.map(async state => {
        const formattedState = state.split(' ').join('%20')
        const data = await getAdzunaJobs(filter, formattedState, 0, 1)
        return {
          [state]: {
            count: data.count,
            // This might be undefined:
            averageSalary: data.mean
          }
        }
      })
    )
    // Format Array into an object with states as keys
    jobsPerState = jobByStateHelper(jobsPerState)

    // Country Response Object
    const nationalTotals = {
      count: res1.data.count,
      averageSalary: res1.data.mean,
      histogramByPercent,
      // This needs to be an object, not an array
      jobsPerState
    }
    // Set to Redis Cache
    console.log(`Setting Redis at key USA_${req.params.filter} for 24 hours`)
    redisClient.setex(
      `USA_${req.params.filter}`,
      86400,
      JSON.stringify(nationalTotals)
    )
    // Send the response
    res.json(nationalTotals)
  } catch (err) {
    next(err)
  }
})
