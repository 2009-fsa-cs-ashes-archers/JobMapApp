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

// CREATING STATE NODES ARRAY
const geoStatesArray = []

for (let key in dataByState) {
  // console.log(dataByState[key])
  geoStatesArray.push({
    name: key,
    longitude: dataByState[key].longitude,
    latitude: dataByState[key].latitude
  })
}

// TOKEN
const TOKEN =
  'pk.eyJ1IjoiYm91c3RhbmlwNzE4IiwiYSI6ImNrZndwa2MweTE1bDkzMHA5NTdvMWxjZHUifQ.zY3GvA4Jq0g5I22NoPCt-Q'

// MAPREF
// const mapRef = useRef()

// STYLE (could be put into CSS file)
const geolocateStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
}

const nationalViewStyle = {
  position: 'absolute',
  top: 36,
  left: 0,
  width: '49px',
  height: '49px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const fullscreenControlStyle = {
  position: 'absolute',
  top: 72,
  left: 0,
  padding: '10px'
}

const navStyle = {
  position: 'absolute',
  top: 108,
  left: 0,
  padding: '10px'
}

const scaleControlStyle = {
  position: 'absolute',
  bottom: 36,
  left: 0,
  padding: '10px'
}

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

  // REFACTORING JOBS
  const jobs = jobsInfo.jobs
  console.log(jobs)

  // CREATE GEOJSON ARRAY POINTS FOR LAYERS
  let geojsonJobs = []

  if (jobs) {
    geojsonJobs = jobs.map(job => ({
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: [job.longitude, job.latitude]
      }
    }))
  }

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

      <div style={geolocateStyle}>
        <GeolocateControl />
      </div>
      <div style={nationalViewStyle}>
        <NationalViewButton goToNational={() => _goToNationalView()} />
      </div>
      <div style={fullscreenControlStyle}>
        <FullscreenControl />
      </div>
      <div style={navStyle}>
        <NavigationControl />
      </div>
      <div style={scaleControlStyle}>
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
