import React from 'react';
import { Link } from "react-scroll";
import './Sidebar.css';

const Sidebar = props => {

    let sidebarClasses = 'Sidebar'

    if(props.show) {
        sidebarClasses = 'Sidebar open';
    }
   return (
    <nav className={sidebarClasses}>
        <Link 
        activeClass="active" 
        to="Home" 
        spy={true} 
        smooth={true} 
        offset={-70} 
        duration= {500}
        >Home</Link> 

        <Link 
        activeClass="active" 
        to="About" 
        spy={true} 
        smooth={true} 
        offset={-70} 
        duration= {500}
        >About</Link> 

        <Link 
        activeClass="active" 
        to="Services" 
        spy={true} 
        smooth={true} 
        offset={-70} 
        duration= {500}
        >Services</Link> 

        <Link 
        activeClass="active" 
        to="Projects" 
        spy={true} 
        smooth={true} 
        offset={-70} 
        duration= {500}
        >Projects</Link> 


        <Link 
        activeClass="active" 
        to="Connect" 
        spy={true} 
        smooth={true} 
        offset={-70} 
        duration= {500}
        >Connect</Link> 
    </nav>
    );
};


export default Sidebar;