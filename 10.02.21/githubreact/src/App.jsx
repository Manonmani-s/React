
import {useState} from 'react'
import Navbar from './Components/Layout/Navbar'
import './App.css';
import Search from './Components/Users/Search'
import Users from './Components/Users/User'


const App = () => {


  const [users,setUsers] = useState([]);

  const searchText = value =>{
    const APIkey = process.env.REACT_APP_CLIENT_ID;

    const APISecrets = process.env.REACT_APP_CLIENT_SECRET
    console.log(APIkey);
    fetch(`https://api.github.com/search/users?q=${value}&client_id=${APIkey}&client_secret=${APISecrets}`)
    .then(res => res.json())
    .then(data => setUsers(data.items))
  }




  return (
    <div >
      <Navbar />
      <Search 
        searchText = {searchText}

      />
      <Users
      users={users} />
    </div>
  );
}

export default App;
