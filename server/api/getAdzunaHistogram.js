const axios = require('axios')
const AdzunaKey = process.env.ADZUNA_API_KEY
const AdzunaId = process.env.ADZUNA_API_ID

const getAdzunaHistogram = async (filter, state) => {
  const {data} = await axios.get(
    `https://api.adzuna.com/v1/api/jobs/us/histogram?app_id=${AdzunaId}&app_key=${AdzunaKey}&what=${filter}&location0=US${
      state ? '&location1=' + state : ''
    }`
  )
  return data.histogram
}

module.exports = getAdzunaHistogram
