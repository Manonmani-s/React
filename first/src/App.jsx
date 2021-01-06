// import logo from './logo.svg';


import Nav from './header.jsx';
import './App.css';

function App() {
  return (
 
    <div className="App">
         < Nav />
      <header className="App-header">
        <h1>FbW39 First App</h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
         We are trying our First React Application
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
