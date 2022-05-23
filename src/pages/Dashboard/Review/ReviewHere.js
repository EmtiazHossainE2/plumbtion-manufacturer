import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../../Firebase/firebase.init';

const ReviewHere = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()


    const handleReview = event => {
        event.preventDefault()
        const reviewInfo = {
            title: event.target.title.value,
            rating: parseInt(event.target.rating.value),
            des: event.target.des.value,
            name: user?.displayName,
            img: user?.photoURL,
            country: event.target.country.value
        }
        fetch(`https://plumbtion-manufacturer.herokuapp.com/review`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(reviewInfo),
        })
            .then(response => response.json())
            .then(data => {
                // console.log('Success:', data);
                Swal.fire({
                    text: `Your Review is added . Thank you`,
                    icon: 'success',
                    confirmButtonText: 'Okay'
                })
                navigate('/home#review')
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }


    return (
        <div className='bg-[#e4e6ed] py-12'>
            <div className="flex items-center justify-center">
                <div className="card  w-96 bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Add A Review </h2>
                        <p className='text-lg'>Your review can be inspire us to work hard and hard .</p>
                        <form onSubmit={handleReview} className='space-y-4 pt-8 '>
                            <input type="text" disabled value={user?.displayName || ''} name='userName' className="input input-bordered w-full max-w-md text-lg" />
                            <input type="text" name='title' placeholder='Add title' className="input input-bordered w-full max-w-md text-lg" required />
                            <input type="number" placeholder='Rating' name='rating' min='1' max='5' className="input input-bordered w-full max-w-md text-lg" required />
                            <input type="text" placeholder="Your Country" name='country' className="input input-bordered w-full max-w-md text-lg" required />
                            <textarea rows={2} type="text" placeholder='Your Review Text' name='des' className=" input-bordered w-full textarea max-w-md text-lg " required />
                            <input type="submit" value="Review" className="btn btn-secondary text-white w-full max-w-md text-lg" />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ReviewHere;