import React from 'react';
import Swal from 'sweetalert2';

const Order = ({ order, index,refetch }) => {
    const { email} = order

    const handleCancel = () => {
        const url = `http://localhost:5000/order/${email}`;
        Swal.fire({
            text: `Are you sure to cancel  ?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel",
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
                            text: `Successfully Cancel `,
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
        <tr >
            <th>{index + 1}</th>
            <td>{order.pipeName}</td>
            <td>{order.address}</td>
            <td>{order.orderQuantity}</td>
            <td>${order.totalPrice}</td>
            <td><button className='btn btn-warning btn-xs'>Pay</button></td>
            <td><button onClick={handleCancel} className='btn btn-error text-white btn-xs font-bold'>Cancel Order</button></td>
        </tr>
    );
};

export default Order;