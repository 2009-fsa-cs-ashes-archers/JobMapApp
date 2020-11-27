const router = require('express').Router()
const axios = require('axios')
const calculatePercHistogram = require('./histogramHelper')
const jobDataHelper = require('./jobDataHelper')

module.exports = router

// Note that for the URL to Adzuna, all states need to be reformatted
// PLEASE be consistent in the way you submit states to the req.params object
// Capitalize first letters and join words with a '-'

// Get a histogram of salary ranges for all JavaScript jobs for a state
router.get('/:state/ranges', async (req, res, next) => {
  try {
    const state = req.params.state.split('-').join('%20')
    const {data} = await axios.get(
      `https://api.adzuna.com/v1/api/jobs/us/histogram?app_id=bc9f8e70&app_key=83d35d0e2fa37d07733767a7b28952ca&what=javascript&location0=US&location1=${state}`
    )
    res.json(data)
  } catch (err) {
    next(err)
  }
})

// A more thorough response for state totals
// This might be called when a user clicks on a specific state to get more thorough info on that state, but not yet making subsequent api calls for jobs
router.get('/:state/totals-ranges', async (req, res, next) => {
  try {
    const state = req.params.state.split('-').join('%20')
    const res1 = await axios.get(
      `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=bc9f8e70&app_key=83d35d0e2fa37d07733767a7b28952ca&results_per_page=50&what_and=javascript&what_or=software%20developer%20engineer%20web%20javascript%20full%20stack&location0=US&location1=${state}`
    )
    const res2 = await axios.get(
      `https://api.adzuna.com/v1/api/jobs/us/histogram?app_id=bc9f8e70&app_key=83d35d0e2fa37d07733767a7b28952ca&what=javascript&location0=US&location1=${state}`
    )
    const histogram = res2.data.histogram
    const histogramByPercent = calculatePercHistogram(histogram) // Helper function below
    // Cleaned up the response object
    const stateTotals = {
      count: res1.data.count,
      averageSalary: res1.data.mean,
      histogram: res2.data.histogram,
      histogramByPercent
    }
    res.json(stateTotals)
  } catch (err) {
    next(err)
  }
})

// Now when you actually want to query some JavaScript jobs
// Only returns 50 jobs at a time!!!
// Also limited to ads < 30 days old but I can change this
router.get('/:state/jobs', async (req, res, next) => {
  try {
    const state = req.params.state.split('-').join('%20')
    const {data} = await axios.get(
      `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=bc9f8e70&app_key=83d35d0e2fa37d07733767a7b28952ca&results_per_page=50&what_and=javascript&what_or=software%20developer%20engineer%20web%20javascript%20full%20stack&location0=US&location1=${state}&max_days_old=30&sort_by=relevance&salary_include_unknown=1`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    )
    // Cleaned up the response object
    const jobs = jobDataHelper(data.results)

    res.json({
      count: data.count,
      averageSalary: data.mean,
      jobs: jobs
    })
  } catch (err) {
    next(err)
  }
})

// User can submit multiple filters but please submit them to req.params the same as the state, with each word separated by '-'
router.get('/:state/jobs/:filter', async (req, res, next) => {
  try {
    const state = req.params.state.split('-').join('%20')
    const filter = req.params.filter.split('-').join('%20')
    const {data} = await axios.get(
      `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=bc9f8e70&app_key=83d35d0e2fa37d07733767a7b28952ca&what_and=${filter}&what_or=software%20developer%20engineer%20web%20javascript%20full%20stack&location0=US&location1=${state}&max_days_old=30&sort_by=relevance`
    )
    // Cleaned up the response object
    const jobs = jobDataHelper(data.results)
    res.json({
      count: data.count,
      // Depeneding on the specificity of the search, none of the results might have a salary attached, and this field will be undefined
      averageSalary: data.mean,
      jobs: jobs
    })
  } catch (err) {
    next(err)
  }
})
