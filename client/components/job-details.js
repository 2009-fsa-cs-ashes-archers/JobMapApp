import React, {PureComponent} from 'react'
import {Divider} from '@material-ui/core'

export default class JobDetails extends PureComponent {
  render() {
    const {info} = this.props
    return (
      <div style={{width: '24rem', margin: '-10px'}}>
        <div
          style={{
            backgroundColor: '#457B9D',
            color: 'white',
            padding: '10px',
            borderRadius: '2px 2px 0 0'
          }}
        >
          <h3 style={{padding: '0', margin: '0'}}>{info.title}</h3>
          <p
            style={{
              fontStyle: 'italic',
              padding: '0',
              margin: '2px 0 0 0',
              fontSize: '.8rem'
            }}
          >
            {info.company}
          </p>
        </div>
        <div style={{padding: '10px', backgroundColor: 'white'}}>
          <span style={{fontWeight: 'bold'}}>{info.locationName}</span>
          <br />
          {info.description}
          <Divider style={{margin: '10px 0'}} />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end'
            }}
          >
            <a href={info.url} style={{color: '#457B9D'}}>
              Apply on Adzuna
            </a>
            {info.minSalary
              ? `est. $${Math.round(info.minSalary / 1000)}K-${Math.round(
                  info.maxSalary / 1000
                )}K`
              : ''}
          </div>
        </div>
      </div>
    )
  }
}
