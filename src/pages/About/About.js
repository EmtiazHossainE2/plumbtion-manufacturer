import React from 'react';
import construction from '../../assets/images/construction.png'
import Footer from '../../components/Footer';

const About = () => {
    return (
        <div className='px-5'>
            <img src={construction} alt="construction" />
            <Footer />
        </div>
    );
};

export default About;