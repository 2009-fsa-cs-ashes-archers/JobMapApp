const apiRouter = require('express').Router()
const redis = require('redis')
const REDIS_PORT = process.env.REDIS_PORT || 6379
const redisClient = redis.createClient(REDIS_PORT)
module.exports = {apiRouter, redisClient}

apiRouter.use('/users', require('./users'))
apiRouter.use('/country', require('./country'))
apiRouter.use('/state', require('./state'))
apiRouter.use('/city', require('./city'))

apiRouter.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
