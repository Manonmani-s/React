import React, { useState } from 'react';
import './App.css';


const addNumber = (number) => ++number;


const App = () => {
    
    //declare the state of functional component
   

    const [count, setCount] = useState(10);
    const [value, setValue] = useState('');
    const [name, setName] = useState('FbW 39');




 

    return (
        <>
            <div className='group'>
                <input type="text" />
                <button>Add Class Name</button>
            </div> 
             <div className='container'>
            <h3>We have here <span>{count}</span> participants in Class <span>{ name}</span> </h3>
            <button className='btn' onClick={()=> setCount(addNumber(count))}>Add Participant</button>
        </div>
        </>

    )
}

export default App
