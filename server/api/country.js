const router = require('express').Router()
const axios = require('axios')
const calculatePercHistogram = require('./histogramHelper')
const {states} = require('../../utils/constants')
const getAdzunaJobs = require('./getAdzunaJobs')
const getAdzunaHistogram = require('./getAdzunaHistogram')
const AdzunaKey = process.env.ADZUNA_API_KEY
const AdzunaId = process.env.ADZUNA_API_ID
const {javaScriptJobsByState} = require('../../utils/dummyData')

module.exports = router

// Dynamic US Totals -- * USE THIS ROUTE *
router.get('/totals-ranges/:filter', async (req, res, next) => {
  try {
    const filter = req.params.filter.split('-').join('%20')
    // Returns total country-wide matched jobs and avg salary
    const res1 = await axios.get(
      `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${AdzunaId}&app_key=${AdzunaKey}&what_and=${filter}&what_or=software%20developer%20engineer%20web%20javascript%20full%20stack&location0=US&max_days_old=60&sort_by=relevance`
    )
    // Returns Histogram of Salary Distribution
    const histData = await getAdzunaHistogram(filter)
    // Returns Distribution of Jobs by State
    // PLEASE DO NOT DELETE!
    // COMMENTED OUT BECAUSE OF HITS LIMITS - CACHE IN THE FUTURE??
    // const jobsPerState = await Promise.all(
    //   states.map(async state => {
    //     const formattedState = state.split(' ').join('%20')
    //     const data = await getAdzunaJobs(filter, formattedState, 0)
    //     return {
    //       [state]: {
    //         count: data.count,
    //         // This might be undefined:
    //         averageSalary: data.mean
    //       }
    //     }
    //   })
    // )
    let jobsPerState
    filter === 'Javascript'
      ? (jobsPerState = javaScriptJobsByState)
      : (jobsPerState = [])
    const histogramByPercent = calculatePercHistogram(histData)
    const nationalTotals = {
      count: res1.data.count,
      averageSalary: res1.data.mean,
      histogramByPercent,
      jobsPerState
    }
    res.json(nationalTotals)
  } catch (err) {
    next(err)
  }
})

// Note that over 90% of jobs on Adzuna don't have a salary category, so we should display this information as a percentage, not the number of jobs. It would look really awkward to show 10,000 job matches, but the total on the histogram is 600. Lastly, the final range is 140,000+ (kind of sucks that it stops there)

//* Danny: More notes below, I do not think we need to use those routes.

//----------------------------------------------------------------------------

// This route returns the total number of jobs by state in adzuna's it-jobs category
// It's an example of how we can get by-the-state data with one api call, but it's not not a good representation of actual software developer jobs
// Postman Query Time: 0:13 - 0:20
// A central part of our app depends on visualizing the total number of jobs in each state from the national view
// Hopefully BLS will give us better options
router.get('/jobs-by-state', async (req, res, next) => {
  try {
    const {data} = await axios.get(
      'https://api.adzuna.com/v1/api/jobs/us/geodata?app_id=bc9f8e70&app_key=83d35d0e2fa37d07733767a7b28952ca&location0=US&category=it-jobs'
    )
    const ITJobsByState = data.locations.map(location => {
      return {
        state: location.location.display_name,
        count: location.count
      }
    })
    res.json(ITJobsByState)
  } catch (err) {
    next(err)
  }
})

// Total number of US Jobs for "Software Developer"
// Searches Adzuna for jobs containing "JavaScript" with some other helper keys
router.get('/totals', async (req, res, next) => {
  try {
    const {data} = await axios.get(
      'https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=bc9f8e70&app_key=83d35d0e2fa37d07733767a7b28952ca&results_per_page=50&what_and=javascript&what_or=software%20developer%20engineer%20web%20javascript%20full%20stack&location0=US'
    )
    const nationalTotals = {
      count: data.count,
      // Note that ONLY about 5% of jobs listed on Adzuna have a listed salary
      // So the mean is calculated based on just a sliver of the total jobs
      averageSalary: data.mean
    }
    res.json(nationalTotals)
  } catch (err) {
    next(err)
  }
})

// Returns a histographic breakdown of the number of jobs in each salary range
// Note that over 90% of jobs on Adzuna don't have a salary category, so we should
// display this information as a percentage, not the number of jobs
// It would look really awkward to show 10,000 job matches, but the total on the histogram
// is 600. Lastly, the final range is 140,000+ (kind of sucks that it stops there)
router.get('/salary-ranges', async (req, res, next) => {
  try {
    const {data} = await axios.get(
      'https://api.adzuna.com/v1/api/jobs/us/histogram?app_id=bc9f8e70&app_key=83d35d0e2fa37d07733767a7b28952ca&what=javascript&location0=US'
    )
    res.json(data.histogram)
  } catch (err) {
    next(err)
  }
})

// Example of a query combining us-totals and us-salary ranges
router.get('/totals-ranges', async (req, res, next) => {
  try {
    const res1 = await axios.get(
      'https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=bc9f8e70&app_key=83d35d0e2fa37d07733767a7b28952ca&results_per_page=50&what_and=javascript&what_or=software%20developer%20engineer%20web%20javascript%20full%20stack&location0=US'
    )
    const res2 = await axios.get(
      'https://api.adzuna.com/v1/api/jobs/us/histogram?app_id=bc9f8e70&app_key=83d35d0e2fa37d07733767a7b28952ca&what=javascript&location0=US'
    )
    const histogram = res2.data.histogram
    const histogramByPercent = calculatePercHistogram(histogram) // Helper function below
    // Cleaned up the response object
    const nationalTotals = {
      count: res1.data.count,
      averageSalary: res1.data.mean,
      histogram: res2.data.histogram,
      histogramByPercent
    }
    res.json(nationalTotals)
  } catch (err) {
    next(err)
  }
})

// User can submit multiple filters but please submit them to req.params the same as the state, with each word separated by '-'
router.get('/totals/:filter', async (req, res, next) => {
  try {
    const filter = req.params.filter.split('-').join('%20')
    const {data} = await axios.get(
      `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=bc9f8e70&app_key=83d35d0e2fa37d07733767a7b28952ca&what_and=${filter}&what_or=software%20developer%20engineer%20web%20javascript%20full%20stack&location0=US&max_days_old=30&sort_by=relevance`
    )
    // Only returns the broad data, not the jobs themselves.
    // We can change this (see: '/state/jobs/filter')
    res.json({
      count: data.count,
      averageSalary: data.mean
    })
  } catch (err) {
    next(err)
  }
})
