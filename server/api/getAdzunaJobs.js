const axios = require('axios')
const AdzunaKey = process.env.ADZUNA_API_KEY
const AdzunaId = process.env.ADZUNA_API_ID

const getAdzunaJobs = async (filter, state, resultsPerPage, page) => {
  console.log('filter: ', filter)
  const {data} = await axios.get(
    `https://api.adzuna.com/v1/api/jobs/us/search/${page}?app_id=${AdzunaId}&app_key=${AdzunaKey}&results_per_page=${resultsPerPage}&what_and=${filter}&what_or=software%20developer%20engineer%20web%20javascript%20full%20stack&location0=US&location1=${state}&max_days_old=60&sort_by=relevance`
  )

  return data
}

module.exports = getAdzunaJobs
