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
                <div className='burger-menu' onClick={toggleMenu}>
                    <div className={`burger ${isOpen ? 'open' : ''}`}>
                        <span className="burgerLine top-line"></span>
                        <span className="burgerLine middle-line"></span>
                        <span className="burgerLine bottom-line"></span>
                    </div>
                    <nav className={`nav ${isOpen ? 'open' : ''}`}>
                        <ul>
                            <li><a href="#f">Home</a></li>
                            <li><a href="#a">Why us?</a></li>
                            <li><a href="#d">Services</a></li>
                            <li><a href="#d">Our Projects</a></li>
                            <li><a href="#f">Contact</a></li>
                            <div className='contact'>Contacts:</div>
                            <li><a href="https://www.linkedin.com/company/vnv-tech/">Linkedin</a></li>
                            <li><a href="https://www.facebook.com/profile.php?id=100088433736254">Facebook</a></li>
                            <li><a href="https://www.instagram.com/vnv_solutions/?igshid=MWI4MTIyMDE%3D">Instagram</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <h1>Easy, quality, IT -
                <b>w</b>inning <b>solutions </b>
                for your business</h1>
            <button className="button">
                <svg className="button-svg">
                    <rect className="button-rect"></rect>
                </svg>
                Order
            </button>
        </div>
    );
};

export default Main;