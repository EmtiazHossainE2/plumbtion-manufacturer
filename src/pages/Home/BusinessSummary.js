import React from 'react';
import { GiPipes,GiWarpPipe,GiPostOffice } from 'react-icons/gi';
import { GrGroup } from 'react-icons/gr';

const BusinessSummary = () => {
    
    return (
        <div className='container mx-auto md:pt-8 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4 px-4  mb-12'>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <span className='text-5xl'><GiPipes/></span>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold text-3xl ">37500 +</h2>
                    <p className='font-bold text-lg'>Tons of pipes</p>
                </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <span className='text-5xl'><GiWarpPipe/></span>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold text-3xl ">21000 +</h2>
                    <p className='font-bold text-lg'>Tons of Tubes</p>
                </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <span className='text-5xl'><GrGroup/></span>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title  font-bold text-3xl ">1200 +</h2>
                    <p className='font-bold text-lg'>Happy Customers</p>
                </div>
            </div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <span className='text-5xl'><GiPostOffice/></span>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold text-3xl ">12 + </h2>
                    <p className='font-bold text-lg'>Branch Office</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;