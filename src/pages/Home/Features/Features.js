import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../../../components/CustomLink';

const Features = () => {
    return (
        <div className='py-12   bg-[#F0F0EF]'>
            <div>
                <div >
                    <ul className='flex justify-center items-center gap-20 space-x-20 lg:mx-12 p-8 bg-white text-lg font-bold '>
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