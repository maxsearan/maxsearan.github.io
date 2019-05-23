import React, {Component} from 'react';
import { Link } from "react-scroll";
import './Footer.css';


class Footer extends Component {
render() {

    return (
        <section className = 'footer-content' id='Connect'>
            <div className='footer-blurb'>
                <p>Created with React.js powered by Github!</p>
            </div>
        <Link 
        className='shown'
        activeClass="active" 
        to="Home" 
        spy={true} 
        smooth={true} 
        offset={-70} 
        duration= {500}
        ><i id='Home' className="far fa-hand-point-up"></i></Link> 
        </section>
    )
  }
}

export default Footer;