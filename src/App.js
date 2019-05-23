import React, {Component} from 'react';
// Components
import Navigation from './Components/Navigation/Navigation';
import Sidebar from './Components/Sidebar/Sidebar';
import Backdrop from './Components/Backdrop/Backdrop';
import Header from './Components/Header/Header';
import MissionState from './Components/Mission/MissionState';
import Services from './Components/Services/Services';
import Projects from './Components/Projects/Projects';
import MyTools from './Components/MyTools/MyTools';
import Footer from './Components/FooterSec/Footer';
// Css

import './index.css'


class App extends Component {

  state = {
    sideBarOpen: false
  };
  
  sidebarToggleClickHandler = () => {
    this.setState((prevState) => {
      return{sideBarOpen: !prevState.sideBarOpen}
    });
  };

  backdropClickHandler = () => {
    this.setState({sideBarOpen: false});
  };
  
  render() {
    let backDrop;
  
    if(this.state.sideBarOpen) {
      backDrop = <Backdrop click={this.backdropClickHandler}/>; 
    } 
  
    return (
      <div style={{height: '100%'}}>
          <Navigation sideBarClickHandler={this.sidebarToggleClickHandler}/>
          <Sidebar show={this.state.sideBarOpen}/>
          {backDrop}
        <main>
            <Header/>
            <MissionState/>
            <Services/>
            <Projects/>
            <MyTools/>
            <Footer/> 
        </main>
      </div>
    );
  }
}

export default App;
