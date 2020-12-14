import React from 'react'
import {connect} from 'react-redux'
import {dataByState} from '../../utils/constants'
import InfoPopover from './info-popover';



export const AverageRentInfo = props => {
    
    const selectedState = props.selectedState
    const averageSalary = props.stateJobs.averageSalary

    const rentToIncome = (rent, salary) => {
        return Math.round((rent * 100) / (salary/12))
    }

  return (
    <div>
      {!props.loading && selectedState !== 'USA' ? (
        <div className="average-rent-container">
            <h6>Studio average rent: ${dataByState[selectedState].studioAverageRent}/month</h6>
            <h6>1 bedroom average rent: ${dataByState[selectedState].oneBedroomAverageRent}/month</h6>
            <h6>2 bedroom average rent: ${dataByState[selectedState].twoBedroomAverageRent}/month</h6>
            <h6>Rent-to-income ratio: {rentToIncome(dataByState[selectedState].twoBedroomAverageRent, averageSalary)}%</h6>
            <InfoPopover />
        </div>
      ) : (<></>)}
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