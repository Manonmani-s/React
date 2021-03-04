import {useState} from 'react';
import Navbar from './Components/layout/Navbar';
import Search from './Components/users/Search';
import Users from './Components/users/Users';
import About from './Components/layout/About';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import './App.css';

const App = () =>{

  const[users,setUsers]=useState([]);
  const[loading,setLoading]=useState(false);

  const searchUsers = (text) => {
   setLoading(true);
   const APIKey = process.env.REACT_APP_CLIENT_ID;
   const APISecret = process.env.REACT_APP_CLIENT_SECRET;
   console.log(APIKey);
   fetch(`https://github.com/search/users?q=${text}&client_id=${APIKey}&client_secret=${APISecret}`)
   .then(res =>res.json())
   .then(data =>{
     setUsers(data.items)
     setLoading(false);
    }
   )
  }

  const clearUsers = () =>{
    setUsers([]);
    setLoading(false);
  }


  return (
    <Router>
      <Navbar />
      <Switch>
        <Route 
          exact
          path='/'
          render = {() =>{
            <> 
             <Search 
                searchUsers = {searchUsers}
                clearUsers = {clearUsers}
                showClear = {users.length >0 ? true : false}
              /> 
              <Users />
           </>
          }}
        
        
        />
        <Route
          path = '/about'
          component = {About}
       />
      </Switch>
     
    </Router>
  );
}

export default App;
