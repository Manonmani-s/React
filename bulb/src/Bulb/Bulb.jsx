import React, { Component } from 'react';
import Button from './Button/Button'

import Light from './Light/Light'


import './Bulb.css';

 class Bulb extends Component {

    state ={
        toggle:true
    }

    clickHandler = () =>{
        this.setState(
            oldState =>({
                toggle:!oldState.toggle
            })
        )
    }

    
    render() {
        return (
            <div className={"container"}>
                <Light lightToggle={this.state.toggle}/>
                <Button handler = {this.clickHandler} toggle={this.state.toggle} />
            </div>
        )
    }
}

export default Bulb
