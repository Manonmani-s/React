import React, { Component } from 'react';

import Row from './Row'

import PropTypes from 'prop-types'


class Table extends Component {
    

    render() {
        // Object destructuring 
        const { bookList } = this.props;
        const List = bookList.map((item, index) => {
            
            return <Row key={index} title={item.title } author={item.author } isbn={item.isbn }/>
         })
      
        return (
            <table className={"u-full-width"}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>ISBN</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{ List }</tbody>
            </table>
        )
    }
}

Table.propTypes = {
    bookList : PropTypes.array.isRequired,
}

export default Table
