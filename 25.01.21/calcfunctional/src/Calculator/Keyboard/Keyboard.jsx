
import React, {useState} from 'react'
import Number from './Number/Number'
import Button from './Button/Button'
import './Keyboard.css'

const Keyboard = ({giveResult}) => {

    const [firstValue,setFirstValue] = useState('');
    const [secondValue,setSecondValue] = useState('');
    const [result, setResult]=useState(0);

    
    

    return (
        <main className="card">
            <Number inputHandler={value=>{setFirstValue(value)}} seq='first'/>
            <Number inputHandler={value=>{setSecondValue(value)}} seq='second'/>

            <Button v1={firstValue}  v2={secondValue}  operation='Plus' getResult={(result)=>setResult(giveResult(result))}  seq = {'1'} />
            <Button v1={firstValue} v2={secondValue} operation='Minus' getResult ={(result)=>setResult(giveResult(result))} seq = {'2'} />
            <Button v1={firstValue} v2={secondValue} operation='Divide' getResult ={(result)=>setResult(giveResult(result))} seq = {'3'}/>
            <Button v1={firstValue} v2={secondValue} operation='Multiply' getResult = {(result)=>setResult(giveResult(result))} seq={'4'}/>

            
        </main>
    )
}

export default Keyboard
