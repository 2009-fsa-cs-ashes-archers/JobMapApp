import React from 'react'
import {connect} from 'react-redux'
import {fetchCountry} from '../store/country'
import {applyGeoState} from '../store/selectedState'
import Tooltip from '@material-ui/core/Tooltip';

const NationalViewButton = props => {
  return (
    <Tooltip title="Return To USA" aria-label="Return To USA" placement="right-end">
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
    </Tooltip>
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
