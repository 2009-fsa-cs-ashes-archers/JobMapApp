// Sample:
const nationalData = {}

const dataByState = {
  // Sample:
  Alabama: {
    latitude: 32.31823,
    longitude: -86.902298,
    totalSoftwareDeveloperJobs: 10000,
    medianDevloperSalary: 60000,
    studioAverageRent: 700.48,
    oneBedroomAverageRent: 946.94,
    twoBedroomAverageRent: 1060.12,
    abb: 'AL'
  },
  Alaska: {
    latitude: 66.160507,
    longitude: -153.369141,
    studioAverageRent: 1065,
    oneBedroomAverageRent: 679.74,
    twoBedroomAverageRent: 1266.6,
    abb: 'AK',
    zoom: 3.5
  },
  Arizona: {
    latitude: 34.048927,
    longitude: -111.093735,
    studioAverageRent: 1037.02,
    oneBedroomAverageRent: 1317.31,
    twoBedroomAverageRent: 1613.10,
    abb: 'AZ'
  },
  Arkansas: {
    latitude: 34.799999,
    longitude: -92.199997,
    studioAverageRent: 667.16,
    oneBedroomAverageRent: 759.03,
    twoBedroomAverageRent: 856.43,
    abb: 'AR'
  },
  California: {
    latitude: 36.778259,
    longitude: -119.417931,
    studioAverageRent: 2403.94,
    oneBedroomAverageRent: 2559.61,
    twoBedroomAverageRent: 3175.54,
    abb: 'CA',
    zoom: 5
  },
  Colorado: {
    latitude: 39.113014,
    longitude: -105.358887,
    studioAverageRent: 1594.65,
    oneBedroomAverageRent: 1795.87,
    twoBedroomAverageRent: 2154.84,
    abb: 'CO'
  },
  Connecticut: {
    latitude: 41.599998,
    longitude: -72.699997,
    studioAverageRent: 1387.09,
    oneBedroomAverageRent: 1642.01,
    twoBedroomAverageRent: 2036.84,
    abb: 'CT',
    zoom: 7.5
  },
  Delaware: {
    latitude: 39.0,
    longitude: -75.5,
    studioAverageRent: 1106.56,
    oneBedroomAverageRent: 1255.80,
    twoBedroomAverageRent: 1442.02,
    abb: 'DE',
    zoom: 7.5
  },
  Florida: {
    latitude: 27.994402,
    longitude: -81.760254,
    studioAverageRent: 1665.98,
    oneBedroomAverageRent: 1629.97,
    twoBedroomAverageRent: 1853.80,
    abb: 'FL'
  },
  Georgia: {
    latitude: 33.247875,
    longitude: -83.441162,
    studioAverageRent: 1458.42,
    oneBedroomAverageRent: 1351.87,
    twoBedroomAverageRent: 1614.23,
    abb: 'GA'
  },
  Hawaii: {
    latitude: 19.741755,
    longitude: -155.844437,
    studioAverageRent: 1809.75,
    oneBedroomAverageRent: 1795.91,
    twoBedroomAverageRent: 2153.46,
    abb: 'HI'
  },
  Idaho: {
    latitude: 44.068203,
    longitude: -114.742043,
    studioAverageRent: 950.79,
    oneBedroomAverageRent: 1137.25,
    twoBedroomAverageRent: 1189.15,
    abb: 'ID'
  },
  Illinois: {
    latitude: 40.0,
    longitude: -89.0,
    studioAverageRent: 1746.87,
    oneBedroomAverageRent: 1949.91,
    twoBedroomAverageRent: 2357.50,
    abb: 'IL'
  },
  Indiana: {
    latitude: 40.273502,
    longitude: -86.126976,
    studioAverageRent: 1029.82,
    oneBedroomAverageRent: 1055.94,
    twoBedroomAverageRent: 1243.15,
    abb: 'IN'
  },
  Iowa: {
    latitude: 42.032974,
    longitude: -93.581543,
    studioAverageRent: 901.83,
    oneBedroomAverageRent: 920.27,
    twoBedroomAverageRent: 962.16,
    abb: 'IA'
  },
  Kansas: {
    latitude: 38.5,
    longitude: -98.0,
    studioAverageRent: 1144.10,
    oneBedroomAverageRent: 1030.91,
    twoBedroomAverageRent: 1075.80,
    abb: 'KS'
  },
  Kentucky: {
    latitude: 37.839333,
    longitude: -84.27002,
    studioAverageRent: 910.53,
    oneBedroomAverageRent: 1064.94,
    twoBedroomAverageRent: 1234.36,
    abb: 'KY'
  },
  Louisiana: {
    latitude: 30.39183,
    longitude: -92.329102,
    studioAverageRent: 1124.50,
    oneBedroomAverageRent: 1065.35,
    twoBedroomAverageRent: 1135.63,
    abb: 'LA'
  },
  Maine: {
    latitude: 45.367584,
    longitude: -68.972168,
    studioAverageRent: 1341.76,
    oneBedroomAverageRent: 1375.47,
    twoBedroomAverageRent: 1607.84,
    abb: 'ME'
  },
  Maryland: {
    latitude: 39.045753,
    longitude: -76.641273,
    studioAverageRent: 1527.12,
    oneBedroomAverageRent: 1675.44,
    twoBedroomAverageRent: 1869.39,
    abb: 'MD',
    zoom: 7
  },
  Massachusetts: {
    latitude: 42.407211,
    longitude: -71.382439,
    studioAverageRent: 2476.12,
    oneBedroomAverageRent: 2644.07,
    twoBedroomAverageRent: 3120.45,
    abb: 'MA',
    zoom: 7
  },
  Michigan: {
    latitude: 44.182205,
    longitude: -84.506836,
    studioAverageRent: 1150.31,
    oneBedroomAverageRent: 1128.91,
    twoBedroomAverageRent: 1322.48,
    abb: 'MI'
  },
  Minnesota: {
    latitude: 46.39241,
    longitude: -94.63623,
    studioAverageRent: 1261.37,
    oneBedroomAverageRent: 1376.11,
    twoBedroomAverageRent: 1667.98,
    abb: 'MN'
  },
  Mississippi: {
    latitude: 33.0,
    longitude: -90.0,
    studioAverageRent: 805.11,
    oneBedroomAverageRent: 808.18,
    twoBedroomAverageRent: 886.73,
    abb: 'MS'
  },
  Missouri: {
    latitude: 38.573936,
    longitude: -92.60376,
    studioAverageRent: 1079.25,
    oneBedroomAverageRent: 1490.26,
    twoBedroomAverageRent: 1594.53,
    abb: 'MO'
  },
  Montana: {
    latitude: 46.96526,
    longitude: -109.533691,
    studioAverageRent: 996.50,
    oneBedroomAverageRent: 1145.93,
    twoBedroomAverageRent: 1287.50,
    abb: 'MT'
  },
  Nebraska: {
    latitude: 41.5,
    longitude: -100.0,
    studioAverageRent: 821.34,
    oneBedroomAverageRent: 1001.97,
    twoBedroomAverageRent: 1207.59,
    abb: 'NE'
  },
  Nevada: {
    latitude: 39.876019,
    longitude: -117.224121,
    studioAverageRent: 938.46,
    oneBedroomAverageRent: 1231.97,
    twoBedroomAverageRent: 1486.98,
    abb: 'NV'
  },
  'New Hampshire': {
    latitude: 44.0,
    longitude: -71.5,
    studioAverageRent: 1191.42,
    oneBedroomAverageRent: 1631.61,
    twoBedroomAverageRent: 1824.32,
    abb: 'NH',
    zoom: 7
  },
  'New Jersey': {
    latitude: 39.833851,
    longitude: -74.871826,
    studioAverageRent: 2008.04,
    oneBedroomAverageRent: 2038.41,
    twoBedroomAverageRent: 2558.25,
    abb: 'NJ',
    zoom: 7
  },
  'New Mexico': {
    latitude: 34.307144,
    longitude: -106.018066,
    studioAverageRent: 697.28,
    oneBedroomAverageRent: 967.75,
    twoBedroomAverageRent: 1191.74,
    abb: 'NM'
  },
  'New York': {
    latitude: 43.0,
    longitude: -75.0,
    studioAverageRent: 2431.44,
    oneBedroomAverageRent: 2476.63,
    twoBedroomAverageRent: 2637.84,
    abb: 'NY'
  },
  'North Carolina': {
    latitude: 35.782169,
    longitude: -80.793457,
    studioAverageRent: 1237.51,
    oneBedroomAverageRent: 1151.17,
    twoBedroomAverageRent: 1312.78,
    abb: 'NC'
  },
  'North Dakota': {
    latitude: 47.650589,
    longitude: -100.437012,
    studioAverageRent: 689.67,
    oneBedroomAverageRent: 871.47,
    twoBedroomAverageRent: 982.45,
    abb: 'ND'
  },
  Ohio: {
    latitude: 40.367474,
    longitude: -82.996216,
    studioAverageRent: 997.61,
    oneBedroomAverageRent: 1109.14,
    twoBedroomAverageRent: 1365.99,
    abb: 'OH'
  },
  Oklahoma: {
    latitude: 36.084621,
    longitude: -96.921387,
    studioAverageRent: 681.36,
    oneBedroomAverageRent: 712.82,
    twoBedroomAverageRent: 904.55,
    abb: 'OK'
  },
  Oregon: {
    latitude: 44.0,
    longitude: -120.5,
    studioAverageRent: 1417.74,
    oneBedroomAverageRent: 1706.40,
    twoBedroomAverageRent: 2053.63,
    abb: 'OR'
  },
  Pennsylvania: {
    latitude: 41.203323,
    longitude: -77.194527,
    studioAverageRent: 1371.91,
    oneBedroomAverageRent: 1640.09,
    twoBedroomAverageRent: 2018.79,
    abb: 'PA'
  },
  'Rhode Island': {
    latitude: 41.700001,
    longitude: -71.5,
    studioAverageRent: 1555.42,
    oneBedroomAverageRent: 1893.35,
    twoBedroomAverageRent: 2427.56,
    abb: 'RI',
    zoom: 8
  },
  'South Carolina': {
    latitude: 33.836082,
    longitude: -81.163727,
    studioAverageRent: 1379.68,
    oneBedroomAverageRent: 1211.75,
    twoBedroomAverageRent: 1393.05,
    abb: 'SC'
  },
  'South Dakota': {
    latitude: 44.5,
    longitude: -100.0,
    studioAverageRent: 705.41,
    oneBedroomAverageRent: 727.40,
    twoBedroomAverageRent: 893.39,
    abb: 'SD'
  },
  Tennessee: {
    latitude: 35.860119,
    longitude: -86.660156,
    studioAverageRent: 1266.20,
    oneBedroomAverageRent: 1337.32,
    twoBedroomAverageRent: 1510.48,
    abb: 'TN'
  },
  Texas: {
    latitude: 31.0,
    longitude: -100.0,
    studioAverageRent: 1134.93,
    oneBedroomAverageRent: 1271.46,
    twoBedroomAverageRent: 1576.46,
    abb: 'TX',
    zoom: 5
  },
  Utah: {
    latitude: 39.41922,
    longitude: -111.950684,
    studioAverageRent: 1155.07,
    oneBedroomAverageRent: 1267.42,
    twoBedroomAverageRent: 1499.36,
    abb: 'UT'
  },
  Vermont: {
    latitude: 44.0,
    longitude: -72.699997,
    studioAverageRent: 1526.73,
    oneBedroomAverageRent: 1485.71,
    twoBedroomAverageRent: 1388.14,
    abb: 'VT',
    zoom: 7.5
  },
  Virginia: {
    latitude: 37.926868,
    longitude: -78.024902,
    studioAverageRent: 1835.89,
    oneBedroomAverageRent: 1793.27,
    twoBedroomAverageRent: 2092.80,
    abb: 'VA'
  },
  Washington: {
    latitude: 47.751076,
    longitude: -120.740135,
    studioAverageRent: 1791.66,
    oneBedroomAverageRent: 2155.07,
    twoBedroomAverageRent: 2237.66,
    abb: 'WA'
  },
  'West Virginia': {
    latitude: 39.0,
    longitude: -80.5,
    studioAverageRent: 1055.63,
    oneBedroomAverageRent: 1170.67,
    twoBedroomAverageRent: 1227.53,
    abb: 'WV'
  },
  Wisconsin: {
    latitude: 44.5,
    longitude: -89.5,
    studioAverageRent: 1171.37,
    oneBedroomAverageRent: 1205.10,
    twoBedroomAverageRent: 1531.86,
    abb: 'WI'
  },
  Wyoming: {
    latitude: 43.07597,
    longitude: -107.290283,
    studioAverageRent: 623.47,
    oneBedroomAverageRent: 697.53,
    twoBedroomAverageRent: 884.47,
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
