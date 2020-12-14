import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {Filter, SearchData, AverageRentInfo} from '../components'
import {applyFilter} from '../store/filter'
import {applyGeoState} from '../store/selectedState'
import {fetchStateJobs} from '../store/stateJobs'
import {fetchCountry} from '../store/country'
import ShowSidebar from "./ShowSidebar"

const Sidebar = props => {
  const [filter, setFilter] = useState(props.filter)
  const [geoState, setGeoState] = useState(props.selectedState)
  const [loading, toggleLoading] = useState(true)
  const [showingInMobile, toggleShowing] = useState(false)

  // Runs once when the app loads
  useEffect(() => {
    async function loadCountry() {
      await props.updateCountry(filter)
    }
    loadCountry()
    toggleLoading(false)
  }, [])

  // Listens for changes in selectedState to update the dropdown
  useEffect(
    () => {
      setGeoState(props.selectedState)
    },
    [props.selectedState]
  )

  const handleTap = (e) => {
    e.preventDefault()
    toggleShowing(!showingInMobile)
  }

  // Handler to apply new geo & keyword filter
  const handleSubmit = async event => {
    event.preventDefault()
    toggleLoading(true)
    let fil = filter
    if (!fil || !fil.length) {
      fil = 'Javascript'
    }
    props.updateFilter(fil)
    props.updateSelectedState(geoState)
    if (geoState !== 'USA') {
      await props.updateStateJobs(geoState, fil)
      toggleLoading(false)
    } else {
      props.updateCountry(fil)
      toggleLoading(false)
    }
  }

  return (
    <div id="sidebar-container" className={`sidebar-class${showingInMobile ? ' show-sidebar' : ''}`}>
      <div id="mobile-only">
        <ShowSidebar
          toggleShowing={handleTap}
          showing={showingInMobile}
        />
      </div>
      <Filter
        keyword={filter}
        handleFilter={setFilter}
        state={geoState}
        handleState={setGeoState}
        dealWithSubmit={handleSubmit}
      />
      <SearchData loading={loading} />
      <AverageRentInfo loading={loading} />
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
    updateSelectedState: geoState => dispatch(applyGeoState(geoState)),
    updateStateJobs: (geoState, filter) =>
      dispatch(fetchStateJobs(geoState, filter)),
    updateCountry: filter => dispatch(fetchCountry(filter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
