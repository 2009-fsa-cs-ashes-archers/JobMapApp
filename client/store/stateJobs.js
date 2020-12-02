import Axios from 'axios'

const SET_STATE_JOBS = 'SET_STATE_JOBS'

export const setStateJobs = stateJobs => ({
  type: SET_STATE_JOBS,
  stateJobs
})

export const fetchStateJobs = (state = 'New-York', filter = 'Javascript') => {
  return async dispatch => {
    try {
      const {data} = await Axios.get(`/api/state/${state}/jobs/${filter}`)
      // console.log(data)
      dispatch(setStateJobs(data))
    } catch (error) {
      console.log(error)
    }
  }
}

const initialState = {}

export default function stateJobsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STATE_JOBS:
      return action.stateJobs
    default:
      return state
  }
}
