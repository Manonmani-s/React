import React, { Component } from 'react'




 
  render() {
    return (
      <div className={"Article"}>
        <input
          type="text"
          placeholder="Enter your Title"
          onChange={(event) => {
            this.ChangeTitle(event)
          }}
        />
        <button>Sumbit</button>
export Input  input extends Component {
    state = {
        InputValue: " ",
      }
    render() {
        return (

            ChangeTitle(e) {
                console.log(e.target.value)
              
                this.setState(() => {
                  return { InputValue: e.target.value }
                })
                console.log(this.state.InputValue)
              }
            <div>
                
            </div>
        )
    }
}

export default input
