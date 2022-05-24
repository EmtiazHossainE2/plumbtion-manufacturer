import React from 'react';
import auth from '../../../Firebase/firebase.init';
import useCheckAdmin from '../../../hooks/useCheckAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../../components/Loading';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import demoProfile from '../../../assets/images/demoProfile.png'
import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineFacebook } from 'react-icons/ai';



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
                                    {myProfile?.phone ?
                                        <>
                                            <p className=''>{myProfile?.phone}</p>
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-8 py-4 gap-5">
                        <div className='space-y-3'>
                            <h2 className='py-3 text-lg font-bold'>Additional Information </h2>
                            <div className='flex space-x-4'>
                                <h4 className='text-lg'>Address : </h4>
                                <div>
                                    {myProfile?.address ?
                                        <>
                                            <p className='capitalize'> {myProfile?.address}</p>
                                        </>
                                        :
                                        <p className=''> Update please </p>
                                    }
                                </div>
                            </div>
                            <div className='flex space-x-4'>
                                <h4 className='text-lg'>Country : </h4>
                                <div>
                                    {myProfile?.location ?
                                        <>
                                            <p className='capitalize'> {myProfile?.country}</p>
                                        </>
                                        :
                                        <p className=''> Update please</p>
                                    }
                                </div>
                            </div>
                            <div className='flex space-x-4'>
                                <h4 className='text-lg'>Education  : </h4>
                                <div>
                                    {myProfile?.education ?
                                        <>
                                            <p className='capitalize'> {myProfile?.education}</p>
                                        </>
                                        :
                                        <p className=''> Update please</p>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='space-y-4 '>
                            <h2 className='text-lg font-bold pt-5 lg:pt-0'>Social Link </h2>
                            <a href={myProfile?.linkedin} target="_blank" rel="noopener noreferrer" className='flex gap-4 text-lg hover:text-[#067aee]'>
                                <span className='text-3xl text-[#094f94]'><AiOutlineLinkedin /></span>
                                Linkedin</a>

                            <a href={myProfile?.github} target="_blank" rel="noopener noreferrer" className='flex gap-4 text-lg hover:text-[#2a8ad8]'>
                                <span className='text-3xl text-[#0c0e10]'><AiOutlineGithub /></span>
                                Github</a>
                            <a href={myProfile?.facebook} target="_blank" rel="noopener noreferrer" className='flex gap-4 text-lg hover:text-[#067aee]'>
                                <span className='text-3xl text-[#094f94]'><AiOutlineFacebook /></span>
                                Facebook</a>

                        </div>
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