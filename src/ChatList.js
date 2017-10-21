import React, { Component } from 'react'
import color from './color.jpg'

class ChatList extends Component {
    constructor(props) {
        super(props)
        this.state = { users: [] }
        this.fetchUsers = this.fetchUsers.bind(this)
        this.fetchUsers()
    }

    selectUser(id){
        this.props.onSelectUser(id)
    }

    fetchUsers() {
        fetch('http://192.168.43.20:4324/api/user')
            .then(res => res.json())
            .then(json => this.setState({ users: json }))
            .catch(err => console.log(err))
    }

    getUserComponent(users) {
        return users.map((user, i) => {
            return (
                <div key={i} onClick={() => {this.selectUser(user.id)}} className='card-panel clickable grey s-padding s-margin lighten-5 z-depth-1'>
                    <div className='row no-margin valign-wrapper'>
                        <div className='col s3'>
                            <img src={ user.picture } alt='' className='circle s-padding responsive-img' />
                        </div>
                        <div className='col s7'>
                            <span className='black-text'>
                                { user.name }
                            </span>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                { this.getUserComponent(this.state.users) }
            </div>
        )
    }
}

export default ChatList
