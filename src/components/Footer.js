import React from 'react';
import '../css/Footer.scss';
import { FontAwesomeIcon }from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    
    return(
        <footer>
           <p>&copy; Copyright { new Date().getFullYear() } - Oceania Build Team</p>
           <p>Made with <FontAwesomeIcon icon={faHeart}/> by the <Link to="/website-team">Website Team</Link></p>
           <ul>
                <li><a href="https://discord.gg/P2yhjC4">
                   <FontAwesomeIcon icon={["fab","discord"]} id="discord-icon"/></a>
                </li>
               <li><a href="https://twitter.com/bteoceania">
                   <FontAwesomeIcon icon={["fab","twitter-square"]}/></a>
                </li>                
                <li><a href="https://instagram.com/">
                   <FontAwesomeIcon icon={["fab","instagram-square"]}/></a>
                </li>
                <li><a href="https://youtube.com/">
                   <FontAwesomeIcon icon={["fab","youtube-square"]}/></a>
                </li>
           </ul>
        </footer>
    );
}



export default Footer;