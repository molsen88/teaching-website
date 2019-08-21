import React from 'react';
import './App.css';
import Header from './components/Header'
import MyParallax from './components/MyParallax';
import About from './components/About'
import Schedules from './components/Schedules'
import ClassCarousel from './components/ClassCarousel';
import HelpfulLinks from './components/HelpfulLinks'
// import StudentWork from './components/StudentWork'


function App() {
  return (
    <div>
      <Header />
      <ClassCarousel />
      <About />
      <Schedules />
      <MyParallax />
      <HelpfulLinks />







    </div>



  );
}

export default App;
