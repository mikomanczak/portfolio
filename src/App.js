import React, { Component } from 'react';
import './App.css';
import WelcomeSection from './Components/WelcomeSection/WelcomeSection';
import TimelineSection from './Components/TimelineSection/TimelineSection'; 
import StackSection from './Components/StackSection/StackSection';
import ProjectsSection from './Components/ProjectsSection/ProjectsSection';
import NavSideBar from './Components/NavSideBar/NavSideBar';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavSideBar />
        <WelcomeSection />
        <TimelineSection />
        <StackSection/>
        <ProjectsSection />
        <Footer />
      </div>
    );
  }
}

export default App;
