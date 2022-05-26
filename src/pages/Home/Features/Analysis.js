import React from 'react';
import quick1 from '../../../assets/images/features/quick1.jpg'
import quick2 from '../../../assets/images/features/quick2.jpg'
import { BiRightArrowCircle } from 'react-icons/bi';

const Analysis = () => {
    return (
        <div className='lg:px-12 '>
            <div class="card rounded-none bg-base-100 shadow-xl">
                <div class="card-body">
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div class="avatar">
                            <div class="w-64 rounded">
                                <img src={quick1} alt='man' />
                            </div>
                        </div>
                        <div>
                            <h2 className='text-2xl pb-4'>About Company</h2>
                            <div className='space-y-5'>
                                <div className='flex items-center '>
                                    <span className='text-secondary text-2xl pr-2'><BiRightArrowCircle /></span>
                                    <p className="">Easy to  Order  </p>
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-secondary text-2xl pr-2'><BiRightArrowCircle /></span>
                                    <p className="">We offer free support </p>
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-secondary text-2xl pr-2'><BiRightArrowCircle /></span>
                                    <p className="">Finest Consulting Team </p>
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-secondary text-2xl pr-2'><BiRightArrowCircle /></span>
                                    <p className="">First Quality Seeds  </p>
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-secondary text-2xl pr-2'><BiRightArrowCircle /></span>
                                    <p className="">Modern Machines  </p>
                                </div>
                            </div>

                        </div>
                        <div className='space-y-3 '>
                            <h2 className='text-2xl'>Our Mission <br /> Statement</h2>
                            <p>We are always open to cater  </p>
                            <p>ur best services for</p>
                            <p>Industrial Piping Products.</p>
                            <button className='btn btn-primary'>Explore More</button>
                        </div>
                        <div class="avatar">
                            <div class="w-64 rounded">
                                <img src={quick2} alt='man' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Analysis;