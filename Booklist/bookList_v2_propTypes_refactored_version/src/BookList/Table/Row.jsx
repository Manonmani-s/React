import React, { Component } from 'react';

import PropTypes from 'prop-types';


class Row extends Component {
    render() {
        //Object destructuring
        const { title, author, isbn } = this.props;
        return (
            <tr>
                <td>{title }</td>
                <td>{author}</td>
                <td>{isbn}</td>
                <td></td>
            </tr>
        )
    }
}

Row.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    isbn: PropTypes.string.isRequired,
    
}

export default Row
