import React from 'react';
import '../App.css';
import { Button } from './Button';
import './mainpage.css';
import {Link} from 'react-router-dom';

function mainpage() {
  return (
    <div className='hero-container'>
      <h1>Bharath Sivakumar</h1>
      <p>Support Engineer</p>
      <div className='hero-btns'>
          <Link to={{pathname:'https://drive.google.com/file/d/1CD3j9bIE4xlIX__8tDLYRs3I3UH-zts7/view?usp=sharing'}} target='_blank' className='btn btn--outline btn--large'>Resume</Link>
      </div>
    </div>
  );
}

export default mainpage;