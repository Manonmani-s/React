
import './App.css';
import {Fragment} from 'react';
import Header from './components/header';
import Main from './components/main';
import Aside from './components/aside'
import Footer from './components/footer'

function App() {
  return (
    <Fragment>
          <Header />
          <Main />
          <Aside />
          <Footer />
    </Fragment>
  );
}

export default App;
