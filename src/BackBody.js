import React, { Component } from 'react'
import ChatList from './ChatList'
import MessengerBody from './MessengerBody'

class BackBody extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col s4 no-padding'>
                    <ChatList />
                </div>
                <div className='col s8 no-padding'>
                    <MessengerBody />
                </div>
            </div >
        )
    }
}

export default BackBody