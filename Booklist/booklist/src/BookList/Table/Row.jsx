import React, { Component } from 'react'

export class Row extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.title }</td>
                <td>{this.props.author }</td>
                <td>{this.props.isbn }</td>
                <td></td>
            </tr>
        )
    }
}

export default Row
