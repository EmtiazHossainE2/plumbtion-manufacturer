import React from 'react';
import { Link } from 'react-router-dom';
import error from '../assets/images/error'

const NotFound = () => {
    return (
        <div className='text-center'>
            <Link to='/'><img src={error} alt="" /></Link>
        </div>
    );
};

export default NotFound;