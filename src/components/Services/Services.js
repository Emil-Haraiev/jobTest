import React, { useState } from 'react';
import './index.css';

const Services = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div className='serviceWrap' id='services'>
            <h1 className='serviceTitle'>/ Services</h1>
            <div className="tab-container">
                <div className="tab-buttons">
                    <button
                        className={`tab-button ${activeTab === 1 ? 'active' : ''}`}
                        onClick={() => handleTabClick(1)}
                    >
                        A UNIQUE
                        ERP SYSTEM
                    </button>
                    <button
                        className={`tab-button ${activeTab === 2 ? 'active' : ''}`}
                        onClick={() => handleTabClick(2)}
                    >
                        SOFTWARE
                    </button>
                    <button
                        className={`tab-button ${activeTab === 3 ? 'active' : ''}`}
                        onClick={() => handleTabClick(3)}
                    >
                        BOT
                    </button>
                    <button
                        className={`tab-button ${activeTab === 4 ? 'active' : ''}`}
                        onClick={() => handleTabClick(4)}
                    >
                        WEBSITE
                    </button>
                    <button
                        className={`tab-button ${activeTab === 5 ? 'active' : ''}`}
                        onClick={() => handleTabClick(5)}
                    >
                        ONLINE-STORE
                    </button>
                </div>

                <div className="tab-content">
                    {activeTab === 1 && (
                        <div className={`tab-item ${activeTab === 1 ? 'active' : ''}`}>
                            <div className='item-wrap'>
                                <h2>DEVELOPMENT OF A UNIQUE ERP SYSTEM</h2>
                                <ul className='serviceList'>
                                    <li>Everyone Matters</li>
                                    <li>Leadership is Here To Serve</li>
                                    <li>Resilient</li>
                                </ul>
                                <p className='description'>Developing customized ERP (Enterprise Resource Planning) systems to streamline your business operations,
                                    enhance inter-departmental communication, and automate processes.
                                    Our tailored ERP solutions can integrate with other software for comprehensive business management.</p>
                                <button className='want-btn'><span>WANT</span></button>
                            </div>
                        </div>
                    )}
                    {activeTab === 2 && (
                        <div className={`tab-item ${activeTab === 2 ? 'active' : ''}`}>
                            <div className="item-wrap">
                                <h2>SOFTWARE
                                    DEVELOPMENT</h2>
                                <ul className='serviceList'>
                                    <li>Qualitatively</li>
                                    <li>Fast</li>
                                    <li>Promising</li>
                                </ul>
                                <p>Our software is aiming to solve your business problems and meet specific business needs.
                                    Our experienced team can develop software for a wide range of industries and applications, especially agriculture, finance, healthcare, and logistics, among others. Our goal is to deliver high-quality software that will solve your business tasks and problems,
                                    and optimize your working processes to help your business grow.</p>
                                <button className='want-btn'><span>WANT</span></button>
                            </div>
                        </div>
                    )}
                    {activeTab === 3 && (
                        <div className={`tab-item ${activeTab === 3 ? 'active' : ''}`}>
                            <div className="item-wrap">
                                <h2>BOT
                                    DEVELOPMENT</h2>
                                <ul className='serviceList'>
                                    <li>Automation</li>
                                    <li>Innovation</li>
                                    <li>Quality</li>
                                </ul>
                                <p>We specialize in developing customized bots that can automate tasks and improve efficiency.
                                    We can create bots for a wide range of applications, including customer service, social media, and sales, among others. Our goal is to provide you with cutting-edge technology that improves their productivity and enhances their customer experience.
                                </p>
                                <button className='want-btn'><span>WANT</span></button>
                            </div>
                        </div>
                    )}
                    {activeTab === 4 && (
                        <div className={`tab-item ${activeTab === 4 ? 'active' : ''}`}>
                            <div className="item-wrap">
                                <h2>WEBSITE
                                    TRANSFERRING</h2>
                                <ul className='serviceList'>
                                    <li>Skills</li>
                                    <li>Experience</li>
                                    <li>Result</li>
                                </ul>
                                <p>We provide website migration services for clients looking to move their websites between platforms.
                                    Our team of developers ensures a smooth and seamless transition, maintaining full website functionality
                                    throughout the process. Our aim is to minimize disruptions to our clients' online presence and ensure their website aligns with their business requirements.</p>
                                <button className='want-btn'><span>WANT</span></button>
                            </div>
                        </div>
                    )}
                    {activeTab === 5 && (
                        <div className={`tab-item ${activeTab === 5 ? 'active' : ''}`}>
                            <div className="item-wrap">
                                <h2>ONLINE-STORE
                                    DEVELOPMENT</h2>
                                <ul className='serviceList'>
                                    <li>Continuous improvements</li>
                                    <li>Quality</li>
                                    <li>Efficiency</li>
                                </ul>
                                <p>We specialize in creating highly converting online stores for businesses looking to establish a
                                    strong online presence. Our experienced team designs and builds user-friendly e-commerce websites that boost sales, expand customer reach, and enhance overall business performance.</p>
                                <button className='want-btn'><span>WANT</span></button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Services;
