import React from 'react';
import '../App.css';
import { Button } from './Button';
import './mainpage.css';

function mainpage() {
  return (
    <div className='hero-container'>
        {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>Bharath Sivakumar</h1>
      <p>Support Engineer</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Resume
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Visit My Socials
        </Button>
      </div>
    </div>
  );
}

export default mainpage;