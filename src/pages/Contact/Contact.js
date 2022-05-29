import React from 'react';
import construction from '../../assets/images/construction.png'
import Footer from '../../components/Footer';
import PageTitle from '../../components/PageTitle';

const Contact = () => {
    return (
        <>
            <PageTitle title="Contact us - "></PageTitle>
            <div className='px-5'>
                <img src={construction} alt="construction" />

                <Footer />
            </div>
        </>

    );
};

export default Contact;