import React, {PureComponent} from 'react'

export default class JobInfo extends PureComponent {
  render() {
    const {info} = this.props
    const displayName = `${info.title}, ${info.company}`

    return (
      <div>
        <div>{displayName}</div>
      </div>
    )
  }
}
