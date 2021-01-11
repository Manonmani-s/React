import { Component } from "react"
import "./Article.css"
import Input from './inputs/input'

class Article extends Component {

  state = {
    title: "Here is My Title",
    dynamicValue:'',
  }

  assignValue=text=>{
    this.setState({
      dynamicValue : text
    })
  }

  render() {
    return (
      <div className={"Article"}>
       <Input getValue={this.assignValue} holder={this.state.placeholder}/>
        <button onClick={()=>{this.clichHandler()}}>Submit</button>
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
      </div>
    )
  }
}

export default Article;
