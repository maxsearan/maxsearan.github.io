import React from 'react';
import { Link } from "react-scroll";
import SidebarToggle from '../Sidebar/SidebarToggle';
import './Navigation.css';

const Navigation = props => (

<header className='toolbar'>
<nav className='toolbar__navigation'>
  <div className='toolbar__toggle-button'> 
    <SidebarToggle click={props.sideBarClickHandler}/>
  </div>
  <div className='toolbar__logo'>
    <a href="/">Searan</a>
  </div>
  <div className='spacer'/>
  <div className='toolbar_navigation-items'>

        <Link 
        className='hidden'
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

  </div>
</nav>
</header>
);


export default Navigation;

