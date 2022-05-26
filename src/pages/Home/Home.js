import React from 'react';
import Footer from '../../components/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ChooseUs from './ChooseUs';
import Features from './Features/Features';
import GetInTouch from './GetInTouch';
import ProudSection from './ProudSection';
import ReviewSection from './ReviewSection';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner />
            <Features/>
            <Tools />
            <ChooseUs/>
            <ProudSection/>
            <BusinessSummary/>
            <ReviewSection/>
            <GetInTouch/>
            <Footer />
        </div>
    );
};

export default Home;