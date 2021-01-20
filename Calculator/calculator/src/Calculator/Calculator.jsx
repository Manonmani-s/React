import React, { Component } from 'react';

import Display from './Display/Display'
import KeyBoard from './KeyBoard/KeyBoard'



export class Calculator extends Component {



    state={
        result:0
    }

    setResult = (value) =>{
        this.setState({result : value})
    }

    
    render() {
        return (
            <>
               <Display result={this.state.result }/>
                <KeyBoard giveResult ={this.setResult} />
            </>
        )
    }
}

export default Calculator
