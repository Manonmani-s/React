import {Component, Fragment} from 'react';
import './leftside.css';

class Leftside extends Component{
    render(){
        return(
            <Fragment>
            { <main id="main">
                  
             <section id="blog">
                <h2>From Our Blog</h2>
                <div className="loader">
                    <div className="dots"></div>
                    <div className="dots"></div>
                    <div className="dots"></div>
                    <div className="dots"></div>
                    <div className="dots"></div>
                </div>
              
           
            </section> 


        </main>
         }
     
        </Fragment>
        )
    }
}

export default Leftside;