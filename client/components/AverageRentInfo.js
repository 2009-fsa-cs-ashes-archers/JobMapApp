import React from 'react'
import {connect} from 'react-redux'
import {dataByState} from '../../utils/constants'
import InfoPopover from './info-popover';
import Table from 'react-bootstrap/Table'


const rentToIncome = (rent, salary) => {
  return Math.round((rent * 100) / (salary/12))
}
const getQuality = (ratio) => {
  let quality
  if (ratio <= 25) {
    quality = "green"
  } else if (ratio <= 30) {
    quality = "yellow"
  } else {
    quality = "red"
  }
  return quality;
}

const textColors = {
  green: 'green',
  yellow: '#E6AD0F',
  red: '#E63946'
}

export const AverageRentInfo = props => {

    const selectedState = props.selectedState
    const averageSalary = props.stateJobs.averageSalary
    const stateData = dataByState[selectedState]

    let ratio;
    let quality;

    if (selectedState && selectedState !== 'USA') {
      ratio = rentToIncome(stateData.twoBedroomAverageRent, averageSalary)
      quality = getQuality(ratio)
    }

  return (
    <div>
      {!props.loading && selectedState !== 'USA' && (
        <div className={`average-rent-container${quality ? ` rent-${quality}` : ''}`}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Apartment Size</th>
                <th>Average Rent</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Studio</td>
                <td>${stateData.studioAverageRent}</td>
              </tr>
              <tr>
                <td>One Bedroom</td>
                <td>${stateData.oneBedroomAverageRent}</td>
              </tr>
              <tr>
                <td>Two Bedroom</td>
                <td>${stateData.twoBedroomAverageRent}</td>
              </tr>
            </tbody>
          </Table>
            <div className="rent-ratio">
              <h6 style={{fontWeight: "bold", color: textColors[quality]}}>Ratio: {ratio ? ratio +'%' : 'N/A'}</h6>
              <InfoPopover />
            </div>
        </div>
      )}
    </div>
  )
}


const mapStateToProps = state => {
  return {
    stateJobs: state.stateJobs,
    selectedState: state.selectedState
  }
}

export default connect(mapStateToProps)(AverageRentInfo)
