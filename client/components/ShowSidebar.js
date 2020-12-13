import React from 'react'

const ShowSidebar = ({toggleShowing, showing}) => {
  return (
    <button
      type="submit"
      onClick={toggleShowing}
      style={{marginTop: '3px'}}
    >
      {showing ? 'Hide' : 'Show Stats'}
    </button>
  )
}


export default ShowSidebar
