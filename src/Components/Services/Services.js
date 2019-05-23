import React, {Component} from 'react';
import './Services.css';


class Services extends Component {
render() {

    return (
      <section className = 'services-content' id='Services' >
        <div className = 'services-info' >
            <h1 className = 'services-main--title' >Services</h1>
            <h3 className = 'services-main--sub-title' >What I Bring To The Table</h3>
            <div className = 'row'>
              <div className='service-items'>
                <span>
                <i className="fas fa-laptop-code"></i>
                </span>
                <h4>Development</h4>
                <p>From CMS to handcrafted sites</p>
              </div>

              <div className='service-items'>
                <span>
                <i className="fas fa-pencil-ruler"></i>
                </span>
                <h4>Design</h4>
                <p>Look great and attract more customers.</p>
              </div>

              <div className='service-items'>
                <span>
                <i className="fas fa-users"></i>
                </span>
                <h4>UI/UX</h4>
                <p>Creating a great User Experience.</p>
              </div>
          </div>
        </div>
  </section>
    )
  }
}

export default Services;