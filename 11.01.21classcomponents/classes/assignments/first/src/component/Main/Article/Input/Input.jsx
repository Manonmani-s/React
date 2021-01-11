import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            InputValue: " ",
          }
    }
   

  ChangeTitle(e) {
    console.log(e.target.value)
    // this.state.InputValue = e.target.value  // Wrong way to do !!!
    /**
     * valid way is to do state
     */
    // this.setState({
    //   InputValue: e.target.value,
    // })
    this.setState(() => {
      return { InputValue: e.target.value }
    })
      console.log(this.state.InputValue)
      this.props.getValue(e.target.value)
  }

    render() {
        
        return (
           
                <input
          type="text"
          placeholder={this.props.holder}
          onChange={(event) => {
            this.ChangeTitle(event)
          }}
        /> 
            
        )
    }
}

export default Input
