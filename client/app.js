import React from 'react'

import {Navbar, Sidebar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div className="app-row">
      <div className="app-column">
        {/* <Navbar /> */}
        <Routes />
      </div>
      {/* <Sidebar /> */}
    </div>
  )
}

export default App
