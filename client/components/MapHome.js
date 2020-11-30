import React from 'react'
import PropTypes from 'prop-types'
import Map from './Map'
import {connect} from 'react-redux'
import {fetchCountry} from '../store/country'
import {fetchStateJobs} from '../store/stateJobs'
import {fetchStateTotals} from '../store/stateTotals'

/**
 * COMPONENT
 */
export class MapHome extends React.Component {
  componentDidMount() {
    this.props.fetchCountry()
    this.props.fetchStateJobs()
    this.props.fetchStateTotals()
  }
  render() {
    return (
      <div id="map-container">
        <Map jobs={this.props.stateJobs} />
      </div>
    )
  }
}

//Just for now, to check whether Redux store is ready to use:
const mapStateToProps = state => {
  return {
    country: state.country,
    stateJobs: state.stateJobs,
    stateTotals: state.stateTotals
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCountry: filter => dispatch(fetchCountry(filter)),
    fetchStateJobs: (state, filter) => dispatch(fetchStateJobs(state, filter)),
    fetchStateTotals: (state, filter) =>
      dispatch(fetchStateTotals(state, filter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapHome)

/**
 * PROP TYPES
 */
// MapHome.propTypes = {
//   email: PropTypes.string
// }
