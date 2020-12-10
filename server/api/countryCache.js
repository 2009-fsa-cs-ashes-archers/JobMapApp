const {redisClient} = require('../api')

const countryCache = (req, res, next) => {
  const {filter} = req.params

  redisClient.get(`USA_${filter}`, (error, cachedData) => {
    if (error) throw error
    if (cachedData !== null) {
      console.log('Redis returned:', cachedData.slice(0, 300))
      const nationalTotals = JSON.parse(cachedData)
      res.send(nationalTotals)
    } else {
      next()
    }
  })
}

module.exports = countryCache
