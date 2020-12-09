const jobsByStateHelper = jobsPerStateArray => {
  const jobsPerStateObject = {}
  jobsPerStateArray.forEach(stateObj => {
    const state = Object.keys(stateObj)[0]
    jobsPerStateObject[state] = stateObj[state]
  })
  return jobsPerStateObject
}

module.exports = jobsByStateHelper
