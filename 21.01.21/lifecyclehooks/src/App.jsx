
import './App.css';
import { Component } from 'react';
import TitleHeader from './TitleHeader'

class App extends Component {
  state ={
    value:'default item',
    show :true,
    data:[{id:1,title:'first Item'},{id:2,title:'Second Item'},{id:3,title:'third Item'}]
  }

  changeTitle = title =>{
    this.setState({value:title})
  }

  toggleBtn = ()=>{
    this.setState(CurrentState =>({
      show: !CurrentState.show
    }))
  }
  render() {
    const List = this.state.data.map(item=> <li key={item.id} onClick ={()=> this.changeTitle(item.title)}>{item.title}</li>
    );
    return (
        <div className='wrapper'>
            {this.state.show ? <TitleHeader newTitle={this.state.value}/> : null}
            <ul className='list'>{List}</ul>
            {/* List is the array of Objects */}
            <button className='btn' onClick={()=>this.toggleBtn()}>Toggle</button>
            
        </div>
    )
}
}

export default App;
