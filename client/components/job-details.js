import React, {PureComponent} from 'react'
import ClickAwayListener from 'material-ui/internal/ClickAwayListener'

export default class JobDetails extends PureComponent {
  render() {
    const {info, onClickAway} = this.props
    const displayName = `${info.title}, ${info.company}`

    return (
      <ClickAwayListener onClickAway={onClickAway}>
        <div>
          {displayName}
          {info.area}
          {info.locationName}
          {info.description}
        </div>
      </ClickAwayListener>
    )
  }
}
