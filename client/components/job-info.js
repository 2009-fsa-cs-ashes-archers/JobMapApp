import React, {PureComponent} from 'react'

export default class JobInfo extends PureComponent {
  render() {
    const {info} = this.props

    return (
      <div style={{maxWidth: '24rem', margin: '-10px', padding: '10px'}}>
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
    )
  }
}
