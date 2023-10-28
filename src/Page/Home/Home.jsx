import React from 'react';
import Bannar from './Bannar/Bannar';
import AboutUs from './AboutUs/AboutUs';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <AboutUs></AboutUs>
            <Services></Services>
        </div>
    );
};

export default Home;