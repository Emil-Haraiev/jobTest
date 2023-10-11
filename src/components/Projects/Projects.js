import React from 'react';
import './index.css';
import SwiperCore  from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import slide1 from '../../assets/slide1.png';
import  slide2 from '../../assets/slide2.png';
import slide3 from '../../assets/slide3.png'

SwiperCore.use([]);

const Projects = () => {
    return (
        <div className="project-container">
            <h1 className="project-title">/ Projects</h1>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                centeredSlides
                grabCursor
                loop={true}
            >
                <SwiperSlide className="project-slide">
                    <img className='slide-img' src={slide1} alt="Slide 1" />
                    <div className="slide-content">
                        <h3>Marketplace</h3>
                        <p>
                            Volstiny production - Marketplace for a Designers agency. Powerful
                            and creative website for powerfull creators. Unique design, a lot of animations and
                            internal marketplace - website is faster than a Forest Gump and ready for a SEO ad
                            campaigns.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="project-slide">
                    <img className='slide-img' src={slide2} alt="Slide 2" />
                    <div className="slide-content">
                        <h3>Web-Service</h3>
                        <p>
                            Lernitlive - webservice for coaches and experts where they can teach
                            online. In easy words - it is a marketplace with some more functionality to pass courses
                            and take classes. You can look throug the courses, choose your coach, according to his
                            rate and reviews. Functionality: you can register,buy classes, chat with your coach and
                            leave reviews.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="project-slide">
                    <img className='slide-img' src={slide3} alt="Slide 3" />
                    <div className="slide-content">
                        <h3>Delivery Service</h3>
                        <p>outsourcing company
                            software development it agency
                            outsourcing it company</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Projects;