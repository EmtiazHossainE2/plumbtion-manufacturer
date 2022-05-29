import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loading from '../../../components/Loading';
import PageTitle from '../../../components/PageTitle';
import auth from '../../../Firebase/firebase.init';
import ManageOrderRow from './ManageOrderRow';

const ManageOrders = () => {
    const navigate = useNavigate()

    const { data: orders, isLoading,  refetch } = useQuery('order', () => fetch(`https://plumbtion-manufacturer.herokuapp.com/all-order`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
    })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                signOut(auth)
                localStorage.removeItem('accessToken')
                Swal.fire({
                    text: 'Session expired sign in again . .',
                    icon: 'error',
                    confirmButtonText: 'Okay'
                })
                navigate('/login')
            }
            return res.json()
        }))

    if (isLoading) {
        return <Loading />
    }

    // console.log(myOrders);

    return (
        <div>
            <PageTitle title="Manage Orders -"></PageTitle>
            <h2 className='md:p-4 text-xl'>Manage All Orders </h2>
            <div className='md:p-4'>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Pipe Name</th>
                                <th>Client Email</th>
                                <th>Order </th>
                                <th>Total Price</th>
                                <th> Status</th>
                                <th>Process</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => <ManageOrderRow
                                    key={index}
                                    index={index}
                                    order={order}
                                    refetch={refetch}
                                ></ManageOrderRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;