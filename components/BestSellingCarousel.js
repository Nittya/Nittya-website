// BestSellingCarousel.js

import Slider from 'react-slick';
import ProductCard from './ProductCard'; // Create a ProductCard component for displaying individual products

const BestSellingCarousel = ({ bestSellingProducts }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll on navigation
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="best-selling-carousel mx-5">
            <h2 className="text-2xl font-semibold mb-4">Best Selling Products</h2>
            <Slider {...settings}>
                {bestSellingProducts.map((product) => (
                    <div key={product.id} className="px-2">
                        <ProductCard product={product} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BestSellingCarousel;
