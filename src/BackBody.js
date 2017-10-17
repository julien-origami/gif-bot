import React, { Component } from 'react'
import ChatList from './ChatList'
import MessengerBody from './MessengerBody'

class BackBody extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col s6'>
                    <ChatList />
                </div>
                <div className='col s6'>
                    <MessengerBody />
                </div>
            </div >
        )
    }
}

export default BackBody