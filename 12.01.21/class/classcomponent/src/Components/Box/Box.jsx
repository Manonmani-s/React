
import React, { Component } from 'react'
import './Box.css'

 class Box extends Component {
    render() {
        return (
           <div className="container">
            <div className={this.props.mode} >
                <h1>{this.props.title} </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum laboriosam rem illo perspiciatis tenetur <span>{this.props.whatever}</span> doloribus veritatis minus nisi nostrum. Adipisci!
                </p>
           </div>
       </div>
        )
    }
}

export default Box
