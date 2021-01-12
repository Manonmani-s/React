

import React, { Component } from 'react'
import Image from '../Image/Image'
import Anchor from '../Anchor/Anchor'
import './Header.css'
import logo from '../../logo.svg'

 class Header extends Component {
    render() {
        return (
          <header className = "App-header">
              <Image source={logo}/>
              <p>
                  Edit <code>src/App.js</code>and save to reload
              </p>
              <Anchor />
          </header>
        )
    }
}

export default Header
