import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css';
import '../App.css'

function Navbar() {
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [button, setButton] = useState(true);
    const showButton = () => {
        if(window.innerWidth <=960){
            setButton(false);
        } else{
            setButton(true);
        }
    }
    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navBar">
                <div className="navBar-container">
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    Bharath Sivakumar
                </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
                    </div>
                    <ul className={click ?  'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={{pathname: 'https://drive.google.com/file/d/1CD3j9bIE4xlIX__8tDLYRs3I3UH-zts7/view?usp=sharing'}} target='_blank' className='nav-links' onClick={closeMobileMenu}>Resume</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/past_projects' className='nav-links' onClick={closeMobileMenu}>Past Projects</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
