
import React, { Component } from 'react'
import './Anchor.css'


 class Anchor extends Component {
    render() {
        return (
            <div>
                <a 
                className='App-link'
                href="https://react.js.org"
                target = "_blank"
                rel = "noopener noreferrer"
                >
                    Learn React
                </a>
                
            </div>
        )
    }
}

export default Anchor
