import React, { Component } from 'react'
import './Input.css'


class Input extends Component {

    state={
        inputValue:""
    }
    onChangeInput=(event)=>{
        this.setState({
            inputValue:event.target.value
        })
    }

    render() {
      //we get the function from the props->this.props.getvalue
        return (
            <div>
             <input onChange={this.onChangeInput} type="text"  value={this.state.inputValue} placeholder='Enter the Title' />
             <button onClick={()=>{this.props.getValue(this.state.inputValue)}} >Show Text</button>
             </div>
        )
    }
}

export default Input
