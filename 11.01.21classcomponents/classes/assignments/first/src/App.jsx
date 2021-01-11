import { Component } from "react"
import "./App.css"
import Footer from "./component/Footer/Footer"
import Header from "./component/Header/Header"
import Main from "./component/Main/Main"
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}

export default App
