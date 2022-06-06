import React from 'react';
import Swal from 'sweetalert2';
import demoProfile from '../../../assets/images/demoProfile.png'

const ManageReviewRow = ({ review, index, refetch }) => {
    const { _id , name, country ,rating } = review
    // console.log(review);

    const handleDelete = () => {
        const url = `https://plumbtion-manufacturer.herokuapp.com/review/${_id}`;
        Swal.fire({
            text: `Are you sure to delete  ?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(url, {
                    method: 'DELETE',
                    headers: {
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    },
                }).then(data => {
                    // console.log(data);
                    if (data.status) {
                        Swal.fire({
                            text: `Successfully Delete `,
                            icon: 'success',
                            confirmButtonText: 'Okay'
                        })
                        refetch()
                    }
                })
            }
        })

    }


    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                {review?.img
                    ? (
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                <img src={review?.img} alt="User Profile" />
                            </div>
                        </div>
                    ) : (
                        <div className="avatar">
                            <div className="w-12 rounded">
                                <img src={demoProfile} alt="Demo Profile" />
                            </div>
                        </div>
                    )
                }
            </td>
            <td>{name}</td>
            <td>{country}</td>
            <td>{rating}</td>
            <td><button onClick={handleDelete} className='btn btn-xs btn-error'>Delete</button></td>
        </tr>
    );
};

export default ManageReviewRow;