import React, {useState} from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'

// console.log(process.env)

const locations = [
  {
    id: 1,
    name: 'Fullstack Academy',
    coordinates: [40.70494, -74.00918] //I am making the coordinates an array to keep it as close to the tutorial video I found "https://youtu.be/JJatzkPcmoI"
  },
  {
    id: 2,
    name: 'General Assembly',
    coordinates: [40.73992, -73.98995]
  },
  {
    id: 3,
    name: 'Flatiron School',
    coordinates: [40.70531, -74.01405]
  }
]

export default class TestMap extends React.Component {
  constructor() {
    super()
    this.state = {
      viewport: {
        width: '100vw',
        height: '100vh',
        latitude: 40.76027,
        longitude: -73.7178,
        zoom: 10
      },
      selectedLocation: {}
    }
  }

  // const [selectedLocation, setSelectedLocation] = useState(null)

  render() {
    return (
      <div className="testMap">
        <ReactMapGL
          {...this.state.viewport}
          mapboxApiAccessToken="pk.eyJ1IjoiYm91c3RhbmlwNzE4IiwiYSI6ImNrZndwa2MweTE1bDkzMHA5NTdvMWxjZHUifQ.zY3GvA4Jq0g5I22NoPCt-Q"
          mapStyle="mapbox://styles/boustanip718/cki3sq4370yn119qnt5dpkg5v"
          onViewportChange={viewport => this.setState({viewport})}
        >
          {locations.map(location => {
            return (
              <Marker
                key={location.id}
                latitude={location.coordinates[0]}
                longitude={location.coordinates[1]}
              >
                <button
                  className="marker-btn"
                  // onClick={(e) => {
                  //   e.preventDefault()
                  //   setSelectedLocation(location)
                  // }}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/512px-Map_marker.svg.png"
                    alt="School Icon"
                  />
                </button>
              </Marker>
            )
          })}
          {/* {selectedLocation && (
            <Popup
              latitude={selectedLocation.coordinates[0]}
              longitude={selectedLocation.coordinates[1]}
            >
              <div>School</div>
            </Popup>
          )} */}
        </ReactMapGL>
      </div>
    )
  }
}

// import React, {useState} from 'react'
// import ReactMapGL, {Marker, Popup} from 'react-map-gl'

// // console.log(process.env)

// const locations = [
//   {
//     id: 1,
//     name: 'Fullstack Academy',
//     coordinates: [40.70494, -74.00918], //I am making the coordinates an array to keep it as close to the tutorial video I found "https://youtu.be/JJatzkPcmoI"
//   },
//   {
//     id: 2,
//     name: 'General Assembly',
//     coordinates: [40.73992, -73.98995],
//   },
//   {
//     id: 3,
//     name: 'Flatiron School',
//     coordinates: [40.70531, -74.01405],
//   },
// ]

// export default function TestMap() {
//   const [viewport, setViewport] = useState({
//     latitude: 40.76027,
//     longitude: -73.7178,
//     width: '100vw',
//     height: '100vh',
//     zoom: 10,
//   })

//   const [selectedLocation, setSelectedLocation] = useState(null)

//   return (
//     <div className="testMap">
//       <ReactMapGL
//         {...viewport}
//         mapboxApiAccessToken="pk.eyJ1IjoiYm91c3RhbmlwNzE4IiwiYSI6ImNrZndwa2MweTE1bDkzMHA5NTdvMWxjZHUifQ.zY3GvA4Jq0g5I22NoPCt-Q"
//         mapStyle="mapbox://styles/boustanip718/cki3sq4370yn119qnt5dpkg5v"
//         onViewportChange={(viewport) => setViewport({viewport})}
//       >
//         {locations.map((location) => {
//           return (
//             <Marker
//               key={location.id}
//               latitude={location.coordinates[0]}
//               longitude={location.coordinates[1]}
//             >
//               <button
//                 className="marker-btn"
//                 onClick={(e) => {
//                   e.preventDefault()
//                   setSelectedLocation(location)
//                 }}
//               >
//                 <img
//                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/512px-Map_marker.svg.png"
//                   alt="School Icon"
//                 />
//               </button>
//             </Marker>
//           )
//         })}
//         {selectedLocation && (
//           <Popup
//             latitude={selectedLocation.coordinates[0]}
//             longitude={selectedLocation.coordinates[1]}
//           >
//             <div>School</div>
//           </Popup>
//         )}
//       </ReactMapGL>
//     </div>
//   )
// }
