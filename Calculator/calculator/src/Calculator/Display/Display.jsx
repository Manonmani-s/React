import React, { Component } from 'react'

import './Display.css'

class Display extends Component {
    render() {
        return (
            <header>
               <h3> {this.props.result}</h3>
            </header>
        )
    }
}

export default Display
