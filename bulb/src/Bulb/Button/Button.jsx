import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Button extends Component {


    render() {

        const {handler,toggle} = this.props;
        return (
        
             <button onClick={handler}>
                    {toggle ? 'OFF' : 'ON'}
                </button> 
          
        )
    }
}

Button.propTypes ={
    handler:PropTypes.func.isRequired,
    toggle : PropTypes.bool.isRequired,
}

export default Button
