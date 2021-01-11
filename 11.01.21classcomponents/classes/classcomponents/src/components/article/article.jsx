import {Component} from 'react';
import './article.css';


class Article extends Component{
  /*   constructor(props){
        super(props);
        this.state = {
            InputValue:''

        }
    } */ 
    // or other possible option is below

    state = {
        InputValue:''
    };

    ChangeTitle(e){
        console.log(e.target.value);

        // this.state.InputValue = e.target.value;

/* 
          this.setState({
            InputValue:e.target.value
        })   */

         this.setState(()=>{
            return{
                InputValue:e.target.value
            }
        }) 
        console.log( this.state.InputValue);
          
    }
    

    render(){
        return(
            <div className={'Article'}>
                <input 
                type="text"
                placeholder='Enter Title'
                onChange={event=>{this.ChangeTitle(event)}}
                />
                <button type="submit">Submit</button>

                <h2>Here is MY title : {this.state.InputValue}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti magnam blanditiis enim ipsa sint odit. Magnam eos autem minima tempora velit, possimus ut ipsa tempore dicta aliquid blanditiis accusamus sunt!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti magnam blanditiis enim ipsa sint odit. Magnam eos autem minima tempora velit, possimus ut ipsa tempore dicta aliquid blanditiis accusamus sunt!</p>
            </div>
        );
    }
}

export default Article;