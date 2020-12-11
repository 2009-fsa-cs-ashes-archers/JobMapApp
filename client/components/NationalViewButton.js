import React from 'react'
import {connect} from 'react-redux'
import {fetchCountry} from '../store/country'
import {applyGeoState} from '../store/selectedState'

const NationalViewButton = props => {
  return (
    <button
      className="national-button"
      type="button"
      onClick={() => {
        props.updateSelectedState('USA')
        props.updateCountry(props.filter)
      }}
    >
      🇺🇸
    </button>
  )
}

const mapStateToProps = state => {
  return {
    filter: state.filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCountry: filter => dispatch(fetchCountry(filter)),
    updateSelectedState: geoState => dispatch(applyGeoState(geoState))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NationalViewButton)
