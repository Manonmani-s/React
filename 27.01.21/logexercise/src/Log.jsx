import {useState, useEffect} from 'react'
import './Log.css'

const Log = () => {


    const[input,setConsoleLog]=useState('');

   // const consoleLog = (e)=>  setTimeout(()=>{setConsoleLog(e.target.value);},3000);
    const inputHandler = (e)=>  setConsoleLog(e.target.value);
    

    //useEffect(()=>{setTimeout(()=>{console.log(log)},5000) }, [log]);
    useEffect(()=>{console.log(input) }, [input]);
    

    return (
        <div id="card">
            <h1>Console Logger &#128513;</h1>
            <h1>Type what is to be displayed in the Console &#129488;</h1>
            <input type="text" onChange={inputHandler}/>
            <h3>Check the Console, You will see {input} in the console&#128521; </h3>
        </div>
    )
}

export default Log
