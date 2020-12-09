import React from 'react'
import {states} from '../../utils/constants'
import {
  TextField,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  Button
} from '@material-ui/core'

const Filter = props => {
  return (
    <div className="filter">
      <TextField
        id="outlined-helperText"
        label="Enter Keyword(s)"
        value={props.keyword}
        onChange={e => props.handleFilter(e.target.value)}
      />
      <FormControl>
        <InputLabel id="demo-simple-select-label">Select State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.state}
          onChange={e => props.handleState(e.target.value)}
        >
          <MenuItem value="USA">USA</MenuItem>
          {states.map((state, i) => (
            <MenuItem key={i + 1} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        type="submit"
        style={{background: '#457B9D', color: 'white'}}
        variant="contained"
        onClick={props.dealWithSubmit}
      >
        Apply
      </Button>
    </div>
  )
}

export default Filter
