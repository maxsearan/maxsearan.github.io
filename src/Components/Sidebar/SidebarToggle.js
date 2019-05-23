import React from 'react';
import './SidebarToggle.css';

const SidebarToggle = props => (
    <div className='hamburger-container' onClick={props.click}>
        <div className='toggle-button'>
            <i className="fas fa-hamburger"></i>
        </div>
    </div>
);

export default SidebarToggle;