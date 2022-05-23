import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import auth from '../../Firebase/firebase.init';
import useCheckAdmin from '../../hooks/useCheckAdmin';

const ToolDetail = () => {
    const { toolId } = useParams()
    const [user] = useAuthState(auth)
    const [admin] = useCheckAdmin(user)

    const { data: detail, isLoading, refetch } = useQuery('detail', () => fetch(`https://plumbtion-manufacturer.herokuapp.com/tool/${toolId}`).then(res => res.json()))



    if (isLoading) {
        return <Loading />
    }


    const handlePurchase = event => {
        event.preventDefault()

        const orderQuantity = parseInt(event.target.quantity.value)
        const totalPrice = parseInt(orderQuantity) * parseInt(detail?.price)

        if (admin) {
            Swal.fire({
                text: `Sorry ! You are unable to Order .`,
                icon: 'error',
                confirmButtonText: 'Okay'
            })
            return
        }
        else {
            if (orderQuantity < parseInt(detail?.minOrder)) {
                Swal.fire({
                    text: `Min Order is ${detail?.minOrder} pice`,
                    icon: 'error',
                    confirmButtonText: 'Okay'
                })
                return
            }
            if (orderQuantity > parseInt(detail?.available)) {
                Swal.fire({
                    text: `We don't have sufficient Pipe . Max order is ${detail?.available}`,
                    icon: 'error',
                    confirmButtonText: 'Okay'
                })
                return
            }
            else {
                const purchaseInfo = {
                    userName: user?.displayName,
                    email: user?.email,
                    pipeName: detail?.name,
                    totalPrice,
                    orderQuantity,
                    address: event.target.address.value,
                    phone: event.target.phone.value
                }
                if (purchaseInfo.address === '') {
                    Swal.fire({
                        text: "Provide Original Address",
                        icon: 'error',
                        confirmButtonText: 'Okay'
                    })
                    return
                }
                if (purchaseInfo.phone === '') {
                    Swal.fire({
                        text: 'Provide Phone Number',
                        icon: 'error',
                        confirmButtonText: 'Okay'
                    })
                    return
                }
                else {
                    // console.log(purchaseInfo);
                    fetch(`https://plumbtion-manufacturer.herokuapp.com/order`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(purchaseInfo),
                    })
                        .then(response => response.json())
                        .then(data => {
                            console.log('Success:', data);
                            Swal.fire({
                                text: `Your are order ${orderQuantity} pice pipe. We will contact you soon`,
                                icon: 'success',
                                confirmButtonText: 'Thank you.'
                            })
                            const newAvailable = {
                                available: parseInt(detail?.available) - orderQuantity,
                            }
                            const url = `https://plumbtion-manufacturer.herokuapp.com/tool/${toolId}`

                            fetch(url, {
                                method: 'PUT',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(newAvailable),
                            })
                                .then(response => response.json())
                                .then(data => {
                                    // console.log(data);
                                    refetch()

                                })
                                .catch((error) => {
                                    // console.error(error);
                                });

                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });
                }
            }
        }





    }

    return (
        <div>
            <div className='px-5 lg:px-20 py-8 lg:py-16'>
                <div className="flex flex-col lg:flex-row justify-start items-center">
                    <div className="flex-1">
                        <div>
                            <img className='lg:max-w-xl rounded-xl px-5' src={detail?.img} alt="service-man" />
                        </div>
                    </div>
                    <div className="flex-1 px-5">
                        <div className='space-y-4'>
                            <h2 className='text-2xl pt-5 lg:mt-0 capitalize'>Pipe Name : {detail?.name}</h2>
                            <h2 className='text-xl font-bold pt-5'>Features :</h2>
                            <div className=''>
                                <p>Length  : {detail?.length}</p>
                                <p>Outside Diameter : {detail?.diameter}</p>
                                <p>Wall Thickness :  {detail?.thickness}</p>
                            </div>
                            <h4 className='text-xl font-bold'>Price : ${detail?.price}<small>/p</small></h4>
                            <div className="flex flex-col lg:flex-row gap-5">
                                <p className='text-xl '>Available  : <span className='text-green-500 font-bold'>
                                    {detail?.available === 0 ? "Out of Stock" : detail?.available}
                                </span></p>
                                <p className='text-xl '>Min Order Quantity  : <span className='text-green-500 font-bold'>{detail?.minOrder}</span></p>
                            </div>
                            <p className='text-slate-500'><span className='font-bold text-lg'>Description :</span> {detail?.des}</p>
                        </div>
                    </div>
                </div>
                <hr className='bg-red-500 my-5 lg:my-16' />
                <div className='pb-8  '>
                    <div className="flex flex-col lg:flex-row justify-center space-y-12 lg:space-y-0">
                        <div className='text-center flex-1'>
                            <h3 className="font-bold text-3xl "> Place Order Here </h3>
                            <form onSubmit={handlePurchase} className='space-y-4 pt-8 '>
                                <input type="text" disabled value={user?.displayName || ''} name='userName' className="input input-bordered w-full max-w-md text-lg" />
                                <input type="email" disabled value={user?.email || ''} name='email' className="input input-bordered w-full max-w-md text-lg" />
                                <input type="number" placeholder={`Min Order ${detail?.minOrder}`}name='quantity' className="input input-bordered w-full max-w-md text-lg" required />
                                {/* <input type="number" placeholder={`Min Order ${detail?.minOrder}`}name='quantity' min={detail?.minOrder} max={detail?.available} className="input input-bordered w-full max-w-md text-lg" required /> */}
                                <textarea rows={2} type="text" placeholder='Your Address' name='address' className=" input-bordered w-full textarea max-w-md text-lg " />
                                <input type="number" placeholder="Phone Number" name='phone' className="input input-bordered w-full max-w-md text-lg" />

                                <input type="submit" disabled={detail?.available < detail?.minOrder} value="Submit" className="btn btn-secondary text-white w-full max-w-md text-lg" />
                            </form>
                        </div>
                        <div className='flex-1 '>
                            <div>
                                <h2 className='text-center text-3xl'>Our Sponsors</h2>
                                <div className='space-y-2'>
                                    <div className="card lg:max-w-sm mx-auto bg-base-100 shadow-xl">
                                        <div className="card-body items-center text-center">
                                            <img src="https://i.ibb.co/KNwgyn2/2.png" alt="sponsor 2" />
                                        </div>
                                    </div>
                                    <div className="card lg:max-w-sm mx-auto bg-base-100 shadow-xl">
                                        <div className="card-body items-center text-center">
                                            <img src="https://i.ibb.co/M5hdN6F/5.png" alt="sponsor 5" />
                                        </div>
                                    </div>
                                    <div className="card lg:max-w-sm mx-auto bg-base-100 shadow-xl">
                                        <div className="card-body items-center text-center">
                                            <img src="https://i.ibb.co/0y2W5Bb/3.png" alt="sponsor 3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ToolDetail;