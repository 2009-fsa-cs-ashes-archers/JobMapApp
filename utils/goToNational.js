import {FlyToInterpolator} from 'react-map-gl'

const goToNational = thisContext => {
  console.log('thisContext param:', thisContext)
  thisContext.setState({
    viewport: {
      latitude: 37.785164,
      longitude: -85,
      zoom: 3.5,
      bearing: 0,
      pitch: 0,
      transitionDuration: 1500,
      transitionInterpolator: new FlyToInterpolator()
    }
  })
}

export default goToNational
