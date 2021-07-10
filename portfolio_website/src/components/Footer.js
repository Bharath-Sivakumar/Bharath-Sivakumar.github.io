import React from 'react';
import './Footer.css';
import {Button} from './Button';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <h2 className='contact-me1'>Contact Me</h2>
            <div className='socials-container'>
                <Link to= {{pathname:'mailto:bharath.sivakumar16@gmail.com'}} target='_blank' className='email'><i class='fas fa-inbox' /></Link>
                <Link to= {{pathname:'https://twitter.com/BharathSivakum8'}} target='_blank' className='twitter'><i class='fab fa-twitter' /></Link>
                <Link to= {{pathname:'https://github.com/Bharath-Sivakumar'}} target='_blank' className='github'><i class='fab fa-github' /></Link>
                <Link to= {{pathname:'https://linkedin.com/in/bharath-sivakumar'}} target='_blank' className='>linkedin'><i class='fab fa-linkedin-in' /></Link>
            </div>
        </div>
    )
}

export default Footer
