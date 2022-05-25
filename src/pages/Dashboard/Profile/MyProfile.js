import React from 'react';
import auth from '../../../Firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../../components/Loading';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import demoProfile from '../../../assets/images/demoProfile.png'
import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineFacebook } from 'react-icons/ai';
import { useForm } from 'react-hook-form';



const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth)
    const email = user?.email

    const { data: myProfile, isLoading, refetch } = useQuery('profile', () => fetch(`https://plumbtion-manufacturer.herokuapp.com/profile/${email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
    })
        .then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    // console.log(myProfile);

    const imageStorageKey = '422e61968c3878a80022fbc5968b3094';

    const onSubmit = data => {

        const image = data.image[0];

        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url
                    const updateInfo = {
                        photoURL: img
                    }
                    // console.log(updateInfo);
                    fetch(`https://plumbtion-manufacturer.herokuapp.com/my-image/${myProfile._id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(updateInfo),
                    })
                        .then(response => response.json())
                        .then(data => {
                            // console.log(data);
                            
                            reset();
                            refetch()

                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });
                }

            })
    }


    return (
        <div className='md:p-4 lg:pt-0'>
            <div className="card card-side bg-base-100 shadow-xl pb-5 mb-12">
                <div className="card-body">
                    <div className='flex justify-between px-4'>
                        <h2 className='text-2xl font-bold py-5'>My Profile </h2>
                        <button className='btn mt-5 btn-primary btn-sm '>
                            <Link to={`/dashboard/my-profile/${myProfile._id}`} >
                                <div className="flex justify-center items-center">
                                    <span className='text-lg'><BiEditAlt /></span>
                                    <p className='text-white capitalize'> Edit profile</p>
                                </div>
                            </Link>
                        </button>
                    </div>
                    <hr />
                    <div className='flex flex-col lg:flex-row'>
                        <div className='basis-2/4 p-8 '>
                            <div className='flex '>
                                {myProfile?.photoURL
                                    ?
                                    <div className="avatar">
                                        <div className="w-48 rounded-full">
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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control w-full max-w-xs">
                                    <input
                                        type="file"
                                        className="pt-4 cursor-pointer input-bordered w-full  text-lg"
                                        {...register("image", {
                                            required: {
                                                value: true,
                                                message: 'Image is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                    </label>
                                </div>
                                <button type='submit' className='btn mt-3 btn-info btn-sm '>
                                    <div className="flex justify-center items-center">
                                        <p className='text-white capitalize'> Upload Image</p>
                                    </div>
                                </button>
                            </form>
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