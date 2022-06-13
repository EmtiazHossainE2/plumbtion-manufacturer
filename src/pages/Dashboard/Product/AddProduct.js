import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import PageTitle from '../../../components/PageTitle';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imgbbApiKey = '422e61968c3878a80022fbc5968b3094';

    const onSubmit = async data => {
        const image = data.image[0];
        // console.log(image);
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                // console.log('success', result);
                if (result.success) {
                    const img = result.data.url
                    const pipeInfo = {
                        name: data.name,
                        price: data.price,
                        minOrder: data.minOrder,
                        available: data.available,
                        rating: data.rating,
                        diameter: data.diameter,
                        thickness: data.thickness,
                        length: data.length,
                        img: img,
                        des: data.des,
                    }
                    console.log(pipeInfo);
                    fetch('https://plumbtion-manufacturer.herokuapp.com/tool', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(pipeInfo)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            // console.log(inserted);
                            if (inserted.insertedId) {
                                Swal.fire({
                                    text: `Pipe Added Success`,
                                    icon: 'success',
                                    confirmButtonText: 'Thank you.'
                                })
                                reset();
                            }
                            else {
                                Swal.fire({
                                    text: `Failed to add pipe`,
                                    icon: 'error',
                                    confirmButtonText: 'Try Again'
                                })
                            }
                        })
                }

            })
    }


    return (
        <div className=' pt-5 pb-12'>
            <PageTitle title="Add Product -"></PageTitle>
            <div className="mx-5">
                <div className="card  bg-base-100 shadow-xl">
                    <div className="card-body text-center">
                        <h2 className="card-title py-5 lg:ml-12 font-bold">Add A Product </h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="">
                            <div className="flex flex-col md:flex-row justify-evenly">
                                <div className="form-control w-full max-w-xs">
                                    <input
                                        type="text"
                                        placeholder="Pipe Name"
                                        className="input input-bordered w-full max-w-xs  "
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: 'Name is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <input
                                        type="number"
                                        placeholder="Price per pice"
                                        className="input input-bordered w-full max-w-xs  "
                                        {...register("price", {
                                            required: {
                                                value: true,
                                                message: 'Price is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-around lg:px-10">
                                <div className="form-control  max-w-xs">
                                    <input
                                        type="number"
                                        placeholder="Min Order Quantity"
                                        className="input input-bordered w-full max-w-xs  "
                                        {...register("minOrder", {
                                            required: {
                                                value: true,
                                                message: 'Min Order is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minOrder.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control  max-w-xs">
                                    <input
                                        type="number"
                                        placeholder="Total Available"
                                        className="input input-bordered w-full max-w-xs  "
                                        {...register("available", {
                                            required: {
                                                value: true,
                                                message: 'Total available quantity is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.available.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control lg:w-[200px] max-w-xs">
                                    <input
                                        type="number"
                                        placeholder="Rating"
                                        min='1' max='5'
                                        className="input input-bordered w-full max-w-xs  "
                                        {...register("rating", {
                                            required: {
                                                value: true,
                                                message: 'Rating is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-around lg:px-10">
                                <div className="form-control  max-w-xs">
                                    <input
                                        type="text"
                                        placeholder="Outside Diameter"
                                        className="input input-bordered w-full max-w-xs  "
                                        {...register("diameter", {
                                            required: {
                                                value: true,
                                                message: 'Outside Diameter is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.diameter.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control  max-w-xs">
                                    <input
                                        type="text"
                                        placeholder="Wall Thickness"
                                        className="input input-bordered w-full max-w-xs  "
                                        {...register("thickness", {
                                            required: {
                                                value: true,
                                                message: 'Wall Thickness quantity is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.thickness.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control  max-w-xs">
                                    <input
                                        type="text"
                                        placeholder="Length "
                                        className="input input-bordered w-full max-w-xs  "
                                        {...register("length", {
                                            required: {
                                                value: true,
                                                message: 'Length  quantity is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.length.message}</span>}
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-evenly">
                                <div className="form-control w-full max-w-xs ">
                                    <input
                                        type="file"
                                        className="input input-bordered w-full max-w-xs pt-[8px] "
                                        {...register("image", {
                                            required: {
                                                value: true,
                                                message: 'Image is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <textarea
                                        type="text"
                                        placeholder="Add Pipe Description"
                                        className="textarea textarea-bordered w-full max-w-xs  "
                                        {...register("des", {
                                            required: {
                                                value: true,
                                                message: 'Description is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.des.message}</span>}
                                    </label>
                                </div>
                            </div>
                            <br />
                            <input className='btn w-full max-w-xs text-lg text-white' type="submit" value="Add Product" />
                        </form>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddProduct;