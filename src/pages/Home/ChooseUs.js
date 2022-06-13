import React from 'react';
import { BsGift,BsPeople,BsCurrencyDollar } from 'react-icons/bs';
import { AiOutlineContacts } from 'react-icons/ai';

const ChooseUs = () => {
    return (
        <div className='py-8  px-5 container mx-auto'>
            <div className='flex flex-col lg:flex-row  justify-center items-center gap-8'>
                <div className='basis-1/3'>
                    <div className='flex'>
                        <img className='lg:max-w-lg' src="https://i.ibb.co/mJL2zQV/man3.jpg" alt="" />
                    </div>
                </div>
                <div className='basis-3/4 py-5'>
                    <div>
                        <div className='space-y-4'>
                            <p className='uppercase text-primary text-md'>why choose us</p>
                            <h2 className='text-4xl font-bold '>We Have Experience</h2>
                            <p>Courtesy may not be the first thing people think of when it comes to plumbing, but for us, it's one of the most important tools we carry. Nothing wears on homeowners like the idea of handling plumbing problems. </p>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-5 capitalize'>
                            <div className="lg:max-w-lg bg-base-100 pb-5 lg:pb-0">
                                <div className="pt-6 space-y-12 ">
                                    <div className='flex items-center'>
                                        <span className='text-primary text-4xl mr-3 border-2 rounded-full p-3  '><AiOutlineContacts /></span>
                                        <div className='space-y-2 '>
                                            <h4 className="text-xl ">Friendly Support </h4>
                                            <p className="text-[14px]">Hope this will be a good start of our long term cooperation. </p>
                                        </div>
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='text-primary text-4xl mr-3 border-2 rounded-full p-3  '><BsGift /></span>
                                        <div className='space-y-2 '>
                                            <h4 className="text-xl ">Best Offers</h4>
                                            <p className="text-[14px]">Our steel products are with superior quality and ensure high reputation</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:max-w-lg bg-base-100  pb-5 lg:pb-0">
                                <div className="pt-6 space-y-12 ">
                                    <div className='flex items-center'>
                                        <span className='text-primary text-4xl mr-3 border-2 rounded-full p-3  '><BsPeople /></span>
                                        <div className='space-y-2'>
                                            <h4 className="text-xl ">Experience Team </h4>
                                            <p className="text-[14px]"> We are expert in supplying better products with cost effective solutions </p>
                                        </div>
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='text-primary text-4xl mr-3 border-2 rounded-full p-3  '><BsCurrencyDollar /></span>
                                        <div className='space-y-2'>
                                            <h4 className="text-xl ">Affordable Price</h4>
                                            <p className="text-[14px]"> it's one of the most important tools we carry </p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;