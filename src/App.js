// import React from 'react';
// import './App.css';
// import Header from './components/layout/Header'
// import MyParallax from './components/layout/MyParallax';
// import About from './components/layout/About'
// import Schedules from './components/layout/Schedules'
// import ClassCarousel from './components/layout/ClassCarousel';
// import HelpfulLinks from './components/layout/HelpfulLinks';
// import ObjectiveCards from './components/layout/ObjectiveCards'
// import Footer from './components/layout/Footer'
// import StudentWork from './components/StudentWork'
import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Booklist from "./pages/Booklist";
import Home from './components/layout/Home'



function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/classroom-policies" component={classroomPolicies} /> */}
        {/* <Route exact path="/helpful-links" component={helfpulLinks} /> */}
        <Route exact path="/booklist" component={Booklist} />
      </div>
    </Router>



  );
}

export default App;
