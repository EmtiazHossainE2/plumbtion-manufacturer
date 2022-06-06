import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="bg-container">
            <div className="pb-16 pt-16 bg-overlay">
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center  lg:px-12 order-last lg:order-first px-3">
                    <div className='lg:px-8 font-bold space-y-2 text-white'>
                        <h1 className="text-3xl ">Plumbtion is well established </h1>
                        <h1 className="text-2xl ">company manufacturing </h1>
                        <h1 className="text-2xl ">Tubes & Pipes </h1>
                        <p className="py-6 text-lg ">We also manufacture special steel pipes & tubes
                            like Inconel, duplex, super duplex etc.</p>
                        <Link to='/about'><button className="btn btn-primary px-8">read more </button></Link>
                    </div>
                    <div className='order-first lg:order-last'>
                        <img src="https://i.ibb.co/fn25XQz/man4.jpg" className="max-w-sm w-full lg:max-w-xl rounded-lg shadow-2xl" alt='man' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;