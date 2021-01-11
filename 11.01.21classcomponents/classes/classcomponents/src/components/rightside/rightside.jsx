import {Component, Fragment} from 'react';
import './rightside.css';


class Rightside extends Component{
    render(){
        return(
            <Fragment>
                <aside id="sidebar" className={"card"}>
                <h2>Our Recent Achievements</h2>
                <nav>
                    <ul id="main-nav">
                        <li><a href="/"> 1 lorem</a></li>
                        <li><a href="about">2 lorem</a></li>
                        <li><a href="contact">3lorem</a></li>
                    </ul>
                </nav>
              
              
                </aside>
                <div className={"clr"}></div>
        </Fragment>
        )
    }
}

export default Rightside;