import React from 'react'
import {connect} from 'react-redux'
import {VictoryAxis, VictoryBar, VictoryChart} from 'victory'
import accounting from 'accounting'

export const SearchData = props => {
  let data
  if (props.selectedState !== 'USA') {
    data = props.stateJobs
  } else {
    data = props.country
  }

  // Sets up histogram salary distr. data for Victory Histogram
  let histData
  if (data && data.histogramByPercent) {
    histData = Object.keys(data.histogramByPercent).map(salaryRange => {
      return {
        range: Number(salaryRange),
        percentage: data.histogramByPercent[salaryRange]
      }
    })
  }

  return (
    <div className="search-data-container">
      {!props.loading && histData ? (
        <div>
          <h4>
            {props.selectedState}: {props.filter}
          </h4>
          <h4>Total Matches: {data.count}</h4>
          <h4>
            Average Salary{data.averageSalary
              ? ': ' + accounting.formatMoney(data.averageSalary)
              : ' N/A'}
          </h4>
          {data.averageSalary && (
            <VictoryChart domainPadding={20}>
              <VictoryAxis tickFormat={range => `$${range / 1000}K+`} />
              <VictoryAxis dependentAxis tickFormat={per => `${per}%`} />
              <VictoryBar
                style={{data: {fill: '#c43a31'}}}
                barRatio={1}
                data={histData}
                x="range"
                y="percentage"
              />
            </VictoryChart>
          )}
        </div>
      ) : (
        <h4>Loading...</h4>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    country: state.country,
    stateJobs: state.stateJobs,
    filter: state.filter,
    selectedState: state.selectedState
  }
}

export default connect(mapStateToProps)(SearchData)
