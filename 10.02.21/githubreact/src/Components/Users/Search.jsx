
import {useEffect, useState} from 'react'
import PropTypes from 'prop-types'


const Search = ({searchText}) => {

    const[text,setText]=useState('');


    const changeHandler = e =>{setText(e.target.value)}

    const submitHandler = e =>{
        e.preventDefault();
        //fetch users accroding to the text
        searchText(text);
       
        
        //clean the input
        setText('')

    }

    return(
        <>
            <form onSubmit = {submitHandler} className="form">
                <input type="text"
                    name = 'text'
                    value={text}
                    placeholder = 'Search Users..'
                    onChange = {changeHandler}
                />
                <input type="submit" 
                    className ='btn btn-dark btn-block'
                    value = 'Search'
                />
            </form>
        </>
    )
}


Search.propTypes = {
    searchText:PropTypes.func.isRequired,
}
export default Search;