import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Filter, SearchData} from '../components'

const Sidebar = props => {
  const [filter, setFilter] = useState(props.filter || '')
  const [geoState, setGeoState] = useState(props.selectedState || 'New York')

  const handleSubmit = event => {
    event.preventDefault()
    console.log(filter)
    console.log(geoState)
  }

  // useEffect(() => {
  //   console.log(filter)
  // }, [filter])

  // useEffect(() => {
  //   console.log(geoState)
  // }, [geoState])

  return (
    <div id="sidebar-container">
      <Filter
        keyword={filter}
        handleFilter={setFilter}
        state={geoState}
        handleState={setGeoState}
        dealWithSubmit={handleSubmit}
      />
      <SearchData />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    filter: state.filter,
    selectedState: state.selectedState
  }
}

export default connect(mapStateToProps)(Sidebar)

// export class Sidebar extends React.Component {
//   constructor(props) {
//     super()
//     this.state = {
//       keyword: '',
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }

//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value,
//     })
//     console.log(this.state)
//   }

//   handleSubmit(event) {
//     event.preventDefault()
//     console.log(this.state.keyword)
//     this.setState({
//       keyword: '',
//     })
//   }

//   render() {
//     return (
//       <div id="sidebar-container">
//         <Filter
//           handleChange={this.handleChange}
//           handleSubmit={this.handleSubmit}
//         />
//         <SearchData />
//       </div>
//     )
//   }
// }

// export default Sidebar
