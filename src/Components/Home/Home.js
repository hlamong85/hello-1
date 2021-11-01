import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import DeliveryMan from '../DeliveryMan/DeliveryMan';

const Home = () => {
    return (
        <div>
            <h1>This is home</h1>
            <Banner></Banner>
            <DeliveryMan></DeliveryMan>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;