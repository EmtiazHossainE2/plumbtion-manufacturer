import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import useCheckAdmin from '../../hooks/useCheckAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useCheckAdmin(user)

    return (
        <div >
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  justify-center pt-5">
                    {/* <!-- Page content here --> */}
                    <div className="container mx-auto">
                    <h2 className='text-3xl text-purple-700 text-center pb-5'>DashBoard </h2>
                    <Outlet />
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-[#2e5789] text-white  space-y-4">
                        {/* <!-- Sidebar content here --> */}
                        <li><NavLink to='/dashboard/my-profile' className='text-lg'>Profile</NavLink></li>
                        {admin ? "" :
                            <>
                                <li><NavLink to='/dashboard/my-order' className='text-lg'>My Order</NavLink></li>
                                <li><NavLink to='/dashboard/add-review' className='text-lg'>Add a Review</NavLink></li>

                            </>}
                        {admin &&
                            <>
                                <li><NavLink to='/dashboard/users' className='text-lg'>All User</NavLink></li>
                                <li><NavLink to='/dashboard/add-product' className='text-lg'>Add Product</NavLink></li>
                                <li><NavLink to='/dashboard/manage-order' className='text-lg'>Manage Order</NavLink></li>
                                <li><NavLink to='/dashboard/manage-product' className='text-lg'>Manage Product</NavLink></li>
                                <li><NavLink to='/dashboard/manage-reviews' className='text-lg'>Manage Reviews</NavLink></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;