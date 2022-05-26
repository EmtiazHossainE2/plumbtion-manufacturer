import React from 'react';
import { BiRightArrowCircle } from 'react-icons/bi';

const Strategy = () => {
    return (
        <div className='lg:px-12 '>
            <div className="card rounded-none bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="flex flex-col lg:flex-row justify-between pb-2 space-y-10 lg:space-y-0">
                        <div className="avatar">
                            <div className="w-64 rounded">
                                <img src='https://i.ibb.co/gtJM2Hx/img1.jpg' alt='factory' />
                            </div>
                        </div>
                        <div>
                            <h2 className='text-2xl pb-4'>Interactive and Fun</h2>
                            <div className='space-y-5'>
                                <div className='flex items-center '>
                                    <span className='text-secondary text-2xl pr-2'><BiRightArrowCircle /></span>
                                    <p className="">Retina Ready  </p>
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-secondary text-2xl pr-2'><BiRightArrowCircle /></span>
                                    <p className="">Stylized Infographics </p>
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-secondary text-2xl pr-2'><BiRightArrowCircle /></span>
                                    <p className="">Modern Machines  </p>
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-secondary text-2xl pr-2'><BiRightArrowCircle /></span>
                                    <p className="">Finest Consulting Team </p>
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-secondary text-2xl pr-2'><BiRightArrowCircle /></span>
                                    <p className="">First Quality Seeds  </p>
                                </div>
                            </div>

                        </div>
                        <div className='space-y-3 '>
                            <h2 className='text-2xl'>Adventure Time </h2>
                            <p>We are expert in supplying  </p>
                            <p>better products with cost effective</p>
                            <p>solutions and we are experienced</p>
                            <button className='btn btn-primary'>Explore More</button>
                        </div>
                        <div className="avatar">
                            <div className="w-64 rounded">
                                <img src='https://i.ibb.co/dt5cDJq/img2.jpg' alt='factory' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Strategy;