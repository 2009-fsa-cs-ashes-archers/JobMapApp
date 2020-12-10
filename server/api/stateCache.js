const {redisClient} = require('../api')

const stateCache = (req, res, next) => {
  const {filter, state} = req.params

  redisClient.get(`${state}_${filter}`, (error, cachedData) => {
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

module.exports = stateCache
