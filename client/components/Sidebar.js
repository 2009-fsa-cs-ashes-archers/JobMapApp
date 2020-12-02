import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Filter, SearchData} from '../components'

const Sidebar = props => {
  return (
    <div id="sidebar-container">
      <Filter />
      <SearchData />
    </div>
  )
}

export default Sidebar
