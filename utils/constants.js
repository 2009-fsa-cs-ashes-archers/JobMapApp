// Sample:
const nationalData = {}

const dataByState = {
  // Sample:
  Alabama: {
    latitude: 32.31823,
    longitude: -86.902298,
    totalSoftwareDeveloperJobs: 10000,
    medianDevloperSalary: 60000,
    medianRent1Bed: 800,
    medianRent2Bed: 1100,
    abb: 'AL'
  },
  Alaska: {
    latitude: 66.160507,
    longitude: -153.369141,
    abb: 'AK',
    zoom: 3.5
  },
  Arizona: {
    latitude: 34.048927,
    longitude: -111.093735,
    abb: 'AZ'
  },
  Arkansas: {
    latitude: 34.799999,
    longitude: -92.199997,
    abb: 'AR'
  },
  California: {
    latitude: 36.778259,
    longitude: -119.417931,
    abb: 'CA',
    zoom: 5
  },
  Colorado: {
    latitude: 39.113014,
    longitude: -105.358887,
    abb: 'CO'
  },
  Connecticut: {
    latitude: 41.599998,
    longitude: -72.699997,
    abb: 'CT',
    zoom: 7.5
  },
  Delaware: {
    latitude: 39.0,
    longitude: -75.5,
    abb: 'DE',
    zoom: 7.5
  },
  Florida: {
    latitude: 27.994402,
    longitude: -81.760254,
    abb: 'FL'
  },
  Georgia: {
    latitude: 33.247875,
    longitude: -83.441162,
    abb: 'GA'
  },
  Hawaii: {
    latitude: 19.741755,
    longitude: -155.844437,
    abb: 'HI'
  },
  Idaho: {
    latitude: 44.068203,
    longitude: -114.742043,
    abb: 'ID'
  },
  Illinois: {
    latitude: 40.0,
    longitude: -89.0,
    abb: 'IL'
  },
  Indiana: {
    latitude: 40.273502,
    longitude: -86.126976,
    abb: 'IN'
  },
  Iowa: {
    latitude: 42.032974,
    longitude: -93.581543,
    abb: 'IA'
  },
  Kansas: {
    latitude: 38.5,
    longitude: -98.0,
    abb: 'KS'
  },
  Kentucky: {
    latitude: 37.839333,
    longitude: -84.27002,
    abb: 'KY'
  },
  Louisiana: {
    latitude: 30.39183,
    longitude: -92.329102,
    abb: 'LA'
  },
  Maine: {
    latitude: 45.367584,
    longitude: -68.972168,
    abb: 'ME'
  },
  Maryland: {
    latitude: 39.045753,
    longitude: -76.641273,
    abb: 'MD',
    zoom: 7
  },
  Massachusetts: {
    latitude: 42.407211,
    longitude: -71.382439,
    abb: 'MA',
    zoom: 7
  },
  Michigan: {
    latitude: 44.182205,
    longitude: -84.506836,
    abb: 'MI'
  },
  Minnesota: {
    latitude: 46.39241,
    longitude: -94.63623,
    abb: 'MN'
  },
  Mississippi: {
    latitude: 33.0,
    longitude: -90.0,
    abb: 'MS'
  },
  Missouri: {
    latitude: 38.573936,
    longitude: -92.60376,
    abb: 'MO'
  },
  Montana: {
    latitude: 46.96526,
    longitude: -109.533691,
    abb: 'MT'
  },
  Nebraska: {
    latitude: 41.5,
    longitude: -100.0,
    abb: 'NE'
  },
  Nevada: {
    latitude: 39.876019,
    longitude: -117.224121,
    abb: 'NV'
  },
  'New Hampshire': {
    latitude: 44.0,
    longitude: -71.5,
    abb: 'NH',
    zoom: 7
  },
  'New Jersey': {
    latitude: 39.833851,
    longitude: -74.871826,
    abb: 'NJ',
    zoom: 7
  },
  'New Mexico': {
    latitude: 34.307144,
    longitude: -106.018066,
    abb: 'NM'
  },
  'New York': {
    latitude: 43.0,
    longitude: -75.0,
    abb: 'NY'
  },
  'North Carolina': {
    latitude: 35.782169,
    longitude: -80.793457,
    abb: 'NC'
  },
  'North Dakota': {
    latitude: 47.650589,
    longitude: -100.437012,
    abb: 'ND'
  },
  Ohio: {
    latitude: 40.367474,
    longitude: -82.996216,
    abb: 'OH'
  },
  Oklahoma: {
    latitude: 36.084621,
    longitude: -96.921387,
    abb: 'OK'
  },
  Oregon: {
    latitude: 44.0,
    longitude: -120.5,
    abb: 'OR'
  },
  Pennsylvania: {
    latitude: 41.203323,
    longitude: -77.194527,
    abb: 'PA'
  },
  'Rhode Island': {
    latitude: 41.700001,
    longitude: -71.5,
    abb: 'RI',
    zoom: 8
  },
  'South Carolina': {
    latitude: 33.836082,
    longitude: -81.163727,
    abb: 'SC'
  },
  'South Dakota': {
    latitude: 44.5,
    longitude: -100.0,
    abb: 'SD'
  },
  Tennessee: {
    latitude: 35.860119,
    longitude: -86.660156,
    abb: 'TN'
  },
  Texas: {
    latitude: 31.0,
    longitude: -100.0,
    abb: 'TX',
    zoom: 5
  },
  Utah: {
    latitude: 39.41922,
    longitude: -111.950684,
    abb: 'UT'
  },
  Vermont: {
    latitude: 44.0,
    longitude: -72.699997,
    abb: 'VT',
    zoom: 7.5
  },
  Virginia: {
    latitude: 37.926868,
    longitude: -78.024902,
    abb: 'VA'
  },
  Washington: {
    latitude: 47.751076,
    longitude: -120.740135,
    abb: 'WA'
  },
  'West Virginia': {
    latitude: 39.0,
    longitude: -80.5,
    abb: 'WV'
  },
  Wisconsin: {
    latitude: 44.5,
    longitude: -89.5,
    abb: 'WI'
  },
  Wyoming: {
    latitude: 43.07597,
    longitude: -107.290283,
    abb: 'WY'
  }
}

const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming'
]

module.exports = {
  nationalData,
  dataByState,
  states
}
