import React, { useState } from 'react';
import logo from '../../assets/logo.png'
import './index.css';


const Main = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='main'>
            <div className="menu">
                <img className='logo' src={logo}/>
                <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
                    <div className="burger" onClick={toggleMenu}>
                        <span className="burgerLine"></span>
                        <span className="burgerLine middle-line"></span>
                        <span className="burgerLine"></span>
                    </div>
                    <nav className={`menu ${isOpen ? 'open' : ''}`}>
                        <ul>
                            <li><a href="#f">Home</a></li>
                            <li><a href="#a">About</a></li>
                            <li><a href="#d">Services</a></li>
                            <li><a href="#d">Portfolio</a></li>
                            <li><a href="#f">Contact</a></li>
                        </ul>
                    </nav>
                    {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
                </div>
            </div>
        </div>
    );
};

export default Main;