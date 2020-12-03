import axios from 'axios'

const APPLY_FILTERS = 'APPLY_FILTERS'

export const applyFilters = filteredJobs => ({
  type: APPLY_FILTERS,
  filteredJobs
})

export const fetchFilteredJobs = (selectedState = 'New York', filter = '') => {
  return dispatchEvent(applyFilters(filter, selectedState))
}

const initialState = {}

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case APPLY_FILTERS:
      return action.filteredJobs
    default:
      return state
  }
}
