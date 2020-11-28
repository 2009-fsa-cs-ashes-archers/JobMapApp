import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const MapHome = () => {
  return (
    <div>
      <h3>Future Map</h3>
    </div>
  )
}

/**
 * CONTAINER
 */
// const mapState = state => {
//   return {
//     email: state.user.email
//   }
// }

// export default connect(mapState)(MapHome)

export default MapHome

/**
 * PROP TYPES
 */
// MapHome.propTypes = {
//   email: PropTypes.string
// }
