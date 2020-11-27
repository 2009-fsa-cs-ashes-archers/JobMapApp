const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/country', require('./country'))
router.use('/state', require('./state'))
router.use('/city', require('./city'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
