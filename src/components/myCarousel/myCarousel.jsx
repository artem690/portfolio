import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './myCarousel.css';
import Slide1 from '../../assets/img/carousal/slide1.jpg';
import Slide2 from '../../assets/img/carousal/slide2.jpg';
import Slide3 from '../../assets/img/carousal/slide3.jpg';

import MyScroll from "../scrollDown/scrollDown.jsx";

const myCarousel = () => {
   return (
      <div id="home">
         <Carousel controls={false} indicator intervals={1500} pauseOnHover={false}>
         <Carousel.Item>
            <img
               className="custom-img"
               src={Slide1}
               alt="First slide"
            />
            
         </Carousel.Item>
         <Carousel.Item>
            <img
               className="custom-img"
               src={Slide2}
               alt="Second slide"
            />

         </Carousel.Item>
         <Carousel.Item>
            <img
               className="custom-img"
               src={Slide3}
               alt="Third slide"
            />

         </Carousel.Item>
         </Carousel>
         <MyScroll />
      </div>
   )
}

export default myCarousel
