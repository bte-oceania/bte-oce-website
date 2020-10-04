import React from 'react';
import '../css/Home.scss'

class Home extends React.Component{
    render(){
        return(
            <div className="home_main">
                <div className="hero">
                    <img className="hero-image" src="https://cdn.discordapp.com/attachments/754992367752314942/755369973651603496/final5.png"></img>
                    <div className="title-text">
                        <h1 id="top_title">OCEANIA</h1>
                        <hr id="title_divider"/>
                        <h3>Minecraft | 1:1 Scale</h3>
                    </div>
                </div>

            </div>
        )
    }
}

export default Home; 