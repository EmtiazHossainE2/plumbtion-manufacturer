import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';

const MyOrder = () => {
    const [myOrders, setMyOrders] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`)
                .then(res => res.json())
                .then(data => setMyOrders(data));
        }
    }, [user])


    return (
        <div>
            <h2 className='md:p-4 text-xl'>Hello , {user?.displayName} . You have {myOrders.length} booking</h2>
            <div className='md:p-4'>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Pipe Name</th>
                                <th>Address</th>
                                <th>Order Quantity</th>
                                <th>Total Price</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myOrders.map((order, index) =>
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{order.pipeName}</td>
                                        <td>{order.address}</td>
                                        <td>{order.orderQuantity}</td>
                                        <td>${order.totalPrice}</td>
                                        <td><button className='btn btn-warning btn-xs'>Pay</button></td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;