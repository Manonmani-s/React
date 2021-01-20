import React, { Component } from 'react'

import Alert from './Alert';
import PropTypes from 'prop-types'


class Form extends Component {

    state = {
        alert:null
    }
  

    setAlert = (type, msg, time) => {
        this.setState({
            alert: {
                type,
                msg
            }
        })

        setTimeout(() => {
            this.setState({
                alert:null
            })
            
        }, time);
    }


    addBook = e => {
        e.preventDefault();
        let values = {  title: e.target.title.value,
            author: e.target.author.value,
            isbn: e.target.isbn.value
        }
        if (!values.title || !values.author || !values.isbn) {
    
            //if one of the fields is empty 
            this.setAlert('error','Please fill in all the fields !!!', 2000)

        } else {
            this.setAlert('success','The Book is Added Successfully !!!', 5000)
            this.props.getValues(values)

            e.target.title.value = ``;
            e.target.author.value = ``;
            e.target.isbn.value = ``;
        }

       

    }


    render() {
        return (
            <>
                <Alert alert={this.state.alert} />
                <h1>Add Book</h1>
                <form onSubmit={  this.addBook}>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" className={"u-full-width" }/>
                    </div> 
                    <div>
                        <label htmlFor="author">Author</label>
                        <input type="text" id="author" className={"u-full-width" }/>
                    </div> 
                    <div>
                        <label htmlFor="isbn">ISBN</label>
                        <input type="text" id="isbn" className={"u-full-width" }/>
                    </div> 
                    <div>
                        <input type="submit" value="Submit" className={"u-full-width"} />
                    </div> 
                </form>
            </>
        )
    }
}


Form.propTypes = {
    getValues : PropTypes.func.isRequired,
}

export default Form
