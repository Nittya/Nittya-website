import React from 'react';
import Head from 'next/head';
import ImageCarousel from './ImageCarousel';
import TopCategories from './TopCategories';
import BestSellingCarousel from './BestSellingCarousel';
import OurSentiment from './OurSentiment';
import HappyClients from './HappyClients';

const HomePage = () => {
    const bestSellingProducts = [
        { id: 1, title: 'Product 1', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61nutAA+6aL._AC_SY300_SX300_.jpg', price: 19.99 },
        { id: 2, title: 'Product 2', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61n0YTERhBL._AC_SX679_.jpg', price: 29.99 },
        { id: 3, title: 'Product 3', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61nutAA+6aL._AC_SY300_SX300_.jpg', price: 24.99 },
        { id: 4, title: 'Product 4', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61nutAA+6aL._AC_SY300_SX300_.jpg', price: 24.99 },
        // Add more products as needed
    ];


    return (
        <div>
            <Head>
                <title>Nittya.com - Your Daily Nutrition</title>
                <meta name="description" content="Nittya: Created by Prakalp Pande" />
            </Head>

            {/* Header */}
            <header className="bg-green-500 p-4">
                <div className="container mx-auto text-white text-center">
                    <h1 className="text-4xl font-extrabold">Nittya.com</h1>
                    <p className="text-lg">Your Daily Source for Nutrition and Wellness</p>
                </div>
            </header>

            {/* Hero Section with Image Carousel */}
            <section className="relative">
                <ImageCarousel />

                <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Welcome to a Healthier You</h2>
                        <p className="text-gray-100">Discover a wide range of nutrition products to support your wellness journey.</p>
                    </div>
                </div>
            </section>

            {/* Hero Section */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Welcome to a Healthier You</h2>
                    <p className="text-gray-600">Discover a wide range of nutrition products to support your wellness journey.</p>
                </div>
            </section>

            <TopCategories />
            
            {/* Best Selling Products Carousel */}
            <BestSellingCarousel bestSellingProducts={bestSellingProducts} />

            <OurSentiment />

            {/* Testimonial */}
            <HappyClients />


        </div>
    );
};

export default HomePage;
