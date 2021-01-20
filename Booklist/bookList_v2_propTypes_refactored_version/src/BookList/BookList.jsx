import React, { Component } from 'react';
import Form from './Form/Form';
import Table from './Table/Table'

class BookList extends Component {

    state = {
       bookList:[]
    }

    addRow = values => {
      this.setState(pervState => {
            let bookArray = [...pervState.bookList,values];
            console.log('previous state',pervState)
            console.log('spread ...pervState.bookList',  [...pervState.bookList,values]);
            console.log('values',values)
            console.log('Book Array',bookArray)
            return {
                bookList: bookArray
               
            }
            
        })
    }

    render() {
        return (
            <div className={"container"}>
                <Form getValues={values => this.addRow(values)}/>
                <Table  bookList={this.state.bookList} /> 
                
            </div>
        )
    }
}

export default BookList
