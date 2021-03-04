
import PropTypes from 'prop-types'

const Search = ({searchUsers,clearUsers,showClear}) => {


    const submitHandler = e => {
        console.log(e.target.text.value)
    }
    const changeHandler = e =>{
        console.log(e.target.value)
    }
    return (
        <>
            <form onSubmit={submitHandler} className='form'>
                <input 
                type="text"
                name=""
                value=""
                onChange={changeHandler}
                />
                <input 
                type='submit'
                value='search'
                className='btn btn-dark btn-block'
                />
            </form>
        </>
    )
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
}
export default Search
