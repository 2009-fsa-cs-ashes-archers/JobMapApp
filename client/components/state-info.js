import React, {PureComponent} from 'react'
import accounting from 'accounting'
import {Divider} from '@material-ui/core'

export default class StateInfo extends PureComponent {
  render() {
    const {info} = this.props
    return (
      <div style={{width: '16rem', margin: '-10px'}}>
        <div
          style={{
            backgroundColor: '#E63946',
            color: 'white',
            padding: '10px',
            borderRadius: '2px 2px 0 0'
          }}
        >
          <h3 style={{padding: '0', margin: '0'}}>{info.name}</h3>
        </div>
        <div style={{padding: '10px', backgroundColor: 'white'}}>
          <span style={{fontWeight: 'bold'}}>{info.count || 0}</span> Matches
          {info.averageSalary && (
            <div>
              <Divider style={{margin: '10px 0'}} />
              Average Salary:{' '}
              <span style={{fontWeight: 'bold'}}>
                {accounting.formatMoney(info.averageSalary)}
              </span>
            </div>
          )}
        </div>
      </div>
    )
  }
}
