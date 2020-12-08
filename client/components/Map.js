import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {dataByState, states} from '../../utils/constants'
import MapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
  FlyToInterpolator
} from 'react-map-gl'
import {applyGeoState} from '../store/selectedState'
import {fetchStateJobs} from '../store/stateJobs'
import {
  Pins,
  NationalPins,
  JobInfo,
  JobDetails,
  NationalViewButton,
  StateInfo
} from '../components'
import ClickAwayListener from 'material-ui/internal/ClickAwayListener'

const TOKEN =
  'pk.eyJ1IjoiYm91c3RhbmlwNzE4IiwiYSI6ImNrZndwa2MweTE1bDkzMHA5NTdvMWxjZHUifQ.zY3GvA4Jq0g5I22NoPCt-Q'

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
      jobPopupInfo: null,
      jobHoverInfo: null,
      stateHoverInfo: null
    }
    this._goToNationalView = this._goToNationalView.bind(this)
    this._goToStateView = this._goToStateView.bind(this)
  }

  // Listens for a new selectedState
  componentDidUpdate(prevProps) {
    const {selectedState} = this.props
    if (prevProps.selectedState !== selectedState) {
      if (selectedState === 'USA') {
        this._goToNationalView()
      } else {
        this._goToStateView(dataByState[selectedState])
      }
    }
  }

  _updateViewport = viewport => {
    this.setState({viewport})
  }

  // Methods for Job Nodes
  _onClickMarker = job => {
    this.setState({jobPopupInfo: job})
  }
  _onHoverMarker = job => {
    this.setState({jobHoverInfo: job})
  }
  _onLeaveHover = () => {
    this.setState({jobHoverInfo: null})
  }
  _onClickAwayPopup = () => {
    this.setState({jobPopupInfo: null})
  }

  // Methods for State Nodes
  _onClickStateNode = async geoState => {
    this.setState({stateHoverInfo: null})
    const {filter, updateSelectedState, updateStateJobs} = this.props
    updateSelectedState(geoState.name)
    await updateStateJobs(geoState.name, filter)
  }
  _onHoverStateNode = geoState => {
    this.setState({stateHoverInfo: geoState})
  }
  _onLeaveHoverStateNode = () => {
    this.setState({stateHoverInfo: null})
  }

  // Methods for Changing View
  _goToNationalView = () => {
    this.setState({
      viewport: {
        ...defaultViewport,
        transitionDuration: 1500,
        transitionInterpolator: new FlyToInterpolator()
      }
    })
    this.props.updateSelectedState('USA')
  }
  _goToStateView = geoState => {
    this.setState({
      viewport: {
        latitude: geoState.latitude,
        // Offset the lng
        longitude: geoState.longitude + 3,
        zoom: 6,
        bearing: 0,
        pitch: 0,
        transitionDuration: 1500,
        transitionInterpolator: new FlyToInterpolator()
      }
    })
  }

  // Popups for Job Nodes
  _renderPopup() {
    const {jobPopupInfo} = this.state
    return (
      jobPopupInfo && (
        <ClickAwayListener
          onClickAway={this._onClickAwayPopup}
          // style={{margin: 0, padding: 0}}
        >
          <Popup
            tipSize={5}
            anchor="top"
            longitude={jobPopupInfo.longitude}
            latitude={jobPopupInfo.latitude}
            closeOnClick={false}
            closeButton={false}
            onClose={() => this.setState({jobPopupInfo: null})}
            // style={{padding: 0,
            // margin: 0,
            // }}
          >
            <JobDetails
              info={jobPopupInfo}
              // style={{margin: 0, padding: 0}}
            />
          </Popup>
        </ClickAwayListener>
      )
    )
  }
  _renderHover() {
    const {jobHoverInfo, jobPopupInfo} = this.state
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
  _renderStateHover() {
    const {stateHoverInfo} = this.state
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

  render() {
    const {viewport} = this.state
    const {country} = this.props
    const jobs = this.props.jobs.jobs
    let selectedState = this.props.selectedState
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

    return (
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={TOKEN}
      >
        {/* Show Job Pins if a state is selected */}
        {selectedState !== 'USA' && (
          <Pins
            jobs={jobs}
            onClick={this._onClickMarker}
            onMouseEnter={this._onHoverMarker}
            onMouseLeave={this._onLeaveHover}
          />
        )}

        {/* Show National Pins if USA selected */}
        {selectedState === 'USA' && (
          <NationalPins
            geostates={geostates}
            onClick={this._onClickStateNode}
            onMouseEnter={this._onHoverStateNode}
            onMouseLeave={this._onLeaveHoverStateNode}
          />
        )}
        {this._renderPopup()}
        {this._renderHover()}
        {this._renderStateHover()}

        <div style={geolocateStyle}>
          <GeolocateControl />
        </div>
        <div style={nationalViewStyle}>
          <NationalViewButton goToNational={() => this._goToNationalView()} />
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
