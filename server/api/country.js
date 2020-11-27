const router = require('express').Router()
const axios = require('axios')
const calculatePercHistogram = require('./histogramHelper')

module.exports = router

// RIGHT NOW each query is separate routes, but we can also combine
// 2-3 queries to 3rd party apis in one route.
// for example, if we want histographic data, as well as the total number of hits
// for a search, we can do that with two separate queries, inside one route
// and res.json an object with keys containing data from both queries
// ----------------------------------------------------------------------------

// This route returns the total number of jobs by state in adzuna's it-jobs category
// It's an example of how we can get by-the-state data with one api call, but it's not not a good representation of actual software developer jobs
// Postman Query Time: 0:13 - 0:15
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
// Query Time: 0:01.8
router.get('/us-totals', async (req, res, next) => {
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
router.get('/us-salary-ranges', async (req, res, next) => {
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
router.get('/us-totals-ranges', async (req, res, next) => {
  try {
    const res1 = await axios.get(
      'https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=bc9f8e70&app_key=83d35d0e2fa37d07733767a7b28952ca&results_per_page=50&what_and=javascript&what_or=software%20developer%20engineer%20web%20javascript%20full%20stack&location0=US'
    )
    const res2 = await axios.get(
      'https://api.adzuna.com/v1/api/jobs/us/histogram?app_id=bc9f8e70&app_key=83d35d0e2fa37d07733767a7b28952ca&what=javascript&location0=US'
    )
    const histogram = res2.data.histogram
    const histogramByPercent = calculatePercHistogram(histogram) // Helper function below
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
