import React, { Component } from 'react'
import Header from './Header/Header'
import Form from './Form/Form'
// import Table from './Table/Table'


 class Booklist extends Component {
    render() {
        return (
            <div>
                <>
                <Header />
                 <Form/>
                {/* <Table/>  */}
                </>
            </div>
        )
    }
}

export default Booklist
