import React, { Component } from 'react'
import ChatList from './ChatList'
import MessengerBody from './MessengerBody'

class BackBody extends Component {
    constructor(props){
        super(props)
        this.state = {
            messages: []
        }
        this.handleSelectUser = this.handleSelectUser.bind(this)
    }

    handleSelectUser(id){
        this.setState({ user: id })
        this.fetchMessages(id)
    }

    fetchMessages(id) {
        fetch(`http://192.168.43.20:4323/api/messages/${id}`)
            .then(res => res.json())
            .then(json => this.setState({ messages: json }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className='row'>
                <div className='col s3 no-padding'>
                    <ChatList onSelectUser={this.handleSelectUser} />
                </div>
                <div className='col s9 no-padding message-section'>
                    <MessengerBody messages={this.state.messages}/>
                </div>
            </div >
        )
    }
}

export default BackBody
