import React, { Component } from 'react'

class Form extends Component {


  

    addBook = e => {
        e.preventDefault();
        let values = {  title: e.target.title.value,
            author: e.target.author.value,
            isbn: e.target.isbn.value
        }
        this.props.getValues(values)
        
    }


    render() {
        return (
            <>
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

export default Form
