import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import countryReducer from './country'
import stateJobsReducer from './stateJobs'
// import stateTotalsReducer from './stateTotals'
import filterReducer from './filter'
// import selectedStateReducer from './selectedState'

const reducer = combineReducers({
  user,
  country: countryReducer,
  stateJobs: stateJobsReducer,
  filter: filterReducer
  // selectedState: selectedStateReducer,
  // stateTotals: stateTotalsReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './country'
