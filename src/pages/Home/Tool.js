import React from 'react';
import { Link } from 'react-router-dom';
import { BsCartCheck } from 'react-icons/bs';

const Tool = ({ tool }) => {
    const { img, name, des, _id, minOrder, available, price, ratings,diameter,thickness,length } = tool
    return (
        <div className="card lg:max-w-lg bg-base-100 ">
            <figure><img className='w-full' src={img} alt="serviceMan" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name.slice(0, 20)}</h2>
                <p className='pb-2'>{des.slice(0, 100) + '...'}</p>
                <div className="flex flex-col md:flex-row ">
                    <p className='font-bold'>Min Order : <span className='text-[#2a6ee4]'>{minOrder}</span></p>
                    <p className='font-bold'>Price : $ <span className='text-[#2a6ee4]'>{price}</span></p>
                </div>
                <div className="flex flex-col md:flex-row">
                    <p className='font-bold'>Available : <span className='text-[#2a6ee4]'>{available}</span></p>
                    <p className='font-bold'>Ratings : <span className='text-[#2a6ee4]'>{ratings}</span></p>
                    
                </div>
                <div className="card-actions pt-3 ">
                    <Link to={'/tool/' + _id} className='flex btn text-white btn-primary items-center'>
                        <p className='pr-3'> place order</p>
                        <span className='text-white text-lg'><BsCartCheck /></span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Tool;