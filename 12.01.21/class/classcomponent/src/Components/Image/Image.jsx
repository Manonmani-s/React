
import React, { Component } from 'react';
import './Image.css'

 class Image extends Component {
    render() {
        return (
            <div>
                <img src={this.props.source} className="App-logo" alt="logo" />

            </div>
        )
    }
}

export default Image







 