import React, { Component } from 'react'

import './Number.css'

class Number extends Component {

    // HandleChange = e => {
    //     this.props.getValue(e.target.value)
    // } 

    render() {
        return (
            <input
                type="text"
                
                className={this.props.seq}
                onChange = {e =>  this.props.getValue(e.target.value, this.props.seq)}
               
            />
                
            
        )
    }
}

export default Number
