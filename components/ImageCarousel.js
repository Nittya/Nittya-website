// components/ImageCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000, // Adjust as needed
    };

    return (
        <div className="mx-1 relative">
            <Slider {...settings}>
                <div className="h-[600px] overflow-hidden">
                    <img src="/images/slide1.jpg" alt="Slide 1" className="w-full h-full object-cover" />
                </div>
                <div className="h-[600px] overflow-hidden">
                    <img src="/images/slide2.jpg" alt="Slide 2" className="w-full h-full object-cover" />
                </div>
                {/* Add more slides as needed */}
            </Slider>
        </div>
    );
};

export default ImageCarousel;
