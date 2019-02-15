import React from 'react';

import SideBar from '../components/SideBar/SideBar';
import Header from '../components/Layout/Header/Header';
import Story from '../components/Story/Story';
import Features from '../components/Features/Features';
import Gallery from '../components/Gallery/Gallery';
import Footer from '../components/Layout/Footer/Footer';
import Homes from '../components/Homes/Homes';
import Realtors from '../components/Realtors/Realtors';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className = "HomePage">
          <SideBar/>
          <Header/>
          <Homes/>
          <Realtors/>
          <Features/>
          <Gallery/>
          <Story/>
          <Footer/>
            
        </div>
    );
};

export default HomePage;