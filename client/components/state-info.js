import React, {PureComponent} from 'react'
import accounting from 'accounting'

export default class StateInfo extends PureComponent {
  render() {
    const {info} = this.props
    return (
      <div>
        <p>{info.name}</p>
        {info.averageSalary && (
          <p>Average Salary: {accounting.formatMoney(info.averageSalary)}</p>
        )}
        <p>Matching Jobs: {info.count}</p>
      </div>
    )
  }
}
