import React, { useState, useEffect } from 'react';
import './index.css';

const LeadMagnet = () => {
    const [showOffer, setShowOffer] = useState(false);

    useEffect(() => {
        const offerTimer = setTimeout(() => {
            setShowOffer(true);
            document.documentElement.style.overflow = 'hidden';
        }, 2000);

        return () => {
            clearTimeout(offerTimer);
            document.documentElement.style.overflow = 'auto';
        };
    }, []);

    const handleCloseOffer = () => {
        setShowOffer(false);
        document.documentElement.style.overflow = 'auto';
    };

    return (
        showOffer && (
            <div className="magnet-wrapper">
                <button className="magnet-btn-cls" onClick={handleCloseOffer}>
                    &times;
                </button>
                <p className='magnet-text'>15% Discount on Your First Project.</p>
                <input  className='magnet-input' type="text" placeholder="Name" />
                <input  className='magnet-input' type="text" placeholder="Phone number" />
                <button className='magnet-btn-send'>Send</button>
            </div>
        )
    );
};

export default LeadMagnet;