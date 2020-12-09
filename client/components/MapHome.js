import React from 'react'
import PropTypes from 'prop-types'
import Map from './Map'
import {connect} from 'react-redux'
import {fetchLocation} from '../store/user'

/**
 * COMPONENT
 */
export class MapHome extends React.Component {
  componentDidMount() {
    this.props.fetchLocation()
  }
  render() {
    return (
      <div id="map-container">
        <Map jobsInfo={this.props.stateJobs} />
      </div>
    )
  }
}

//Just for now, to check whether Redux store is ready to use:
const mapStateToProps = state => {
  return {
    country: state.country,
    stateJobs: state.stateJobs,
    latitude: state.user.latitude,
    longitude: state.user.longitude
  }
}

const mapDispatchToProps = dispatch => {
  return {
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
