import Axios from 'axios'

const SET_STATE_JOBS = 'SET_STATE_JOBS'

export const setStateJobs = stateJobs => ({
  type: SET_STATE_JOBS,
  stateJobs
})

export const fetchStateJobs = (state = 'New-York', filter) => {
  return async dispatch => {
    try {
      const fmFilter = filter
        .toLowerCase()
        .split(' ')
        .join('-')
      const fmGeoState = state.split(' ').join('-')
      const {data} = await Axios.get(
        `/api/state/${fmGeoState}/jobs/${fmFilter}`
      )
      console.log(`Got back ${data.jobs.length} jobs from server`)
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
