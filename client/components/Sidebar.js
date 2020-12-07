import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Filter, SearchData} from '../components'
import {applyFilter} from '../store/filter'
import {applyGeoState} from '../store/selectedState'
import {fetchStateJobs} from '../store/stateJobs'
import {fetchCountry} from '../store/country'

const Sidebar = props => {
  const [filter, setFilter] = useState(props.filter)
  const [geoState, setGeoState] = useState(props.selectedState)
  const [loading, toggleLoading] = useState(true)

  // Runs once when the app loads
  useEffect(() => {
    async function loadCountry() {
      await props.updateCountry(filter)
    }
    loadCountry()
    toggleLoading(false)
  }, [])

  // Handler to apply new geo & keyword filter
  const handleSubmit = async event => {
    event.preventDefault()
    toggleLoading(true)
    let fil = filter
    if (!fil || !fil.length) {
      fil = 'Javascript'
    }
    props.updateFilter(fil)
    props.updateGeoState(geoState)
    const fmFilter = fil.split(' ').join('-')
    const fmGeoState = geoState.split(' ').join('-')
    if (geoState !== 'USA') {
      await props.updateStateJobs(fmGeoState, fmFilter)
      toggleLoading(false)
    } else {
      console.log(
        "Switched back to USA. Time to get national data from cache if we have for the current filter or trigger a thunk if we don't"
      )
      props.updateCountry(fmFilter)
      toggleLoading(false)
    }
  }

  // useEffect(() => console.log(loading), [loading])

  return (
    <div id="sidebar-container">
      <Filter
        keyword={filter}
        handleFilter={setFilter}
        state={geoState}
        handleState={setGeoState}
        dealWithSubmit={handleSubmit}
      />
      <SearchData loading={loading} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    filter: state.filter,
    selectedState: state.selectedState,
    country: state.country
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateFilter: filter => dispatch(applyFilter(filter)),
    updateGeoState: geoState => dispatch(applyGeoState(geoState)),
    updateStateJobs: (geoState, filter) =>
      dispatch(fetchStateJobs(geoState, filter)),
    updateCountry: filter => dispatch(fetchCountry(filter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
