import {useState,useEffect} from 'react';
import React from 'react'
import './Useritem.css'

const Useritem = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch("https://api.github.com/users")
      .then(res =>res.json())
      .then(data=>{
        setUsers(data)
       
      })
      
    }, [])
    
    const list = users.map(user=>(
        <li className="card" key={user.id}>
        <img src={user.avatar_url} alt=""/>
        <h5>{user.login}</h5>
        <a href={user.html_url}>More Info</a>
    
    </li>))


    return (
        <div >
            <ul className='list'  >{list} </ul>
            
        </div>
    )
}

export default Useritem


