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
        Select State:
        <select
          value={props.state}
          onChange={e => props.handleState(e.target.value)}
        >
          <option key={0} value="USA">
            USA
          </option>
          {states.map((state, i) => (
            <option key={i + 1} value={state}>
              {state}
            </option>
          ))}
        </select>
      </label>
      <button type="submit" onClick={props.dealWithSubmit}>
        Apply
      </button>
    </div>
  )
}

export default Filter
