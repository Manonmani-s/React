import {Fragment} from 'react';

const Aside = () => <Fragment>
        <aside id="sidebar" class="card">
        <h3>Navigation</h3>
        <nav>
            <ul id="main-nav">
                <li><a href="/">Home</a></li>
                <li><a href="about">About</a></li>
                <li><a href="contact">Contact</a></li>
            </ul>
        </nav>
        <hr />
        <h3>Contact us</h3>
        <ul>
            <li><strong>Address:</strong>21073 Hamburg, Kaserenenstr 21, Safwan</li>
            <li><strong>Phone:</strong>(+49)1520 2806476</li>
            <li><strong>Email:</strong>kherallah.safwan@gmail.com</li>
        </ul>
    </aside>
    <div class="clr"></div>
</Fragment>

export default Aside;