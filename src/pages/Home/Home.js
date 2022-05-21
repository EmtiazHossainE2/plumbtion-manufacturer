import React from 'react';
import Footer from '../../components/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ChooseUs from './ChooseUs';
import ProudSection from './ProudSection';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <div className="lg:px-12">
                <Banner />
            </div>
            <Tools />
            <ChooseUs/>
            <ProudSection/>
            <BusinessSummary/>
            <Footer />
        </div>
    );
};

export default Home;