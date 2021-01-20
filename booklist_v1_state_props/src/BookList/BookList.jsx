import React, { Component } from 'react';
import Form from './Form/Form';
import Table from './Table/Table'

class BookList extends Component {

    state = {
       bookList:[]
    }

    addRow = values => {
      this.setState(pervState => {
          console.log(pervState)
            let bookArray = [...pervState.bookList,values];
            
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
