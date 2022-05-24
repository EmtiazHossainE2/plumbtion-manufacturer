import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../../components/Loading';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe('pk_test_51L14pjDEsxnXfJbTiZgmC0dz3uHctqNriljNuVFrVk6oTpM7wsc9tHAymdCZlelQzHvDWCKD1yfU0LY6Ccm13tpi00ExQ2fXbe')

const Payment = () => {
    const { orderId } = useParams();

    const { data: myOrder, isLoading } = useQuery(['booking', orderId], () => fetch(`https://plumbtion-manufacturer.herokuapp.com/order/${orderId}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading/>
    }
    return (
        <div>
            <div className='text-center py-5'>
                <p className='text-2xl'>Payment for <span className='text-lg font-bold text-success'>{myOrder?.pipeName}</span></p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center  px-5">
                <div className="flex-1">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body space-y-3">
                            <h2 className="card-title">Hello! {myOrder?.userName}</h2>
                            <p>You have to pay <span className='font-bold text-lg text-secondary'>$ {myOrder?.totalPrice}</span></p>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="card w-96 bg-base-100 shadow-xl pt-5">
                        <div className="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckOutForm myOrder={myOrder}/>
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;