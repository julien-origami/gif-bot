import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import './index.css'
import Divider from 'material-ui/Divider'

class NavBar extends Component {
    render() {
        return (
            <div>
                <AppBar
                    style={ { backgroundColor: '#202020' } }
                    title='GIFBOT'
                    iconClassNameRight='muidocs-icon-navigation-expand-more'
                />
                <Divider style={ { height: '3px' } } />
            </div>
        )
    }
}

export default NavBar