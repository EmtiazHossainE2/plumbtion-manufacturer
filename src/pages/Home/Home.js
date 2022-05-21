import React from 'react';
import Footer from '../../components/Footer';
import Banner from './Banner';
import ChooseUs from './ChooseUs';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <div className="lg:px-12">
                <Banner />
            </div>
            <Tools />
            <ChooseUs/>
            <Footer />
        </div>
    );
};

export default Home;