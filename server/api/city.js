const router = require('express').Router()
const axios = require('axios')
const calculatePercHistogram = require('./histogramHelper')
const jobDataHelper = require('./jobDataHelper')

// I'm not sure how to get more specific locations in Adzuna
// except by providing the exact county and city
// We may need to use a helper library for that
// It's returning 500 error when I give it a zip code

module.exports = router
