import React, { Component } from 'react'
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import Subheader from 'material-ui/Subheader'
import { pinkA200, transparent } from 'material-ui/styles/colors';

const style = {
    display: 'inline-block',
    background: '#383636',
    color: '#ffffff'
}

const style2 = {
    color: '#ffffff'
}

const style3 = {
    color: '#ffffff',
    size: '24px',
    weight: '400'
}

class ChatList extends Component {
    render() {
        return (
            <div>
                <List style={ style } desktop={ true } width={ 400 }>
                    <Subheader style={ style3 }>Chat List</Subheader>
                    <Divider />
                    <ListItem style={ style2 }
                        leftAvatar={
                            <Avatar
                                color={ pinkA200 } backgroundColor={ transparent }
                                style={ { left: 8 } }
                            >
                                A
                        </Avatar>
                        }
                        primaryText='Yohan Canac'
                        rightAvatar={ <Avatar src="src/image/color-198892_960_720.jpg" /> }
                        insetChildren={ true }
                    />
                    <ListItem style={ style2 }
                        primaryText="Corentin Daniel"
                        rightAvatar={ <Avatar src="src/image/color-198892_960_720.jpg" /> }
                        insetChildren={ true }
                    />
                    <ListItem style={ style2 }
                        primaryText="Jérémy Boisdron"
                        rightAvatar={ <Avatar src="src/image/color-198892_960_720.jpg" /> }
                        insetChildren={ true }
                    />
                    <ListItem style={ style2 }
                        primaryText="Julien Pons"
                        rightAvatar={ <Avatar src="src/image/color-198892_960_720.jpg" /> }
                        insetChildren={ true }
                        checked={ true }
                    />
                    <Divider />
                </List>
            </div >
        )
    }
}

export default ChatList