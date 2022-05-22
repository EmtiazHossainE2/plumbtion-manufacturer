
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo1.png'
import auth from '../Firebase/firebase.init';
import demoProfile from '../assets/images/demoProfile.png'

const Navbar = ({ children }) => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth)

    const logOut = () => {
        signOut(auth)
        navigate('/login');
    }
    const menuItems = <>
        <li>
            <NavLink to='/' className='rounded-lg '>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to='/blog' className='rounded-lg '>
                Blog
            </NavLink>
        </li>
        <li>
            <NavLink to='/contact' className='rounded-lg '>
                Contact
            </NavLink>
        </li>
        <li>
            <NavLink to='/about' className='rounded-lg '>
                About
            </NavLink>
        </li>
        {user?.uid
            ?
            <li className='dropdown  dropdown-end '>
                <label
                    tabIndex='0'
                    className='rounded-lg'
                >
                    {user?.photoURL
                        ?
                        <div className="avatar">
                            <div className="w-8  rounded-full cursor-pointer">
                                <img src={user?.photoURL} alt="User" />
                            </div>
                        </div>
                        :
                        <div className="avatar">
                            <div className="w-8 rounded-full cursor-pointer">
                                <img src={demoProfile} alt="Demo" />
                            </div>
                        </div>
                    }
                </label>
                <ul
                    tabIndex='0'
                    className='dropdown-content bg-[#0b1623] text-white menu p-2 shadow space-y-2 w-52'
                >
                    <li><NavLink to='/dashboard/my-profile' className='text-lg'>Profile</NavLink></li>
                    <li><NavLink to='/dashboard/my-booking' className='text-lg'>My Booking</NavLink></li>
                    <li><NavLink to='/dashboard/my-review' className='text-lg'>My Review</NavLink></li>
                    <li><button onClick={logOut} className='text-lg'>Log Out</button></li>
                </ul>
            </li>
            :
            <NavLink to='/login' className='rounded-lg text-md font-bold pt-3'>
                Login
            </NavLink>
        }
    </>
    return (
        <div >
            <div className="drawer drawer-end">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    <div className="w-full navbar bg-[#0b1623] text-white  lg:px-12 sticky top-0 z-50" >
                        <Link to='/' className="flex-1 text-2xl font-bold px-2 mx-2 text-white">
                            <img className='w-[200px] py-2' src={logo} alt="plumbtion logo" />
                        </Link>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal space-x-2">
                                {menuItems}
                            </ul>
                        </div>
                    </div>
                    {/*  Page content here  */}
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                        {/* mobile menu  */}
                        <li>
                            <NavLink to='/' className='rounded-lg text-md font-bold'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/blog' className='rounded-lg text-md font-bold'>
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' className='rounded-lg text-md font-bold'>
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className='rounded-lg text-md font-bold'>
                                About
                            </NavLink>
                        </li>
                        {/* mobile menu end */}
                        {user?.uid
                            ?
                            <>
                                <label htmlFor="my-drawer-2" className="btn btn-outline drawer-button lg:hidden">Dashboard </label>
                                <div className="drawer  drawer-mobile">
                                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                                    <div className="drawer-content  justify-center pt-12">
                                        {/* <!-- Page content here --> */}
                                        <Outlet />
                                    </div>
                                    <div className="drawer-side">
                                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                                        <ul className="menu p-4 overflow-y-auto w-80 bg-[#f2f7f5] text-base-content">
                                            {/* <!-- Sidebar content here --> */}
                                            <li><NavLink to='/dashboard/my-profile' className='text-lg'>Profile</NavLink></li>
                                            <li><NavLink to='/dashboard/my-booking' className='text-lg'>My Booking</NavLink></li>
                                            <li><NavLink to='/dashboard/my-review' className='text-lg'>My Review</NavLink></li>
                                            <li><button onClick={logOut} className='text-lg'>Log Out</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </>
                            :
                            <li>
                                <NavLink to='/login' className='rounded-lg text-md font-bold pt-3 mb-5'>
                                    Login
                                </NavLink>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;