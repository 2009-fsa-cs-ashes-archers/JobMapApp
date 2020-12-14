import React from 'react'

import {Navbar, Sidebar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div className="app-row">
      <div className="app-column">
        <Navbar />
        <Routes />
      </div>
      {/* For mobile, I want the sidebar to expose itself by clicking on the bottom, and then have it come up to about half the page, and upon clicking a collapse button, have it go back down */}
      <Sidebar />
    </div>
  )
}

export default App
