import React, { Component } from 'react'

import Number from './Number/Number'
import Button from './Button/Button'

import './KeyBoard.css'

class KeyBoard extends Component {

     state = {
        // number1: 0,
        // first:0,
        // number2: 0,
        // second:0,
        // result:0
     }

    // getNum1 = (value) => {
    //     this.setState({
    //         first : parseFloat(value)
    //     })
    // }

    // getNum2 = (value) => {
    //     this.setState({
    //         second :  parseFloat(value)
    //     })
    // }

    setValue = (value, seq) => {
        this.setState({
            [seq] :  parseFloat(value)
        })
    }

    setResult = (value) => {
     this.props.giveResult(value)
    }



    render() {
        return (
            <main className="card">
                <Number getValue={this.setValue} seq={'first'} />
                <Number getValue={this.setValue} seq={'second'}/> 

                <Button v1={this.state.first } v2={this.state.second }  operation={'Plus'} getResult={this.setResult} seq={'1'} />
                <Button v1={this.state.first } v2={this.state.second }  operation={'Minus'} getResult={this.setResult} seq={'2'}/>
                <Button v1={this.state.first } v2={this.state.second }  operation={'Divide'} getResult={this.setResult} seq={'3'}/>
                <Button v1={this.state.first } v2={this.state.second }  operation={'Multiply'} getResult={this.setResult} seq={'4'}/>
                

            </main>
        )
    }
}

export default KeyBoard
