import React, { Component } from 'react'

 class Input extends Component {
    render() {
        return (
            <div className='{this.props.inputType}'>
                 <label for={this.props.inputType}>Title</label> 
                <input type="text" placeholder='Enter Title' id={this.props.inputType}/>
            </div>
        )
    }
}

export default Input
