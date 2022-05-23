import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading';
import auth from '../../Firebase/firebase.init';
import Order from './Order';

const MyOrder = () => {
    const [user] = useAuthState(auth)

    const { data: myOrders, isLoading, error, refetch } = useQuery('order', () => fetch(`http://localhost:5000/order?email=${user.email}`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    // console.log(myOrders);

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
                                <th>Cancel order</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myOrders.map((order, index) => <Order
                                key={index}
                                index={index}
                                order={order}
                                refetch={refetch}
                                ></Order>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;