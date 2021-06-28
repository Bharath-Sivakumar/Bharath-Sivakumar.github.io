import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './contact-me.css'

function contact_me() {
    return(
        <div className='email-container'>
            <h1 className='email-header'>Email Me</h1>
            <Link to='mailto:bharath.sivakumar16@gmail.com' className='email-link'>bharath.sivakumar16@gmail.com</Link>
        </div>
    )
} 

export default contact_me