import React from 'react'
import {useRef, useEffect} from 'react'
import mapboxgl from 'mapbox-gl'
import ReactMapboxGl from 'react-mapbox-gl'

const Map = ({latitude, longitude}) => {
  const ReactMap = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiZHVzYW5ydWxhIiwiYSI6ImNrZHlwaG4yNzE1ODUyeG9hbDl4cWpiNmoifQ.-iCgFfxdLitIYE1errnrZQ'
  })
  return longitude && latitude ? (
    <ReactMap
      center={[longitude, latitude]}
      containerStyle={{id: 'map-container'}}
      style="mapbox://styles/mapbox/streets-v10"
    />
  ) : (
    <p>Loading ...</p>
  )
}

// const Map = ({latitude, longitude}) => {
//   const mapRef = useRef(null)

//   console.log(latitude, longitude)

//   useEffect(
//     () => {
//       mapboxgl.accessToken =
//         'pk.eyJ1IjoiZHVzYW5ydWxhIiwiYSI6ImNrZHlwaG4yNzE1ODUyeG9hbDl4cWpiNmoifQ.-iCgFfxdLitIYE1errnrZQ'
//       if (latitude && longitude) {
//         const map = new mapboxgl.Map({
//           container: 'map-container',
//           center: [longitude, latitude],
//           zoom: 12, // starting zoom
//           style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
//         })
//       }
//     },
//     [latitude, longitude]
//   )

//   if (!latitude && !longitude) {
//     return <h1> Loading... </h1>
//   }

//   return <div ref={mapRef} className="map" />
// }

export default Map
