const APPLY_GEOSTATE = 'APPLY_GEOSTATE'

export const applyGeoState = (geoState = '') => ({
  type: APPLY_GEOSTATE,
  geoState
})

const initialState = 'New York'

export default function selectedStateReducer(state = initialState, action) {
  switch (action.type) {
    case APPLY_GEOSTATE:
      return action.geoState
    default:
      return state
  }
}
