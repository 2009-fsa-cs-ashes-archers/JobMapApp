import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {VictoryAxis, VictoryBar, VictoryChart, VictoryTheme} from 'victory'

export const SearchData = props => {
  const data = props.stateJobs

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
  console.log(histData)
  // `${salaryRange.slice(0, -3)}K+`
  return (
    <div className="search-data-container">
      {histData ? (
        <div>
          <h4>*Current GeoState*: *Filters*</h4>
          <h4>Total Matches: {data.count}</h4>
          <h4>Average Salary: {data.averageSalary}</h4>
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
    stateJobs: state.stateJobs
  }
}

export default connect(mapStateToProps)(SearchData)
