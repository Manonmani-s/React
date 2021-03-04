
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import icon from './github.png';


const Navbar = ({title}) => {

    return (
        <nav className='navbar bg-primary'>
            <div className='home'>
               <Link to='/'><img src={icon} alt="github"/></Link> 
                <h1 className='inline'>{title}</h1>
            </div>
            <h1>
                <Link to = '/about'>About</Link>
            </h1>
        </nav>
    )
}


Navbar.defaultProps = {
    title: 'User Finder'
}

Navbar.propTypes = {
    title: PropTypes.string,
}

export default Navbar
