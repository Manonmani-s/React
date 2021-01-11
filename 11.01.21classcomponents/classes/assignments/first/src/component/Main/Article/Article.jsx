import { Component } from "react"
import "./Article.css"
import Input from './Input/Input'



class Article extends Component {

  state = {
    title: 'Here is My Title',
    dynamicValue: '',
    placeholder:'Please Enter a New Title'
  }
  
  ClickHandler(){
    console.log(this.state.dynamicValue)
    if (this.state.dynamicValue === '') {
      this.setState({
        title : 'Here is My Title'
      })
    } else {
      this.setState({
        title : this.state.dynamicValue
      })
    }
    
  }

  assigneValue =text => {
    // text is called in Input component : this.state.InputValue 
    this.setState({
      dynamicValue : text 
    })
  }

  render() {
    return (
      <div className={"Article"}>
        <Input getValue={this.assigneValue} holder={this.state.placeholder }/>
        <button onClick={()=>{this.ClickHandler()}}>Sumbit</button>
        <h2>
          
          {this.state.title}
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          nostrum quidem ea veniam, optio exercitationem molestiae nobis magni
          odit. Harum?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Asperiores sint sequi libero saepe neque esse minima, ducimus veniam
          blanditiis! Repudiandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          nostrum quidem ea veniam, optio exercitationem molestiae nobis magni
          odit. Harum?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Accusantium et a eveniet quia aspernatur, ipsum obcaecati provident ea
          adipisci odit.
        </p>
        <div className={"box"} style={{background:this.state.title }}>
            Color Me
        </div>
      </div>
    )
  }
}

export default Article
