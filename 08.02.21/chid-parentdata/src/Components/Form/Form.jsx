import React from 'react'

export default function Form({query,onChangeHandler,amount,onSubmitHandler}) {
    return (
        <form 
        className="formCont"
        onSubmit={(e)=>{
            e.preventDefault();
            onSubmitHandler()
        }}>
            <input 
                id="query"
                name="query"
                type="search"
                placeholder="Search Image Query..."
                value={query}
                onChange={onChangeHandler}
            />

            <select 
            id="amount"
            name="amount"
            value={amount}
            onChange={onChangeHandler}
            >
                <option value={5} > 5 </option>
                <option value={10} > 10 </option>
                <option value={15} > 15 </option>
                <option value={20} > 20 </option>

            </select>
            <button type="submit">Submit</button>

        </form>
    )
}
