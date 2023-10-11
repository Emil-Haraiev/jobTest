import React from 'react';
import './index.css'
import quality from '../../assets/quality.svg';
import reliability from '../../assets/trust.svg';
import speed from '../../assets/speed.svg';
import innovation from '../../assets/innovation.svg';
import prof from '../../assets/prof.svg';
import afford from '../../assets/money.svg';


const WhyUs = () => {
    return (
        <div className='why-us-container' id='whyus'>
            <h1 className='why-us-title'>/  Why us?</h1>
            <div className="why-us-block">
                <div className="why-us-item">
                    <img className='icon' src={quality} alt="quality"/>
                    <p>Quality</p>
                </div>
                <div className="why-us-item">
                    <img className='icon' src={reliability} alt="quality"/>
                    <p>Reliability</p>
                </div>
                <div className="why-us-item">
                    <img className='icon' src={speed} alt="quality"/>
                    <p>Speed</p>
                </div>
                <div className="why-us-item">
                    <img className='icon' src={innovation} alt="quality"/>
                    <p>Innovation</p>
                </div>
                <div className="why-us-item">
                    <img className='icon' src={prof} alt="quality"/>
                    <p>Professionalism</p>
                </div>
                <div className="why-us-item">
                    <img className='icon' src={afford} alt="quality"/>
                    <p>Affordability</p>
                </div>
            </div>
            <button className="order-button">Order now</button>
        </div>
    );
};

export default WhyUs;