const APPLY_FILTERS = 'APPLY_FILTERS'

export const applyFilter = (filter = '') => ({
  type: APPLY_FILTERS,
  filter
})

const initialState = 'Javascript'

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case APPLY_FILTERS:
      return action.filter
    default:
      return state
  }
}
