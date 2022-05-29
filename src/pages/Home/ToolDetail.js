import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import {  useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import PageTitle from '../../components/PageTitle';
import auth from '../../Firebase/firebase.init';
import useCheckAdmin from '../../hooks/useCheckAdmin';

const ToolDetail = () => {
    const { toolId } = useParams()
    const [user] = useAuthState(auth)
    const [admin] = useCheckAdmin(user)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: detail, isLoading, refetch } = useQuery('detail', () => fetch(`https://plumbtion-manufacturer.herokuapp.com/tool/${toolId}`).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    const onSubmit = async data => {
        // console.log(data);
        if (admin) {
            Swal.fire({
                text: `Sorry,Admin ! You are unable to Order .`,
                icon: 'error',
                confirmButtonText: 'Okay'
            })
            return
        }
        else {
            const purchaseInfo = {
                userName: user.displayName,
                email: user.email,
                orderQuantity: parseInt(data.quantity),
                address: data.address,
                phone: data.phone,
                pipeName: detail?.name,
                totalPrice: parseInt(data.quantity) * parseInt(detail?.price)

            }
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
                    Swal.fire({
                        text: `Your are order ${purchaseInfo.orderQuantity} /ps pipe. We will contact you soon`,
                        icon: 'success',
                        confirmButtonText: 'Thank you.'
                    })
                    const newAvailable = {
                        available: parseInt(detail?.available) - purchaseInfo.orderQuantity,
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
                            reset()

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
    // console.log(errors);

    return (
        <div>
            <PageTitle title="Detail - "></PageTitle>
            {/* <PageTitle title="Detail - ${detail?.name}"></PageTitle> */}

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

                            <div className="card lg:max-w-lg  bg-base-100 shadow-xl ">
                                <div className="card-body ">
                                    {parseInt(detail?.available) < parseInt(detail?.minOrder)
                                        ?
                                        <input type="submit" disabled value="We Dont't have Sufficient Pipe . Try another day" className="btn btn-secondary text-white w-full max-w-md " />
                                        :
                                        <form onSubmit={handleSubmit(onSubmit)} className="pt-8 space-y-3 flex flex-col justify-center items-center">
                                            <div className="form-control w-full max-w-xs">
                                                <input
                                                    type="text"
                                                    disabled
                                                    value={user?.displayName}
                                                    className="input input-bordered w-full max-w-xs text-lg "

                                                />
                                            </div>

                                            <div className="form-control w-full max-w-xs ">
                                                <input
                                                    type="email"
                                                    disabled
                                                    value={user?.email}
                                                    className="input input-bordered w-full max-w-xs text-lg"

                                                />
                                            </div>
                                            <div className="form-control w-full max-w-xs">
                                                <input
                                                    type="number"
                                                    placeholder={`Min order is ${detail?.minOrder}`}
                                                    className="input input-bordered w-full max-w-xs text-lg "
                                                    {...register("quantity", {
                                                        required: true,
                                                        min: {
                                                            value: parseInt(detail.minOrder)
                                                        },
                                                        max: {
                                                            value: parseInt(detail.available)
                                                        }
                                                    })}
                                                />
                                                <p className='text-red-500 flex justify-start py-2'>
                                                    {errors.quantity?.type === 'required' && "Quantity is required"}
                                                    {errors.quantity?.type === 'min' && `Min order is ${detail.minOrder}`}
                                                    {errors.quantity?.type === 'max' && `Max order is ${detail?.available}`}
                                                </p>
                                            </div>
                                            <div className="form-control w-full max-w-xs ">
                                                <textarea
                                                    type="text"
                                                    placeholder='Shipping Address'
                                                    className=" textarea textarea-bordered w-full max-w-xs text-lg"
                                                    {...register("address", {
                                                        required: true
                                                    })}
                                                />
                                                <p className='text-red-500 flex justify-start py-2'>
                                                    {errors.address?.type === 'required' && 'Shipping Address is Required'}
                                                </p>
                                            </div>
                                            <div className="form-control w-full max-w-xs">
                                                <input
                                                    type="number"
                                                    placeholder="Phone Number"
                                                    className="input input-bordered w-full max-w-xs text-lg"
                                                    {...register("phone", {
                                                        required: true
                                                    })}
                                                />
                                                <p className='text-red-500 flex justify-start py-2'>
                                                    {errors.phone?.type === 'required' && 'Phone is Required'}
                                                </p>
                                            </div>

                                            <input type="submit" disabled={errors.quantity ? true : false} value="Submit" className="btn btn-secondary text-white disabled:bg-[#b5b3b3] disabled:text-white disabled:cursor-not-allowed text-lg" />

                                        </form>
                                    }

                                </div>
                            </div>



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