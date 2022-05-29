import React from 'react';
import construction from '../../assets/images/construction.png'
import Footer from '../../components/Footer';
import PageTitle from '../../components/PageTitle';

const About = () => {
    return (
        <div className='px-5'>
            <PageTitle title="About-us -"></PageTitle>
            <img src={construction} alt="construction" />
            <Footer />
        </div>
    );
};

export default About;