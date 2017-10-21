import React, { Component } from 'react'
const $ = window.$

class MessengerBody extends Component {
    getMessageComponent(messages) {
        return messages.map((m, i) => {
            const position = m.sender ? 'left' : 'right'
            const content = m.sender ? m.content : (<img className='responsive-img' src={m.content} />)
            return (
                <div key={i} id={m.id} className='row s-margin message-bubble'>
                    <div className={`${position} s-padding`}>
                        {content}
                    </div>
                </div>
            )
        })
    }

    componentDidUpdate(){
        const messages = this.props.messages
        if(messages.length>0){
            const scrollLevel = $('#'+messages[messages.length-1].id).offset().top - $('#'+messages[0].id).offset().top + 79
            $('.messenge-component').animate({
              scrollTop: scrollLevel
            }, 1000);
        }
    }

    render() {
        return (
            <div className='s-margin messenge-component'>
                { this.getMessageComponent(this.props.messages) }
            </div>
        )
    }
}

export default MessengerBody
