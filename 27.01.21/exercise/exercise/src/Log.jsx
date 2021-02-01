import {useState,useEffect} from 'react'
import './Log.css'

const Log = () => {

    const[log,setConsoleLog] = useState('');

    const consolelog =(e)=>setTimeout(() => {
        setConsoleLog(()=>e.target.value);
    }, 3000);;

    useEffect(()=>{console.log(log);},[log])

    return (
        <div id="card">
            <h1>Console Logger &#128512;</h1> 	   	
            <h1>Type what to be consoled in the console &#129488;</h1>
            <input type="text" onChange={consolelog}/>
            <h3 >Now check the console, you will see <span>{log}</span> as promised &#128521;</h3>
        </div>
    )
}

export default Log
