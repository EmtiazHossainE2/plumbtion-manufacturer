import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Order = ({ order, index, refetch }) => {
    const { email, paid } = order
    // console.log(order);

    const handleCancel = () => {
        const url = `https://plumbtion-manufacturer.herokuapp.com/order/${email}`;
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
            <td>{order.orderQuantity} <small>/ps</small></td>
            <td>${order.totalPrice}</td>
            <td>
                {(order.totalPrice && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-warning'>pay</button></Link>}
                {(order?.paid) &&
                    <div>
                        <p><span className='text-success'>Paid</span></p>
                        <p>TId: <span className='text-success'>{order.transactionId.slice(0, 10) + '...'}</span></p>
                    </div>}
            </td>
            <td>
                {order?.process
                    ? <p className='text-success font-bold'>Shipped</p>
                    : <p className='text-red-400 font-bold'>Pending</p>
                }
            </td>
            <td>
                {paid
                    ? <button disabled className='btn btn-error text-white btn-xs font-bold'>Cancel Order</button>
                    : <button onClick={handleCancel} className='btn btn-error text-white btn-xs font-bold'>Cancel Order</button>
                }
            </td>
        </tr>
    );
};

export default Order;