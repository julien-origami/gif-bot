import React, { Component } from 'react'

class NavBar extends Component {
    render() {
        return (
            <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo">Logo</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar