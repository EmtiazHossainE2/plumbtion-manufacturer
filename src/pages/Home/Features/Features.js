import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../../../components/CustomLink';

const Features = () => {
    return (
        <div className='py-8 overflow-hidden  bg-[#F0F0EF]'>
            <div className='container mx-auto'>
                <div className='hidden lg:block'>
                    <ul className='flex justify-center items-center gap-20 space-x-12 lg:mx-12 p-8 bg-white text-lg font-bold '>
                        <li><CustomLink to='/'>Quick Response</CustomLink></li>
                        <li><CustomLink to='/planning'>Strategy Planing</CustomLink></li>
                        <li><CustomLink to='/analysis'>Market Analysis</CustomLink></li>
                        <li><CustomLink to='/strategy'>Great Strategy</CustomLink></li>
                    </ul>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default Features;