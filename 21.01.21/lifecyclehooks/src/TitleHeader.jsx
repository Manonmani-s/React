import React, { Component } from 'react'
class TitleHeader extends Component {
    state={
            title:''
    }

    static getDerivedStateFromProps(props,state){
        if(state.title !== props.newTitle){
            return {
                title:props.newTitle
            }
        }else{
            return null;
        }
    }

    componentDidMount(){
        console.log('Component did Mount...')
        let header = document.querySelector('h1');
        header.style.background = 'green';
        
    }

    componentDidUpdate(){
        console.log('Component did update...')
        let header = document.querySelector('h1');
        header.style.background = 'blue';
    }

    // to bring data from background database we use componentdidmount

    componentWillUnmount(){
        console.log('Component will unmount..')
        alert('Component will unmount');
        this.setState({
            title:null
        })
    }
    render() {
        console.log('render...')
        return (
            <h1>
                {this.state.title}
            </h1>
           
        )
    }

  

}

export default TitleHeader
