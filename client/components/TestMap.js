import React, {useState, useRef} from 'react'
import useSwr from 'swr'
import ReactMapGL, {Marker, FlyToInterpolator} from 'react-map-gl'
import useSupercluster from 'use-supercluster'
// import './TestMap.css'

console.log('useSupercluster', useSupercluster)

const TOKEN =
  'pk.eyJ1IjoiYm91c3RhbmlwNzE4IiwiYSI6ImNrZndwa2MweTE1bDkzMHA5NTdvMWxjZHUifQ.zY3GvA4Jq0g5I22NoPCt-Q'

const fetcher = (...args) => fetch(...args).then(response => response.json())

export default function TestMap() {
  // setup map
  const [viewport, setViewport] = useState({
    latitude: 37.785164,
    longitude: -85,
    width: '100vw',
    height: '100vh',
    zoom: 12
  })
  const mapRef = useRef()
  console.log(mapRef)

  // load and prepare data
  const url =
    'https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10'
  const {data, error} = useSwr(url, {fetcher})
  const crimes = data && !error ? data : []
  const points = crimes.map(crime => ({
    type: 'Feature',
    properties: {cluster: false, crimeId: crime.id, category: crime.category},
    geometry: {
      type: 'Point',
      coordinates: [
        parseFloat(crime.location.longitude),
        parseFloat(crime.location.latitude)
      ]
    }
  }))

  // console.log('points', points)
  // console.log('crimes', crimes)

  // get map bounds
  const bounds = mapRef.current
    ? mapRef.current
        .getMap()
        .getBounds()
        .toArray()
        .flat()
    : console.log('mapRef.current is undefined')

  // console.log('bounds', bounds)

  // get clusters
  const {clusters, supercluster} = useSupercluster({
    points,
    bounds,
    zoom: viewport.zoom,
    options: {radius: 75, maxZoom: 20}
  })

  console.log('cluster', clusters)

  // return map
  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={TOKEN}
      onViewportChange={newViewport => {
        setViewport({...newViewport})
      }}
      ref={mapRef}
    >
      {clusters.map(cluster => {
        // every cluster point has coordinates
        const [longitude, latitude] = cluster.geometry.coordinates
        // the point may be either a cluster or a crime point
        const {cluster: isCluster, point_count: pointCount} = cluster.properties

        // we have a cluster to render
        if (isCluster) {
          return (
            <Marker
              key={`cluster-${cluster.id}`}
              latitude={latitude}
              longitude={longitude}
            >
              <div
                className="cluster-marker"
                style={{
                  width: `${10 + pointCount / points.length * 20}px`,
                  height: `${10 + pointCount / points.length * 20}px`
                }}
                onClick={() => {
                  const expansionZoom = Math.min(
                    supercluster.getClusterExpansionZoom(cluster.id),
                    20
                  )

                  setViewport({
                    ...viewport,
                    latitude,
                    longitude,
                    zoom: expansionZoom,
                    transitionInterpolator: new FlyToInterpolator({
                      speed: 2
                    }),
                    transitionDuration: 'auto'
                  })
                }}
              >
                {pointCount}
              </div>
            </Marker>
          )
        } else {
          // we have a single point (crime) to render
          return (
            <Marker
              key={`crime-${cluster.properties.crimeId}`}
              latitude={latitude}
              longitude={longitude}
            >
              <button className="crime-marker">
                <img src="/custody.svg" alt="crime doesn't pay" />
              </button>
            </Marker>
          )
        }
      })}
    </ReactMapGL>
  )
}
