import React, {Component} from 'react';
import './Header.css';


class Header extends Component {
render() {
const headerTitle = {
    title: `Hi, I'm Max!`,
    desc: `A verstile Designer and Developer building & developing websites for start-ups, 
           small businesses, and non-profits. I am currenly looking for new opportunities & new clients.`
}
    return (
        <section className='hero-container heroGradient' id='Home'>
            <h1 className = 'header-main--title'>{headerTitle.title}</h1>
            <p className = 'header-main--blurb'>
                {headerTitle.desc}
            </p>
        </section>
    );
  }
}

export default Header;
