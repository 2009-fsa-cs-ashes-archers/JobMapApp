import React, {useState, useEffect} from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl'

export default function Map(props) {
  const jobs = props.jobs.jobs
  console.log(jobs)

  const [viewport, setViewport] = useState({
    latitude: 40.76027,
    longitude: -73.7178,
    width: '100vw',
    height: '100vh',
    zoom: 10
  })

  const [selectedJob, setSelectedJob] = useState(null)

  useEffect(() => {
    const listener = e => {
      if (e.key === 'Escape') {
        setSelectedJob(null)
      }
    }
    window.addEventListener('keydown', listener)

    return () => {
      window.removeEventListener('keydown', listener)
    }
  }, [])

  return (
    <div className="map">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiYm91c3RhbmlwNzE4IiwiYSI6ImNrZndwa2MweTE1bDkzMHA5NTdvMWxjZHUifQ.zY3GvA4Jq0g5I22NoPCt-Q"
        mapStyle="mapbox://styles/boustanip718/cki3sq4370yn119qnt5dpkg5v"
        onViewportChange={viewport => setViewport(viewport)}
        container="map-container"
      >
        {jobs &&
          jobs.map((job, idx) => {
            return (
              <Marker
                key={idx}
                latitude={job.latitude}
                longitude={job.longitude}
              >
                <button
                  className="marker-btn"
                  onClick={e => {
                    e.preventDefault()
                    setSelectedJob(job)
                  }}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/512px-Map_marker.svg.png"
                    alt="School Icon"
                  />
                </button>
              </Marker>
            )
          })}
        {selectedJob && (
          <Popup
            latitude={selectedJob.latitude}
            longitude={selectedJob.longitude}
            onClose={() => setSelectedJob(null)}
          >
            <div className="selectedJob">
              <h2>{selectedJob.company}</h2>
              <p>{selectedJob.title}</p>
              <p>{selectedJob.description}</p>
              <p>{selectedJob.locationName}</p>
            </div>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  )
}
