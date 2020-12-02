const axios = require('axios')

async function googleApiHelper(company, lng, lat) {
  const key = process.env.GOOGLE_PLACES_API_TOKEN
  const companyStr = company
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
    .split(' ')
    .join('%20')
  console.log(companyStr, lng, lat)
  const {data} = await axios.get(`
  https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${companyStr}&inputtype=textquery&fields=geometry&&locationbias=point:${lat},${lng}&key=${key}
  `)
  if (data.candidates.length) {
    return data.candidates[0].geometry.location
  }
}

module.exports = googleApiHelper
