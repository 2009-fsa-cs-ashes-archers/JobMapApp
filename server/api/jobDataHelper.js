const axios = require('axios')
// Use this helper function for all routes that return an array of jobs from Adzuna, to keep them all in a clean and consistent format
const jobDataHelper = jobsArray => {
  return jobsArray.map(job => {
    return {
      // Note that a <strong> tag is wrapped around each word in the title -- it's a pretty archaic programming practice to store style tags in the api...
      title: job.title.replace(/(<([^>]+)>)/gi, ''),
      company: job.company.display_name,
      salary:
        Number(job.salary_is_predicted) > 0
          ? Number(job.salary_is_predicted)
          : undefined,
      maxSalary: Number(job.salary_max),
      minSalary: Number(job.salary_min),
      locationName: job.location.display_name,
      area: job.location.area,
      longitude: job.longitude,
      latitude: job.latitude,
      url: job.redirect_url,
      // Description also returns a lot of inline html styling
      description: job.description.replace(/(<([^>]+)>)/gi, ''),
      created: job.created,
      contract: job.contract_time
    }
  })
}

module.exports = jobDataHelper
