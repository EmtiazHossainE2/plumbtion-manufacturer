import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth)

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  justify-center pt-12">
                    {/* <!-- Page content here --> */}
                    <h2 className='text-3xl text-purple-700 text-center'>DashBoard </h2>
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-[#2e5789] text-white  space-y-4">
                        {/* <!-- Sidebar content here --> */}
                        <li><NavLink to='/dashboard/my-profile' className='text-lg'>Profile</NavLink></li>
                        <li><NavLink to='/dashboard/my-order' className='text-lg'>My Order</NavLink></li>
                        <li><NavLink to='/dashboard/review-here' className='text-lg'>Review Here</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;