import React from 'react';
import { BiRightArrowCircle } from 'react-icons/bi';

const Planning = () => {
    return (
        <div className='lg:px-12 '>
            <div class="card rounded-none bg-base-100 shadow-xl">
                <div class="card-body">
                    <div className="flex flex-col lg:flex-row justify-between pb-2">
                        <div class="avatar">
                            <div class="w-64 rounded">
                                <img src='https://i.ibb.co/qpY1mfH/img4.jpg' alt='factory' />
                            </div>
                        </div>
                        <div>
                            <h2 className='text-2xl pb-4'>Be Essential</h2>
                            <div className='space-y-5'>
                                <div className='flex items-center '>
                                    <span className='text-secondary text-2xl pr-2'><BiRightArrowCircle /></span>
                                    <p className="">Manufacturer & Exporter  </p>
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-secondary text-2xl pr-2'><BiRightArrowCircle /></span>
                                    <p className="">Customer Relationship </p>
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-secondary text-2xl pr-2'><BiRightArrowCircle /></span>
                                    <p className="">Provide Quality Products </p>
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-secondary text-2xl pr-2'><BiRightArrowCircle /></span>
                                    <p className="">ISO Certified Company </p>
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-secondary text-2xl pr-2'><BiRightArrowCircle /></span>
                                    <p className="">Most Popular Machines!  </p>
                                </div>
                            </div>

                        </div>
                        <div className='space-y-3 '>
                            <h2 className='text-2xl'>About Plumbtion </h2>
                            <p>an well established company  </p>
                            <p>manufacturing S.STubes </p>
                            <p>ISO Certified Company</p>
                            <button className='btn btn-primary'>Explore More</button>
                        </div>
                        <div class="avatar">
                            <div class="w-64 rounded">
                            <img src='https://i.ibb.co/dt5cDJq/img2.jpg' alt='factory' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Planning;