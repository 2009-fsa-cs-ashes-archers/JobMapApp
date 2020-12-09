import React from 'react'
import {Marker, FlyToInterpolator} from 'react-map-gl'
import useSupercluster from 'use-supercluster'

export default function Clusters(props) {
  console.log(props)
  const points = props.geojson
  const bounds = props.mapRef.current
    ? props.mapRef.current
        .getMap()
        .getBounds()
        .toArray()
        .flat()
    : null

  const {clusters, supercluster} = useSupercluster({
    points,
    bounds,
    zoom: viewport.zoom,
    options: {radius: 75, maxZoom: 20}
  })

  return clusters.map(cluster => {
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
  })
}
