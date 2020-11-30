import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchCountry} from '../store/country'
import {fetchStateJobs} from '../store/stateJobs'
import {fetchStateTotals} from '../store/stateTotals'
import {fetchLocation} from '../store/user'
import Map from '../components/Map'

/**
 * COMPONENT
 */
export class MapHome extends React.Component {
  componentDidMount() {
    this.props.fetchCountry()
    this.props.fetchStateJobs()
    this.props.fetchStateTotals()
    this.props.fetchLocation()
  }
  render() {
    return (
      <div id="map-container">
        <Map latitude={this.props.latitude} longitude={this.props.longitude} />
        {/* <h6>{this.props.stateTotals.averageSalary}</h6> */}
      </div>
    )
  }
}

//Just for now, to check whether Redux store is ready to use:
const mapStateToProps = state => {
  return {
    country: state.country,
    stateJobs: state.stateJobs,
    stateTotals: state.stateTotals,
    latitude: state.user.latitude,
    longitude: state.user.longitude
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCountry: filter => dispatch(fetchCountry(filter)),
    fetchStateJobs: (state, filter) => dispatch(fetchStateJobs(state, filter)),
    fetchStateTotals: (state, filter) =>
      dispatch(fetchStateTotals(state, filter)),
    fetchLocation: () => dispatch(fetchLocation())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapHome)

/**
 * PROP TYPES
 */
// MapHome.propTypes = {
//   email: PropTypes.string
// }
