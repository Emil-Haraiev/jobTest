import React from 'react';
import './index.css';
import inst from '../../assets/instagram.svg';
import tg from '../../assets/telegram.svg';
import tt from '../../assets/tiktok.svg';
import fb from '../../assets/facebook.svg';
import ln from '../../assets/linkedin.svg'

const Footer = () => {
    return (
        <div className='footer-wrap'>
            <div className="footer-info">
                <div className="footer-mail">team@vnv.solutions</div>
                <div className="footer-address">Karla Miklʹosha, 7 <br/>
                    Lviv, Ukraine</div>
            </div>
            <div className="footer-media">
                <a className="facebook media-wrap" href='https://www.facebook.com/profile.php?id=100088433736254'>
                    <img className='social' src={fb} alt=""/>
                    Facebook
                </a>
                <a className="instagram media-wrap" href='https://www.instagram.com/vnv_solutions/?igshid=MWI4MTIyMDE%3D'>
                    <img  className='social' src={inst} alt="inst"/>
                    Instagram
                </a>
                <a className="telegram media-wrap" href='https://t.me/vnv_solutions'>
                    <img  className='social' src={tg} alt=""/>
                    Telegram
                </a>
                <a className="linkedin media-wrap" href='https://www.linkedin.com/company/vnv-tech/'>
                    <img className='social' src={ln} alt=""/>
                    Linkedin
                </a>
                <a className="tiktok media-wrap" href='https://www.tiktok.com/@vnvsolutions?_t=8YVB28bloQP&_r=1'>
                    <img className='social' src={tt} alt=""/>
                    Tiktok
                </a>
            </div>
        </div>
    );
};

export default Footer;