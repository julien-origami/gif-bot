import React, { Component } from 'react'
import color from './color.jpg'

class ChatList extends Component {
    constructor(props) {
        super(props)
        this.state = { users: [] }
        this.fetchUsers = this.fetchUsers.bind(this)
        this.fetchUsers()
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
                <a href="#!" class="collection-item avatar active">
                    <img src={ user.picture } class="circle responsive-img" />
                    { user.name }
                </a>
            )
        })
    }

    render() {
        console.log(this.state.users)
        return (

            <div class="collection">
                { this.getUserComponent(this.state.users) }
            </div>
        )
    }
}

export default ChatList