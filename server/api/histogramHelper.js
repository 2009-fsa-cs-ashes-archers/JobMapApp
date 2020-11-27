// Helper function for calculating the percentage in each bracket for the histogram
const calculatePercHistogram = histogram => {
  const reportingArray = Object.values(histogram)
  // calculate the total number of jobs reporting a salary
  const totalSalariesReported = reportingArray.reduce((accum, curr) => {
    return accum + curr
  }, 0)
  // initiate the return object
  const histogramByPercent = {}
  // loop thru old histogram obj and calculate %s using the totalSalariesReported
  for (let key in histogram) {
    histogramByPercent[key] = Math.round(
      histogram[key] / totalSalariesReported * 100
    )
  }
  return histogramByPercent
}

module.exports = calculatePercHistogram
