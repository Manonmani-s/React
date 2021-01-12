

import React, { Component } from 'react';
import Box from './Components/Box/Box'
import './App.css'
import Input from './Components/Input/Input'

 
 class App extends Component {

  state = {
    valueFromInputComponent:""
  }

  gettingValue =(text)=>{
   this.setState(
    {
      valueFromInputComponent:text
    })

  }

  render() {
    return (
    <>

    <Input getValue={this.gettingValue}/>
<h3>This is the content of the input:{this.state.valueFromInputComponent}</h3>
      <Box mode={'light'} title={'Light mode'} />
      <Box mode={'dark'}  title={'dark mode'} whatever={'I am whatever'}/>
    </>
  
    )
  }
}

export default App
