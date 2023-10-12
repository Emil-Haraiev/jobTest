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
                <div className="footer-address"><a href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%9A%D0%B0%D1%80%D0%BB%D0%B0+%D0%9C%D1%96%D0%BA%D0%BB%D1%8C%D0%BE%D1%88%D0%B0,+7,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.7835477,24.0152769,17z/data=!3m1!4b1!4m6!3m5!1s0x473ae7d4b02a2c4d:0xb2af24fc0f878a18!8m2!3d49.7835443!4d24.0178518!16s%2Fg%2F11fm9tmkkk?entry=ttu">Karla Miklʹosha, 7 <br/>
                    Lviv, Ukraine</a></div>
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