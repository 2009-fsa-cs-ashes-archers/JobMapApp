import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Filter, SearchData} from '../components'
import {applyFilter} from '../store/filter'

const Sidebar = props => {
  const [filter, setFilter] = useState(props.filter)
  const [geoState, setGeoState] = useState(props.selectedState)

  const handleSubmit = event => {
    event.preventDefault()
    props.updateFilter(filter)
  }

  return (
    <div id="sidebar-container">
      <Filter
        keyword={filter}
        handleFilter={setFilter}
        state={geoState}
        handleState={setGeoState}
        dealWithSubmit={handleSubmit}
      />
      <SearchData />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    filter: state.filter,
    selectedState: state.selectedState
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateFilter: filter => dispatch(applyFilter(filter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
