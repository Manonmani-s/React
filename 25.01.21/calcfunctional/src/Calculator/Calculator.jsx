import React,{useState} from 'react'
import Display from './Display/Display'
import Keyboard from './Keyboard/Keyboard'

const Calculator = () => {

    const [result,setResult] =useState(0)

    return (
        <>
            <Display result = {result} />
            <Keyboard giveResult={result=>setResult(result)}/>
        </>
    )
}

export default Calculator
