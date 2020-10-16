import taupoblur from '../../img/taupoblur.jpg'; 
import React from 'react';
import './hero.scss';

const Hero = () => {
    return(
        <div className="hero">
                    <img className="hero-image" src={taupoblur}></img>
                    <div className="title-text">
                        <h1 id="top_title">OCEANIA</h1>
                        <hr id="title_divider"/>
                        <h3>Minecraft | 1:1 Scale</h3>
                    </div>
                </div>
    )};
export default Hero; 