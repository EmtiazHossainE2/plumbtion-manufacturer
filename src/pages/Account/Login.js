import React, { useEffect } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import auth from '../../Firebase/firebase.init';

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit, getValues } = useForm();
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);


    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    //user
    useEffect(() => {
        if (user || googleUser) {
            navigate(from, { replace: true });
            toast.success(`Welcome to Plumbtion Manufacture `, { id: 'success' })
        }
    }, [user, googleUser, from, navigate])

    //loading
    if (loading || googleLoading || sending) {
        return <Loading />
    }

    //error 
    let signInError;
    if (error) {
        signInError = <p className='text-red-500 text-lg'>Could not find user</p>
    }
    // googleError 
    let gError;
    if (googleError) {
        gError = <p className='text-red-500 text-lg'>Pop up is Closed by user</p>
    }

    //login 
    const onSubmit = data => {
        console.log(data);
        // signInWithEmailAndPassword(data.email, data.password)
    };

    // reset password 
    const forgetPassword = async () => {
        const email = getValues('email')
        console.log(email);
        if (email == '') {
            return Swal.fire({
                text: `Email is required`,
                icon: 'warning',
                confirmButtonText: 'Okay'
            })
        }
        else if (email) {
            await sendPasswordResetEmail(email);
            Swal.fire({
                text: `An email send   .Check Email`,
                icon: 'success',
                confirmButtonText: 'Okay'
            })
        }
        if (resetError) {
            toast.error(`Email is incorrect `, { id: "errorSend" });
        }
    }


    return (
        <section>
            <div className='flex flex-col lg:flex-row py-8 lg:h-[100vh] items-center justify-evenly gap-12 '>
                <div>
                    <img className='lg:max-w-md' src="https://web.programming-hero.com/static/media/man-with-laptop.331dfa07.png" alt="login img" />
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <div className="card-body border-2 lg:border-none">
                        <h2 className="text-center text-3xl">Log In</h2>
                        {signInError}
                        {gError}
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text text-lg">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="input input-bordered w-full max-w-xs text-lg"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is Required'
                                            },
                                            pattern: {
                                                value: /\S+@\S+\.\S+/,
                                                message: 'Please Provide a valid Email'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 text-[15px]">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 text-[15px]">{errors.email.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text text-lg">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="input input-bordered w-full max-w-xs text-lg"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'Password is Required'
                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'Password Must be 6 characters or more'
                                            },
                                            pattern: {
                                                value: /(?=.*[!@#$%^&*])/,
                                                message: 'At least one special character'
                                            }
                                        })}
                                    />
                                    <label className="label ">
                                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 text-[15px]">{errors.password.message}</span>}
                                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500 text-[15px]">{errors.password.message}</span>}
                                        {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500 text-[15px]">{errors.password.message}</span>}
                                    </label>
                                </div>
                                <label className="label pb-2">
                                    <p onClick={forgetPassword} className="label-text-alt font-bold text-red-400 text-[15px] link link-hover">Forgot password?</p>
                                </label>
                                <input className='btn btn-success w-full max-w-xs text-white' type="submit" value="Login" />
                            </form>
                            <p className='toggle-page py-2 '>
                                New to Our Manufacture ?{" "}
                                <span className='cursor-pointer text-blue-600' onClick={() => navigate("/signup")}>Create Account</span>
                            </p>
                        </div>

                        <div className="divider">OR</div>
                        <button onClick={() => signInWithGoogle()} className="btn btn-outline uppercase text-lg ">Continue With Google</button>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Login;