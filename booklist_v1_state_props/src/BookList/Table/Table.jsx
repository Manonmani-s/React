import React, { Component } from 'react';

import Row from './Row'

export class Table extends Component {
    

    render() {

        const { bookList } = this.props;
        const createList = bookList.map((item, index) => {
            
            return <Row key={index} title={item.title } author={item.author } isbn={item.isbn }/>
         })
      
        // const {title,author,isbn} = bookList;
        // console.log(title,author,bookList)
        // console.log('object',createList)
      



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
                <tbody>{ createList}</tbody>
            </table>
        )
    }
}

export default Table
