
import PropTypes from 'prop-types'

const Navbar = ({title}) =>( <nav className = "navbar bg-primary">
    <h1>
        {title}
    </h1>
</nav>)

//defining  a default Props
Navbar.defaultProps = {
    title:'User Search'
};

Navbar.propTypes = {
    title : PropTypes.string.isRequired
}

export default Navbar;