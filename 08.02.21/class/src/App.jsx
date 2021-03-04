
import {useState,useEffect} from 'react';
import './App.css';

function App() {

const [users, setUsers] = useState([]);

useEffect(() => {
  fetch("https://api.github.com/users")
  .then(res =>res.json())
  .then(data=>{
    setUsers(data)
   //Set users in state
  })
  
}, [])//empty dependencies means only once when the component is mounted

const list = users.map(user=>(<div className="card" key={user.id}><h5>{user.login}</h5></div>))

  return (
    <div className="section">
    {list} 
     
    </div>
  );
}

export default App;
