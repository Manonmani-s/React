import {useState,useEffect} from 'react'
import './Counter.css'

const Counter = () => {

    const [count,setCount] =useState(0);
    const [name,setName] =useState('Matheus');

    const increment = () =>setCount((prev)=>prev + 1);
    const decrement = () =>setCount((prev)=>prev - 1);

    // useEffect('callBack','dependencies') --syntax for useeffect

    useEffect(
        ()=>{
            let div =document.getElementById('card');
          
            if(count > 0 && count < 19){
              
                div.classList.add('red')
                div.classList.remove('green')
            }else if(count >18 && count < 36){
                 
                div.classList.add('green');
                //  div.classlist.remove('red')
            }else{
                div.classList.remove('green','red');
            }

            if (name ==='Gabor'){
                div.classList.add('blue');
                div.classList.remove('yellow');
            }else if(name === 'Matheus'){
                div.classList.remove('blue');
                div.classList.add('yellow')
            }
           
            return()=>{
                console.log('did update')
            }

        },

        [count,name]
    )




    return (
        <div id="card">
            <p>Hi, I am {name}, and I am {count} years old!!</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={()=>setName(name==='Matheus'? 'Gabor':'Matheus')}>Change Name</button>
        </div>
    )
}

export default Counter
