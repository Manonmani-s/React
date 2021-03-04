
import {useState,useEffect} from 'react';
import './App.css';

function App() {

const [users, setUsers] = useState([]);

const[input,setInput]=useState('cats');
const[number,setNumber]=useState(0);


const inputHandler = (e)=>  setInput(e.target.value);

const clickHandler = ()=> {
  const updateNumber=(e)=>{
    setNumber(e.target.value);
  }}

const giveResult = (updateNumber)=>{console.log(number)}


const updateNumber=(e)=>{
  setNumber(e.target.value);
} 

const imageClickHandler=(e)=>{console.log(e)}


useEffect(() => {
  
  fetch(`https://pixabay.com/api/?key=20214524-a2408f82b036126a3afa8df88&q=${input}&per_page=${number}`)
  .then(res =>res.json())
  .then(data=>{
    setUsers(data.hits)

  })
 
  
}, [input,number])



 const list = users.map(user=>(<div className="card" key={user.id} ><img src={user.previewURL} /></div>))


  return (
    <div className="section">
      <input type="text" onChange={inputHandler}/>
      <input type="number" onChange={updateNumber} />
      <input type="button" value='search' onClick={clickHandler}  />
      <div className="list"> {list} </div>
   
     
    </div>
  );
}

export default App;
