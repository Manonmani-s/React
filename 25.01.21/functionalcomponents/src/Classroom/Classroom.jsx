import React, { useState } from 'react'
import Display from './Display/Display'
import Keyboard from './Keyboard/keyboard'



// const Classroom = () => {
//       //declare the state of functional component
   

//       const [count, setCount] = useState(10);
//       const [value, setValue] = useState('');
//       const [name, setName] = useState('FbW 39');

//       const changeHandler = data =>{
//         setValue(data)
//       }

//       const clickNameHandler = ()=>{
//           setName(value)
//       }

//     const clickCountHandler =(incrementCount)=>{
//         setCount(incrementCount)
//     }
  
//       return (
//           <>
//              <Keyboard inputHandler = {info=>changeHandler(info)} courseNameHandler={()=>clickNameHandler()} participantsNumberHandler={number=>clickCountHandler(number)} number = {count}/>
//             <Display number={count} nameOfClass ={name}/>
//           </>
  
//       )
// }

// export default Classroom

//the aboeve code can be simplified in the following way as well



const Classroom = () => {
    //declare the state of functional component
 

    const [count, setCount] = useState(10);
    const [value, setValue] = useState('');
    const [name, setName] = useState('FbW 39');

 

    return (
        <>
           <Keyboard inputHandler = {data=>setValue(data)} courseNameHandler={()=>setName(value)} participantsNumberHandler={number=>setCount(number)} number = {count}/>

          <Display number={count} nameOfClass ={name}/>
        </>

    )
}

export default Classroom