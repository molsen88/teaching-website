import React from 'react';
import '../../App.css';
import Header from './Header';
import MyParallax from './MyParallax';
import About from './About';
import Schedules from './Schedules'
import ClassCarousel from './ClassCarousel';
import HelpfulLinks from './HelpfulLinks';
import ObjectiveCards from './ObjectiveCards'
import Footer from './Footer'

const Home = () => {
    return (
        <div>
            <Header />
            <ClassCarousel />
            <HelpfulLinks />
            <About />
            <MyParallax />
            <Schedules />
            <ObjectiveCards />
            <Footer />

        </div>
    )
}

export default Home