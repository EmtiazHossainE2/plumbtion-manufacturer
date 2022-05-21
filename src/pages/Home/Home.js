import React from 'react';
import Footer from '../../components/Footer';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <div className="lg:px-12">
                <Banner />
            </div>
            <Footer/>
        </div>
    );
};

export default Home;