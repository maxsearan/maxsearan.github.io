import React, {Component} from 'react';
// icons

import vscode from '../../img/Symbols/Symbol1.png';
import affinity from '../../img/Symbols/Symbol4.png';
import  git from '../../img/Symbols/Symbol5.png';
import adobe from '../../img/Symbols/Symbol6.png';

import './MyTools.css';

class MyTools extends Component {
    render() {

    
        return (
            <section className='my-tools-container'>
                    <div className = 'my-tools-info' >
                            <h1 className = 'my-tools-main--title' >Tools I use</h1>
                        <div className = 'row'>
                            <div className='my-tools-items'>
                                <span>
                                    <img src={vscode} className='tools t-v' />
                                </span>
                            </div>

                            <div className='my-tools-items'>
                                <span>
                                    <img src={git} className='tools t-g' />
                                </span>
                            </div>

                            <div className='my-tools-items'>
                                <span>
                                    <img src={affinity} className='tools t-a' />
                                </span>
                            </div>

                            <div className='my-tools-items'>
                                <span>
                                    <img src={adobe} className='tools t-cc' /> 
                                </span>
                            </div>
                        </div>
                     </div>

                     <div className='email-container'>
                        <p className='email-title--main'>✨ I'm available for work, get in touch ✨</p>
                        <a href="mailto:searan.wes@gmail.com?Subject=Let's work together " target="_top" className='email-link'>searan.wes@gmail.com</a>
                     </div>
            </section>
        );
      }
    }
    
    export default MyTools;