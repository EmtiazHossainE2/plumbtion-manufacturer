import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import demoProfile from '../../../assets/images/demoProfile.png'
import { useQuery } from 'react-query';
import Loading from '../../../components/Loading';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineFacebook } from 'react-icons/ai';
import Swal from 'sweetalert2';

const EditProfileInfo = () => {
    const { profileId } = useParams()
    const [user] = useAuthState(auth)
    const email = user?.email
    const navigate = useNavigate()

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

    // console.log(myProfile);

    const imageStorageKey = '422e61968c3878a80022fbc5968b3094';

    const handleUpdate = event => {
        event.preventDefault()
        const photoURL = event.target.image.files
        
        const image = photoURL[0];

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
                        photoURL:img,
                        displayName: event.target.displayName.value,
                        phone: event.target.phone.value,
                        country: event.target.country.value,
                        address: event.target.address.value,
                        education: event.target.education.value,
                        linkedin: event.target.linkedin.value,
                        github: event.target.github.value,
                        facebook: event.target.facebook.value
                    }
                    console.log(updateInfo);
                    fetch(`http://localhost:5000/profile/${profileId}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(updateInfo),
                    })
                        .then(response => response.json())
                        .then(data => {
                            console.log('Success:', data);
                            Swal.fire({
                                text: `Successfully update`,
                                icon: 'success',
                                confirmButtonText: 'Thank you.'
                            })
                            refetch()
                            navigate('/dashboard/my-profile')

                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });
                }

            })
    }

    return (
        <div>
            <div className='p-5 '>
                <div className="card card-side bg-base-100 shadow-xl pb-5 mb-12">
                    <div className="card-body">
                        <h2 className='text-2xl text-rose-600'>{myProfile?.displayName} ,Edit your profile </h2>
                        <hr className='my-5' />
                        <form onSubmit={handleUpdate}>
                            <div className='flex flex-col lg:flex-row'>
                                <div className='basis-2/4 p-8 '>
                                    <div className='flex flex-col '>
                                        {myProfile?.photoURL
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
                                        <input type="file" name='image' className="pt-4 cursor-pointer input-bordered w-full  text-lg" />
                                    </div>
                                </div>
                                <div className='basis-3/4 space-y-5 py-5'>
                                    <div className='space-y-2'>
                                        <h3 className='text-lg font-bold'>Display  Name</h3>
                                        <input type="text" defaultValue={myProfile?.displayName} name='displayName' className="input input-bordered w-full max-w-md text-lg" required />
                                    </div>
                                    <div className='space-y-2'>
                                        <h3 className='text-lg font-bold'>Email Address <span className='text-xs text-gray-300'>(Cannot be changed)</span></h3>
                                        <input type="email" disabled value={myProfile?.email} name='email' className="input input-bordered w-full max-w-md text-lg" />
                                    </div>
                                    <div className='space-y-2'>
                                        <h3 className='text-lg font-bold'>Phone Number</h3>
                                        <input type="number" defaultValue={myProfile?.phone} name='phone' className="input input-bordered w-full max-w-md text-lg" />
                                    </div>
                                </div>
                            </div>
                            <hr className='pt-5 pb-2' />
                            <div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-8 pb-4 gap-5">
                                    <div className='space-y-3'>
                                        <h2 className='py-3 text-lg font-bold'>Additional Information </h2>
                                        <div className='flex space-x-4 items-center'>
                                            <h4 className='text-lg'>Address: </h4>
                                            <textarea type="text" defaultValue={myProfile?.address} name='address' className="input w-full input-bordered textarea max-w-md " />
                                        </div>
                                        <div className='flex space-x-2 items-center'>
                                            <h4 className='text-lg'>Country:</h4>
                                            <textarea type="text" defaultValue={myProfile?.country} name='country' className="input w-full input-bordered textarea max-w-md " />
                                        </div>
                                        <div className='flex space-x-4 items-center'>
                                            <h4 className='text-lg'>Education:</h4>
                                            <textarea type="text" defaultValue={myProfile?.education} name='education' className="input w-full input-bordered textarea max-w-md " />
                                        </div>
                                    </div>
                                    <div className='space-y-4 lg:ml-5'>
                                        <h2 className='text-lg font-bold pt-5 lg:pt-0'>Social Link </h2>
                                        <div className='flex space-x-3 space-y-1 items-center'>
                                            <span className='text-3xl text-[#094f94]'><AiOutlineLinkedin /></span>
                                            <input type="text" defaultValue={myProfile?.linkedin} name='linkedin' className="input w-full input-bordered textarea max-w-md " />
                                        </div>
                                        <div className='flex space-x-3 space-y-1 items-center'>
                                            <span className='text-3xl text-[#0c0e10]'><AiOutlineGithub /></span>
                                            <input type="text" defaultValue={myProfile?.github} name='github' className="input w-full input-bordered textarea max-w-md " />
                                        </div>
                                        <div className='flex space-x-3 space-y-1 items-center'>
                                            <span className='text-3xl text-[#094f94]'><AiOutlineFacebook /></span>
                                            <input type="text" defaultValue={myProfile?.facebook} name='facebook' className="input w-full input-bordered textarea max-w-md " />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-5 lg:pl-5'>
                                <input type="submit" value="Update Profile" className="btn btn-success text-white capitalize  max-w-md " />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfileInfo;