import React,{Component, Fragment} from 'react';
import Article from './components/article/article';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import './App.css';

class App extends Component{
  render(){
    return (
      <Fragment>
        <Header />
     <Article />
     <Main />
     <Footer/>
     </Fragment>
    );
  }
  
}

export default App;
