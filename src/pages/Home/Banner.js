import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="py-12">
                <div className="hero-content flex-col lg:flex-row">
                    <div >
                        <img src="https://i.ibb.co/fn25XQz/man4.jpg" className="max-w-sm lg:max-w-lg rounded-lg shadow-2xl" alt='man' />
                    </div>
                    <div className='lg:px-8 font-bold space-y-2'>
                        <h1 className="text-4xl ">Plumbtion is well established </h1>
                        <h1 className="text-3xl ">company manufacturing </h1>
                        <h1 className="text-3xl ">Tubes & Pipes </h1>
                        <p className="py-6 text-lg ">We also manufacture special steel pipes & tubes
                            like Inconel, duplex, super duplex etc.</p>
                        <button className="btn btn-primary px-8">read more </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;