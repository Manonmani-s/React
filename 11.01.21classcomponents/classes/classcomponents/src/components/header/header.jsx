import {Component} from 'react';
import './header.css';

class Header extends Component{
    render(){
        return(
            <header className={"header"}>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
        </header>
        )
    }
}

export default Header;