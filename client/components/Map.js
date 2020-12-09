import React, {useState, useEffect, useRef} from 'react'
import {connect} from 'react-redux'
import {dataByState, states} from '../../utils/constants'
import {applyGeoState} from '../store/selectedState'
import {fetchStateJobs} from '../store/stateJobs'
import MapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
  FlyToInterpolator
} from 'react-map-gl'
import {
  Pins,
  NationalPins,
  JobInfo,
  JobDetails,
  NationalViewButton,
  StateInfo
} from '../components'
import ClickAwayListener from 'material-ui/internal/ClickAwayListener'
// import Clusters from './Clusters'
// import Supercluster from 'supercluster'

// TOKEN
const TOKEN =
  'pk.eyJ1IjoiYm91c3RhbmlwNzE4IiwiYSI6ImNrZndwa2MweTE1bDkzMHA5NTdvMWxjZHUifQ.zY3GvA4Jq0g5I22NoPCt-Q'

// MAPREF
// const mapRef = useRef()

// VIEWPORT
const defaultViewport = {
  latitude: 37.785164,
  longitude: -85,
  zoom: 3.5,
  bearing: 0,
  pitch: 0
}

export const Map = ({
  filter,
  selectedState,
  country,
  jobsInfo,
  updateSelectedState,
  updateStateJobs
}) => {
  const [viewport, setViewport] = useState(defaultViewport)
  const [jobPopupInfo, setJobPopupInfo] = useState(null)
  const [jobHoverInfo, setJobHoverInfo] = useState(null)
  const [stateHoverInfo, setStateHoverInfo] = useState(null)

  // GRAB ALL JOBS
  const jobs = jobsInfo.jobs

  // Set up geostates for rendering national pins
  const geostates =
    Object.keys(country).length === 0 && country.constructor === Object
      ? []
      : states.map(state => {
          const jobsInState = country.jobsPerState[state]
          const dataForState = dataByState[state]
          return {
            name: state,
            latitude: dataForState.latitude,
            longitude: dataForState.longitude,
            count: jobsInState.count,
            averageSalary: jobsInState.averageSalary
          }
        })

  // listens for change in selectedState to change a viewport
  const _goToNationalView = () => {
    setViewport({
      ...defaultViewport,
      transitionDuration: 1500,
      transitionInterpolator: new FlyToInterpolator()
    })
    updateSelectedState('USA')
  }
  const _goToStateView = geoState => {
    setViewport({
      latitude: geoState.latitude,
      // Offset the lng
      longitude: geoState.longitude + 3,
      zoom: 6,
      bearing: 0,
      pitch: 0,
      transitionDuration: 1500,
      transitionInterpolator: new FlyToInterpolator()
    })
  }
  useEffect(
    () => {
      if (selectedState === 'USA') {
        _goToNationalView()
      } else {
        _goToStateView(dataByState[selectedState])
      }
    },
    [selectedState]
  )

  // Methods for Job Nodes
  const _onClickMarker = job => {
    setJobPopupInfo(job)
  }
  const _onHoverMarker = job => {
    setJobHoverInfo(job)
  }
  const _onLeaveHover = () => {
    setJobHoverInfo(null)
  }
  const _onClickAwayPopup = () => {
    setJobPopupInfo(null)
  }

  // Methods for State Nodes
  const _onClickStateNode = async geoState => {
    setStateHoverInfo(null)
    updateSelectedState(geoState.name)
    await updateStateJobs(geoState.name, filter)
  }
  const _onHoverStateNode = geoState => {
    setStateHoverInfo(geoState)
  }
  const _onLeaveHoverStateNode = () => {
    setStateHoverInfo(null)
  }

  // Popups for Job Nodes
  const _renderPopup = () => {
    return (
      jobPopupInfo && (
        <ClickAwayListener onClickAway={_onClickAwayPopup}>
          <Popup
            tipSize={5}
            anchor="top"
            longitude={jobPopupInfo.longitude}
            latitude={jobPopupInfo.latitude}
            closeOnClick={false}
            closeButton={false}
            onClose={() => setJobPopupInfo(null)}
          >
            <JobDetails info={jobPopupInfo} />
          </Popup>
        </ClickAwayListener>
      )
    )
  }
  const _renderHover = () => {
    return (
      jobHoverInfo &&
      jobHoverInfo !== jobPopupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={jobHoverInfo.longitude}
          latitude={jobHoverInfo.latitude}
          closeOnClick={false}
          closeButton={false}
        >
          <JobInfo info={jobHoverInfo} />
        </Popup>
      )
    )
  }

  // Popup for State Node
  const _renderStateHover = () => {
    return (
      stateHoverInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={stateHoverInfo.longitude}
          latitude={stateHoverInfo.latitude}
          closeOnClick={false}
          closeButton={false}
        >
          <StateInfo info={stateHoverInfo} />
        </Popup>
      )
    )
  }

  return (
    <MapGL
      {...viewport}
      width="100%"
      height="100%"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={newViewport => {
        setViewport(newViewport)
      }}
      mapboxApiAccessToken={TOKEN}
    >
      {/* Show Job Pins if a state is selected */}
      {selectedState !== 'USA' && (
        <Pins
          jobs={jobs}
          onClick={_onClickMarker}
          onMouseEnter={_onHoverMarker}
          onMouseLeave={_onLeaveHover}
        />
      )}

      {/* Show National Pins if USA selected */}
      {selectedState === 'USA' && (
        <NationalPins
          geostates={geostates}
          onClick={_onClickStateNode}
          onMouseEnter={_onHoverStateNode}
          onMouseLeave={_onLeaveHoverStateNode}
        />
      )}
      {_renderPopup()}
      {_renderHover()}
      {_renderStateHover()}

      <div className="geolocateStyle">
        <GeolocateControl />
      </div>
      <div className="nationalViewStyle">
        <NationalViewButton goToNational={() => _goToNationalView()} />
      </div>
      <div className="fullscreenControlStyle">
        <FullscreenControl />
      </div>
      <div className="navStyle">
        <NavigationControl />
      </div>
      <div className="scaleControlStyle">
        <ScaleControl />
      </div>
    </MapGL>
  )
}

const mapStateToProps = state => {
  return {
    selectedState: state.selectedState,
    country: state.country,
    filter: state.filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateSelectedState: stateName => dispatch(applyGeoState(stateName)),
    updateStateJobs: (stateName, filter) =>
      dispatch(fetchStateJobs(stateName, filter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
