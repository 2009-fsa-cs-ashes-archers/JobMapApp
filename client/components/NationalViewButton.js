import React from 'react'
// import {MapController} from 'react-map-gl'

const NationalViewButton = ({goToNational}) => {
  return (
    <button className="national-button" type="button" onClick={goToNational}>
      🇺🇸
    </button>
  )
}

export default NationalViewButton
