import React from 'react'

const ShowSidebar = ({toggleShowing, showing}) => {
  return (
    <button
      type="submit"
      onClick={toggleShowing}
      style={{marginTop: '3px'}}
      id="mobile-info-button"
    >
      {showing
      ? <img src="Down-Arrow.png" alt="close" />
      : <img src="Up-Arrow.png" alt="open" />
      }
    </button>
  )
}


export default ShowSidebar
