import React, { useState} from 'react';
import logo from '../../assets/logo.png'
import './index.css';


const Main = () => {
    const [isOpen, setIsOpen] = useState(false);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.classList.add('scroll-locked');
        } else {
            document.body.classList.remove('scroll-locked');
        }
    };


    return (
        <div className='main' id='main'>
            <div className="menu">
                <img className='logo' src={logo}/>
                <div className='burger-menu close'  onClick={toggleMenu}>
                    <div className={`burger ${isOpen ? 'open' : ''}`}>
                        <span className="burgerLine top-line"></span>
                        <span className="burgerLine middle-line"></span>
                        <span className="burgerLine bottom-line"></span>
                    </div>
                    <nav className={`nav ${isOpen ? 'open' : ''}`}>
                        <ul>
                            <li><a href="#main">Home</a></li>
                            <li><a href="#whyus">Why us?</a></li>
                            <li><a href="#services">Services</a></li>
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
            <div className="mouse">
                <div className="scroller"></div>
            </div>
        </div>
    );
};

export default Main;