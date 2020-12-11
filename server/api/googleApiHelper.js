const axios = require('axios')
const {dataByState} = require('../../utils/constants')

async function googleApiHelper(company, lng, lat, state) {
  const key = process.env.GOOGLE_PLACES_API_TOKEN
  const companyStr = company
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
    .split(' ')
    .join('%20')
  // console.log(companyStr, lng, lat)
  const {data} = await axios.get(`
  https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${companyStr}&inputtype=textquery&fields=geometry,formatted_address&locationbias=point:${lat},${lng}&key=${key}
  `)
  if (data.candidates.length) {
    for (let i = 0; i < data.candidates.length; i++) {
      if (
        data.candidates[i].formatted_address.includes(dataByState[state].abb)
      ) {
        return data.candidates[i].geometry.location
      }
    }
    return undefined
  }
}

module.exports = googleApiHelper
