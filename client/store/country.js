import Axios from 'axios'

const SET_COUNTRY = 'SET_COUNTRY'

export const setCountry = country => ({
  type: SET_COUNTRY,
  country
})

export const fetchCountry = filter => {
  return async dispatch => {
    try {
      const {data} = await Axios.get(`/api/country/totals-ranges/${filter}`)
      dispatch(setCountry(data))
    } catch (error) {
      console.log(error)
    }
  }
}

const initialState = {}

export default function countryReducer(state = initialState, action) {
  switch (action.type) {
    case SET_COUNTRY:
      return action.country
    default:
      return state
  }
}
