import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = props => (
  <nav id="nav" className="gradient-style">
    <div className="navbar navbar-left">
      {/* The navbar will show these links after you log in */}
      <Link to="/">
        <img src="Logo-Yellow.png" alt="Logo" id="logo" />
      </Link>
    </div>
    <div className="navbar navbar-right">
      {/* {if user is not logged in show this} */}
      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>
      {/* {if user is logged in show bookmarks + log out + account tbd} */}
    </div>
  </nav>
)

/**
 * CONTAINER
 */
// const mapState = state => {
//   return {
//     isLoggedIn: !!state.user.id
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     handleClick() {
//       dispatch(logout())
//     }
//   }
// }

// export default connect(mapState, mapDispatch)(Navbar)
export default Navbar

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  // handleClick: PropTypes.func.isRequired,
  // isLoggedIn: PropTypes.bool.isRequired
}
