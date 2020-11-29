import React from 'react'
import {useRef, useEffect} from 'react'
import mapboxgl from 'mapbox-gl'

const Map = ({latitude, longitude}) => {
  const mapRef = useRef(null)

  console.log(latitude, longitude)

  useEffect(
    () => {
      mapboxgl.accessToken =
        'pk.eyJ1IjoiZHVzYW5ydWxhIiwiYSI6ImNrZHlwaG4yNzE1ODUyeG9hbDl4cWpiNmoifQ.-iCgFfxdLitIYE1errnrZQ'
      if (latitude && longitude) {
        const map = new mapboxgl.Map({
          container: mapRef.current,
          center: [longitude, latitude],
          zoom: 12, // starting zoom
          style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
        })
      }

      // ispod ide sta hocu da se desi kada se komponenta
      // return () => {
      //   logika koja ce da se desi kada se komponenta unmountuje
      // }
    },
    [latitude, longitude]
  )

  if (!latitude && !longitude) {
    return <h1> Map Loading... </h1>
  }

  return <div ref={mapRef} className="map" />
}

export default Map
