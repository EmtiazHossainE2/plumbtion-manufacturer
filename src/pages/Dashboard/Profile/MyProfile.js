import React from 'react';
import auth from '../../../Firebase/firebase.init';
import useCheckAdmin from '../../../hooks/useCheckAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../../components/Loading';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import demoProfile from '../../../assets/images/demoProfile.png'
import { BiEditAlt } from 'react-icons/bi';


const MyProfile = () => {
    const [user] = useAuthState(auth)
    const [admin] = useCheckAdmin(user)
    const email = user?.email

    const { data: myProfile, isLoading, error, refetch } = useQuery('profile', () => fetch(`http://localhost:5000/profile/${email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
    })
        .then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    console.log(myProfile);



    return (
        <div className='md:p-4 lg:pt-0'>
            <div className="card card-side bg-base-100 shadow-xl pb-5 mb-12">
                <div className="card-body">
                    <div className='flex justify-between px-4'>
                        <h2 className='text-2xl font-bold py-5'>My Profile </h2>
                        <Link to={`/dashboard/my-profile/${myProfile._id}`} className='text-lg text-red-400 py-5'>
                            <div className="flex justify-center items-center">
                                <span className='text-lg'><BiEditAlt /></span>
                                <p> Edit</p>
                            </div>
                        </Link>
                    </div>
                    <hr />
                    <div className='flex flex-col lg:flex-row'>
                        <div className='basis-2/4 p-8 '>
                            <div className='flex '>
                                {user?.photoURL
                                    ?
                                    <div className="avatar">
                                        <div className="w-36 rounded-full">
                                            <img src={myProfile?.photoURL} alt="User" />
                                        </div>
                                    </div>
                                    :
                                    <div className="avatar">
                                        <div className="w-36 rounded-full">
                                            <img src={demoProfile} alt="Demo" />
                                        </div>
                                    </div>
                                }
                            </div>
                            <button className='btn mt-5 btn-primary btn-sm '>
                                <Link to={`/dashboard/my-profile/${myProfile._id}`} >
                                    <div className="flex justify-center items-center">
                                        <span className='text-lg'><BiEditAlt /></span>
                                        <p className='text-white capitalize'> Edit profile</p>
                                    </div>
                                </Link>
                            </button>
                        </div>
                        <div className='basis-3/4 space-y-5 py-5'>
                            <div>
                                <h3 className='text-lg font-bold'>User Name</h3>
                                <p>{myProfile?.displayName}</p>
                            </div>
                            <div>
                                <h3 className='text-lg font-bold'>Email Address</h3>
                                <p>{myProfile?.email}</p>
                            </div>
                            <div>
                                <h3 className='text-lg font-bold'>Phone Number</h3>
                                <div>
                                    {myProfile?.phoneNumber ?
                                        <>
                                            <p className=''>{user?.phoneNumber}</p>
                                        </>
                                        :
                                        <p className=''>Update please</p>
                                    }
                                </div>
                            </div>
                            <div>
                                <h3 className='text-lg font-bold'>Role</h3>
                                <div>
                                    {myProfile?.role ?
                                        <>
                                            <p className='capitalize'>{myProfile?.role}</p>
                                        </>
                                        :
                                        <p className=''>User</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <h2>Additional Information </h2>
                    </div>
                    <hr />
                    <div>
                        <h2 className='font-bold text-2xl py-5'>Activity</h2>
                        <div className="overflow-x-auto ">
                            <table className="table w-full ">
                                <thead>
                                    <tr>
                                        <th>Creation Time</th>
                                        <th>Last Login</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr >
                                        <th>{myProfile?.creationTime}</th>
                                        <th>{myProfile?.lastLogin}</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;