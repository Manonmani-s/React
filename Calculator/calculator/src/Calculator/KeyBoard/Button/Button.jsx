import React, { Component } from 'react'


import './Button.css'


class Button extends Component {

   

    Calculate = e => {
        e.preventDefault();
        let { operation, v1, v2, getResult } = this.props;
       
        switch (operation) {
            case 'Plus':
                getResult( v1 + v2)
                break;
            case 'Minus':
                getResult( v1 - v2) 
                break;
            case 'Divide':
                getResult( v1 / v2) 
                 break;
            case 'Multiply':
                getResult( v1 * v2) 
                break;
            
            
        }
    } 

    render() {
        return (
            <button className={`btn${this.props.seq}`}
            onClick={e=>this.Calculate(e)}>
                {this.props.operation}
            </button>
        )
    }
}

export default Button
