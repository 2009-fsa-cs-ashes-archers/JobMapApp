import React from 'react'
import {clusterLayer, clusterCountLayer, unclusteredPointLayer} from './layers'
import {dataByState} from '../../utils/constants'

// console.log(dataByState)

const geoStatesArray = []

for (let key in dataByState) {
  // console.log(dataByState[key])
  geoStatesArray.push({
    name: key,
    longitude: dataByState[key].longitude,
    latitude: dataByState[key].latitude
  })
}

// console.log(geoStatesArray)

import MapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
  Source,
  Layer
} from 'react-map-gl'

import Pins from './pins'
import JobInfo from './job-info'

const TOKEN =
  'pk.eyJ1IjoiYm91c3RhbmlwNzE4IiwiYSI6ImNrZndwa2MweTE1bDkzMHA5NTdvMWxjZHUifQ.zY3GvA4Jq0g5I22NoPCt-Q'

const geolocateStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
}

const fullscreenControlStyle = {
  position: 'absolute',
  top: 36,
  left: 0,
  padding: '10px'
}

const navStyle = {
  position: 'absolute',
  top: 72,
  left: 0,
  padding: '10px'
}

const scaleControlStyle = {
  position: 'absolute',
  bottom: 36,
  left: 0,
  padding: '10px'
}

const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: geoStatesArray.map(geostate => [
          geostate.longitude,
          geostate.latitude
        ])
      }
    }
  ]
}

export default class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      viewport: {
        latitude: 37.0,
        longitude: -85,
        zoom: 3.5,
        bearing: 0,
        pitch: 0
      },
      popupInfo: null
    }
  }
  _updateViewport = viewport => {
    this.setState({viewport})
  }

  _onClickMarker = job => {
    this.setState({popupInfo: job})
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
          closeOnClick={false}
          onClose={() => this.setState({popupInfo: null})}
        >
          <JobInfo info={popupInfo} />
        </Popup>
      )
    )
  }

  render() {
    const {viewport} = this.state
    const jobs = this.props.jobs.jobs

    return (
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={TOKEN}
      >
        <Source
          type="geojson"
          data={geojson}
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={50}
          ref={this._sourceRef}
        >
          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />
        </Source>
        <Pins jobs={jobs} onClick={this._onClickMarker} />

        {this._renderPopup()}

        <div style={geolocateStyle}>
          <GeolocateControl />
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

// Reference (code above):
// https://github.com/visgl/react-map-gl/tree/5.2-release/examples/controls
// https://visgl.github.io/react-map-gl/examples

// ------------------------------------------------------------------------------------------------------------------------------
// Agne's other code with hooks, just in case:

// import React, {useState, useEffect} from 'react'
// import MapGL from 'react-map-gl';
// import Pins from './pins';

// const MAPBOX_TOKEN = 'pk.eyJ1IjoiYm91c3RhbmlwNzE4IiwiYSI6ImNrZndwa2MweTE1bDkzMHA5NTdvMWxjZHUifQ.zY3GvA4Jq0g5I22NoPCt-Q'; // Set your mapbox token here

// export default function Map(props) {
//   const jobs = props.jobs.jobs
//   console.log(jobs)

//   const [viewport, setViewport] = useState({
//     latitude: 40.730610,
//     longitude: -73.935242,
//     zoom: 7,
//     bearing: 0,
//     pitch: 0
//   });

//   return (
//     <MapGL
//       {...viewport}
//       width="100vw"
//       height="100vh"
//       mapStyle="mapbox://styles/mapbox/dark-v9"
//       onViewportChange={nextViewport => setViewport(nextViewport)}
//       mapboxApiAccessToken={MAPBOX_TOKEN}
//     >
//       {/* <Pins jobs={jobs} /> */}
//       {console.log(jobs)}
//     </ MapGL>
//   );
// }

// ------------------------------------------------------------------------------------------------------------------------------
// Peter's ex-code with hooks, just in case:

// import React, {useState, useEffect} from 'react'
// import ReactMapGL, {Marker, Popup} from 'react-map-gl'

// export default function Map(props) {
//   const jobs = props.jobs.jobs
//   console.log(jobs)

//   const [viewport, setViewport] = useState({
//     latitude: 40.76027,
//     longitude: -73.7178,
//     width: '100vw',
//     height: '100vh',
//     zoom: 10
//   })

//   const [selectedJob, setSelectedJob] = useState(null)

//   useEffect(() => {
//     const listener = e => {
//       if (e.key === 'Escape') {
//         setSelectedJob(null)
//       }
//     }
//     window.addEventListener('keydown', listener)

//     return () => {
//       window.removeEventListener('keydown', listener)
//     }
//   }, [])

//   return (
//     <div className="map">
//       <ReactMapGL
//         {...viewport}
//         mapboxApiAccessToken="pk.eyJ1IjoiYm91c3RhbmlwNzE4IiwiYSI6ImNrZndwa2MweTE1bDkzMHA5NTdvMWxjZHUifQ.zY3GvA4Jq0g5I22NoPCt-Q"
//         mapStyle="mapbox://styles/boustanip718/cki3sq4370yn119qnt5dpkg5v"
//         onViewportChange={nextViewport => setViewport(nextViewport)}
//         // container="map-container"
//       >
//         {jobs &&
//           jobs.map((job, idx) => {
//             return (
//               <Marker
//                 key={idx}
//                 latitude={job.latitude}
//                 longitude={job.longitude}
//               >
//                 <button
//                   type="submit"
//                   className="marker-btn"
//                   onClick={e => {
//                     e.preventDefault()
//                     setSelectedJob(job)
//                   }}
//                 >
//                   <img
//                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/512px-Map_marker.svg.png"
//                     alt="School Icon"
//                   />
//                 </button>
//               </Marker>
//             )
//           })}
//         {selectedJob && (
//           <Popup
//             latitude={selectedJob.latitude}
//             longitude={selectedJob.longitude}
//             onClose={() => setSelectedJob(null)}
//           >
//             <div className="selectedJob">
//               <h2>{selectedJob.company}</h2>
//               <p>{selectedJob.title}</p>
//               <p>{selectedJob.description}</p>
//               <p>{selectedJob.locationName}</p>
//             </div>
//           </Popup>
//         )}
//       </ReactMapGL>
//     </div>
//   )
// }
