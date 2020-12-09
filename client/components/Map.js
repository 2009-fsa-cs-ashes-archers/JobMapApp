import React, {useState, useEffect, useRef} from 'react'
import {connect} from 'react-redux'
import {dataByState} from '../../utils/constants'
import MapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
  FlyToInterpolator
} from 'react-map-gl'
import NationalViewButton from './NationalViewButton'
import Pins from './pins'
import NationalPins from './nationalPins'
import JobInfo from './job-info'
import JobDetails from './job-details'
import Clusters from './Clusters'
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

const geolocateStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
}

// MAPREF
const mapRef = useRef()

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

const defaultViewport = {
  latitude: 37.785164,
  longitude: -85,
  zoom: 3.5,
  bearing: 0,
  pitch: 0
}

export class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      viewport: defaultViewport,
      popupInfo: null,
      hoverInfo: null
    }
    this._goToNewView = this._goToNewView.bind(this)
  }

  componentDidUpdate(prevProps) {
    const {selectedState} = this.props
    if (prevProps.selectedState !== selectedState) {
      if (selectedState === 'USA') {
        this._goToNewView(defaultViewport)
      } else {
        console.log('Time to transition to', selectedState, 'view.')
      }
    }
  }

  _updateViewport = viewport => {
    this.setState({viewport})
  }

  _onClickMarker = job => {
    this.setState({popupInfo: job})
  }

  _onHoverMarker = job => {
    this.setState({hoverInfo: job})
  }

  _onLeaveHover = () => {
    this.setState({hoverInfo: null})
  }

  _onClickAwayPopup = () => {
    this.setState({popupInfo: null})
  }

  _onClickNode = () => {
    console.log('clicked job')
  }

  _onClickCluster = () => {
    console.log('clicked cluster')
  }

  _goToNewView = stateViewport => {
    this.setState({
      viewport: {
        ...stateViewport,
        transitionDuration: 1500,
        transitionInterpolator: new FlyToInterpolator()
      }
    })
  }

  _renderPopup() {
    const {popupInfo} = this.state

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={true}
          onClose={() => this.setState({popupInfo: null})}
        >
          <JobDetails info={popupInfo} onClickAway={this._onClickAwayPopup} />
        </Popup>
      )
    )
  }

  _renderHover() {
    const {hoverInfo, popupInfo} = this.state
    return (
      hoverInfo &&
      hoverInfo !== popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={hoverInfo.longitude}
          latitude={hoverInfo.latitude}
          closeOnClick={false}
        >
          <JobInfo info={hoverInfo} />
        </Popup>
      )
    )
  }

  render() {
    const {viewport} = this.state
    const jobs = this.props.jobs.jobs
    let selectedState = this.props.selectedState

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

    console.log('geojsonJobs', geojsonJobs)

    console.log(selectedState)

    return (
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={TOKEN}
        ref={mapRef}
        // onClick={this._onClickCluster}
      >
        <Pins
          jobs={jobs}
          onClick={this._onClickMarker}
          onMouseEnter={this._onHoverMarker}
          onMouseLeave={this._onLeaveHover}
        />

        <Clusters geojson={geojsonJobs} mapRef={mapRef} />

        {selectedState === 'USA' && <NationalPins geostates={geoStatesArray} />}

        {this._renderPopup()}
        {this._renderHover()}

        <div style={geolocateStyle}>
          <GeolocateControl />
        </div>
        <div style={nationalViewStyle}>
          <NationalViewButton
            goToNational={() => this._goToNewView(defaultViewport)}
          />
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
}

const mapStateToProps = state => {
  return {
    selectedState: state.selectedState
  }
}

export default connect(mapStateToProps)(Map)
