const router = require('express').Router()
const axios = require('axios')

module.exports = router

router.get('/nationaldata', async (req, res, next) => {
  try {
    const national = await axios.get(
      'https://api.adzuna.com/v1/api/jobs/us/geodata?app_id=bc9f8e70&app_key=83d35d0e2fa37d07733767a7b28952ca&location0=US&category=it-jobs'
    )
    const dataToReturn = national.data.locations.map(location => {
      return {
        state: location.location.display_name,
        count: location.count
      }
    })
    res.json(dataToReturn)
  } catch (err) {
    next(err)
  }
})
