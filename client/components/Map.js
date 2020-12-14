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
  FlyToInterpolator,
  Source,
  Layer,
} from 'react-map-gl'
import {
  Pins,
  NationalPins,
  JobInfo,
  JobDetails,
  NationalViewButton,
  StateInfo,
} from '../components'
import ClickAwayListener from 'material-ui/internal/ClickAwayListener'
import {heatmapLayer} from './heatmap-style'
import ToggleButtonsMapView from './ToggleButtonsMapView'
import {clusterLayer, clusterCountLayer, unclusteredPointLayer} from './layers'

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
  pitch: 0,
}

let firstMapView = 'pins'

export const Map = ({
  filter,
  selectedState,
  country,
  jobsInfo,
  updateSelectedState,
  updateStateJobs,
}) => {
  const [viewport, setViewport] = useState(defaultViewport)
  const [jobPopupInfo, setJobPopupInfo] = useState(null)
  const [jobHoverInfo, setJobHoverInfo] = useState(null)
  const [stateHoverInfo, setStateHoverInfo] = useState(null)
  const [mapView, setMapView] = useState(firstMapView)

  // GRAB ALL JOBS
  const jobs = jobsInfo.jobs

  // Map view (pins, heatmap, clusters)
  const handleMapView = (value) => {
    setMapView(value)
  }

  // Set up geostates for rendering national pins
  const geostates =
    Object.keys(country).length === 0 && country.constructor === Object
      ? []
      : states.map((state) => {
          const jobsInState = country.jobsPerState[state]
          const dataForState = dataByState[state]
          return {
            name: state,
            latitude: dataForState.latitude,
            longitude: dataForState.longitude,
            count: jobsInState.count,
            averageSalary: jobsInState.averageSalary,
          }
        })

  // GeoJson for the heatmap

  let myGeoJSON = {}
  myGeoJSON.type = 'FeatureCollection'
  myGeoJSON.features = []

  if (jobs) {
    myGeoJSON.features = jobs.map((job) => ({
      type: 'Feature',
      properties: {
        name: job.title,
      },
      geometry: {
        type: 'Point',
        coordinates: [job.longitude, job.latitude],
      },
    }))
  }

  // listens for change in selectedState to change a viewport
  const _goToNationalView = () => {
    setViewport({
      ...defaultViewport,
      transitionDuration: 1500,
      transitionInterpolator: new FlyToInterpolator(),
    })
  }
  const _goToStateView = (geoState) => {
    setViewport({
      latitude: geoState.latitude,
      // Offset the lng
      longitude: geoState.longitude + 3,
      zoom: 6,
      bearing: 0,
      pitch: 0,
      transitionDuration: 1500,
      transitionInterpolator: new FlyToInterpolator(),
    })
  }
  useEffect(() => {
    if (selectedState === 'USA') {
      _goToNationalView()
    } else {
      _goToStateView(dataByState[selectedState])
    }
  }, [selectedState])

  // Methods for Job Nodes
  const _onClickMarker = (job) => {
    setJobPopupInfo(job)
  }
  const _onHoverMarker = (job) => {
    setJobHoverInfo(job)
  }
  const _onLeaveHover = () => {
    setJobHoverInfo(null)
  }
  const _onClickAwayPopup = () => {
    setJobPopupInfo(null)
  }

  // Methods for State Nodes
  const _onClickStateNode = async (geoState) => {
    setStateHoverInfo(null)
    updateSelectedState(geoState.name)
    await updateStateJobs(geoState.name, filter)
  }
  const _onHoverStateNode = (geoState) => {
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

  // Cluster Functions
  const _sourceRef = React.createRef()

  const _onClickCluster = (event) => {
    if (event.features.length) {
      const feature = event.features[0]
      const clusterId = feature.properties.cluster_id

      const mapboxSource = _sourceRef.current.getSource()

      mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
        if (err) {
          return
        }

        setViewport({
          ...viewport,
          longitude: feature.geometry.coordinates[0],
          latitude: feature.geometry.coordinates[1],
          zoom,
          transitionDuration: 500,
        })
      })
    }
  }

  return (
    <MapGL
      {...viewport}
      width="100%"
      height="100%"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={(newViewport) => {
        setViewport(newViewport)
      }}
      mapboxApiAccessToken={TOKEN}
      interactiveLayerIds={[clusterLayer.id]}
      onClick={_onClickCluster}
    >
      {/* Show Job Pins if a state is selected */}
      {(() => {
        if (mapView === 'pins' && selectedState !== 'USA') {
          return (
            <Pins
              jobs={jobs}
              onClick={_onClickMarker}
              onMouseEnter={_onHoverMarker}
              onMouseLeave={_onLeaveHover}
            />
          )
        }
      })()}

      {/* Show National Pins if USA selected */}
      {(() => {
        if (selectedState === 'USA') {
          return (
            <NationalPins
              geostates={geostates}
              onClick={_onClickStateNode}
              onMouseEnter={_onHoverStateNode}
              onMouseLeave={_onLeaveHoverStateNode}
            />
          )
        }
      })()}

      {/* Show heatmap if mapView as a heatmap selected (works for states) */}
      {(() => {
        if (mapView === 'heatMap' && selectedState !== 'USA') {
          return (
            <Source type="geojson" data={myGeoJSON}>
              <Layer {...heatmapLayer} />
            </Source>
          )
        }
      })()}

      {/* Show heatmap if mapView as a heatmap selected (works for states) */}
      {(() => {
        if (mapView === 'clusters' && selectedState !== 'USA') {
          return (
            <Source
              type="geojson"
              data={myGeoJSON}
              cluster={true}
              clusterMaxZoom={14}
              clusterRadius={50}
              ref={_sourceRef}
            >
              <Layer {...clusterLayer} />
              <Layer {...clusterCountLayer} />
              <Layer {...unclusteredPointLayer} />
            </Source>
          )
        }
      })()}

      {_renderPopup()}
      {_renderHover()}
      {_renderStateHover()}

      <div className="geolocateStyle">
        <GeolocateControl />
      </div>
      <div className="nationalViewStyle">
        <NationalViewButton />
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
      <div className="toggleButtonsStyle">
        <ToggleButtonsMapView mapView={handleMapView} />
      </div>
    </MapGL>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedState: state.selectedState,
    country: state.country,
    filter: state.filter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSelectedState: (stateName) => dispatch(applyGeoState(stateName)),
    updateStateJobs: (stateName, filter) =>
      dispatch(fetchStateJobs(stateName, filter)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
