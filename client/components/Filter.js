import React from 'react'
import {states} from '../../utils/constants'

const Filter = props => {
  return (
    <div className="filter">
      <h4>Filter</h4>
      <label>
        Keywords:
        <input
          type="text"
          name="keyword"
          onChange={e => props.handleFilter(e.target.value)}
          value={props.keyword}
        />
      </label>
      <label>
        Choose State:
        <select
          value={props.state}
          onChange={e => props.handleState(e.target.value)}
        >
          {states.map((state, i) => (
            <option key={i} value={state}>
              {state}
            </option>
          ))}
        </select>
      </label>
      <button onClick={props.dealWithSubmit}>Apply Filters</button>
    </div>
  )
}

export default Filter
