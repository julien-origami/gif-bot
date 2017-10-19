import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from './NavBar'
import BackBody from './BackBody'
import './index.css'

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <NavBar />
          <BackBody />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App