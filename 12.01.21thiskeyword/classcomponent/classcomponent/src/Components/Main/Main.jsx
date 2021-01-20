import React, { Component } from 'react'
import './Main.css'
import Img from '../Image/Image'
import logo from '../../vue.png'

 class Main extends Component {
    render() {
        return (
            <main className="App-main">
                <p>Here is the main section </p>
                <Img source={logo}/>
            </main>
        )
    }
}

export default Main
