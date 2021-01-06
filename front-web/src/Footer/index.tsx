import React from 'react';
import {ReactComponent as YoutubeIcon} from './Youtube.svg';
import {ReactComponent as LinkedinIcon} from './Linkedin.svg';
import {ReactComponent as InstagramIcon} from './Instagram.svg';
import './styles.css';

const Footer = ()=>{

    return(

         <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do envento Semana DevSuperior
            <div className="footer-icons">
                 <a href="https://www.youtube.com/c/DevSuperior" target="_new"> <YoutubeIcon /> </a>
                 <a href="https://www.linkdin.com/school/devsuperior/" target="_new"><LinkedinIcon /></a>
                 <a href="https://www.instagram.com/devsuperior.ig/" ><InstagramIcon /> </a>

            </div>
         </footer>
    );
}
export default Footer;