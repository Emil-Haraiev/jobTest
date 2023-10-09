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
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                centeredSlides
                grabCursor
                loop={false}
            >
                <SwiperSlide className="project-slide">
                    <img className='slide-img' src={slide1} alt="Slide 1" />
                    <div className="slide-content">
                        <h3>Slide 1</h3>
                        <p>Description for Slide 1</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="project-slide">
                    <img className='slide-img' src={slide2} alt="Slide 2" />
                    <div className="slide-content">
                        <h3>Slide 2</h3>
                        <p>Description for Slide 2</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="project-slide">
                    <img className='slide-img' src={slide3} alt="Slide 3" />
                    <div className="slide-content">
                        <h3>Slide 3</h3>
                        <p>Description for Slide 3</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Projects;