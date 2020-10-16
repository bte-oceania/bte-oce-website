import React from 'react';
import '../../css/pages/Home.scss';
import Hero from '../hero-image/Hero'
import HomeAboutSection from './home/About';


const Home = () => {
        return(
            <div className="home_main">
                <Hero/>
                <HomeAboutSection/>
            </div>
        )
    
}

export default Home; 