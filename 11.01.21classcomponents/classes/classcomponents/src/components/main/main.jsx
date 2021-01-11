import {Component, Fragment} from 'react';
import Leftside from '../leftside/leftside.jsx';
import Rightside from '../rightside/rightside'


class Main extends Component{
    render(){
        return(
            <Fragment>
                <Leftside />
                <Rightside />
            </Fragment>
        );
    }
}

export default Main;