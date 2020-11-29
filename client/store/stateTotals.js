import Axios from 'axios'

const SET_STATE_TOTALS = 'SET_STATE_TOTALS'

export const setStateTotals = stateTotals => ({
  type: SET_STATE_TOTALS,
  stateTotals
})

export const fetchStateTotals = (state = 'New-York', filter = 'Javascript') => {
  return async dispatch => {
    try {
      const {data} = await Axios.get(
        `/api/state/${state}/totals-ranges/${filter}`
      )
      dispatch(setStateTotals(data))
    } catch (error) {
      console.log(error)
    }
  }
}

const initialState = {}

export default function stateTotalsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STATE_TOTALS:
      return action.stateTotals
    default:
      return state
  }
}
