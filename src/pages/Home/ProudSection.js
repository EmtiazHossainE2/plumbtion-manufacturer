import React from 'react';
import { Link } from 'react-router-dom';
import './ProudSection.css'

const ProudSection = () => {
    return (
        <div className='bg-img'>
            <div className="background-overlay">
                <div className='container mx-auto'>
                    <section className="flex flex-col lg:flex-row justify-center items-center  py-20 " >
                        <div className='flex-1'>
                            <div className='text-center text-white space-y-8 border-2 rounded-lg px-8 py-8 lg:mx-16'>
                                <h2 className='text-4xl '>$ <span className='text-8xl'>70</span> Million </h2>
                                <p className='text-xl'>Compensation that we have got <br /> for our clients.</p>
                            </div>
                        </div>
                        <div className='flex-1 px-6 space-y-8'>
                            <h2 className='text-2xl lg:text-5xl text-white my-3 pt-5 lg:pr-44'>Why we proud</h2>
                            <p className='text-white  text-md lg:text-lg'>We are expert in supplying better products with cost effective solutions and we are experienced in Oil & Gas, Fertilizers, Petrochemical, Refinery and Power project. Our steel products are with superior quality and ensure high reputation among our customers. Hope this will be a good start of our long term cooperation.</p>
                            <div className="my-5">
                                <button className='btn btn-primary'>
                                    <Link to='/contact' className="text-lg">Contact us</Link>
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ProudSection;