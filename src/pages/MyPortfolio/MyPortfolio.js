import React from 'react';
import Footer from '../../components/Footer';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineFacebook } from 'react-icons/ai';
import education from '../../assets/project/edu1.png'
import handyman from '../../assets/project/handy1.png'
import camera from '../../assets/project/camera1.png'
import { Link } from 'react-router-dom';

const MyPortfolio = () => {
    return (
        <section>
            <div className='px-5 lg:px-12 bg-[#f0efef] py-5'>
                <div className='flex flex-col md:flex-row items-center justify-center gap-12 py-10'>
                    <div class="avatar">
                        <div class="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/9NgJ4Bt/My-professional-pic.jpg" alt='Emtiaz' />
                        </div>
                    </div>
                    <div >
                        <div className='text-lg space-y-2'>
                            <h3 className='text-2xl'>Emtiaz Hossain Emon</h3>
                            <p>Email : <span className='font-bold'>emtiazhossainrzs@gmail.com</span></p>
                            <p>Phone : 01568194230 </p>
                        </div>
                        <div className='flex pt-5 gap-5'>
                            <a href="https://www.linkedin.com/in/emtiazhossaine/" target="_blank" rel="noopener noreferrer" className='flex gap-4 text-lg hover:text-[#067aee]'>
                                <span className='text-3xl text-[#094f94]'><AiOutlineLinkedin /></span>
                            </a>

                            <a href="https://github.com/EmtiazHossainE2" target="_blank" rel="noopener noreferrer" className='flex gap-4 text-lg hover:text-[#2a8ad8]'>
                                <span className='text-3xl text-[#0c0e10]'><AiOutlineGithub /></span>
                            </a>
                            <a href='https://www.facebook.com/EmtiazHossainE2' target="_blank" rel="noopener noreferrer" className='flex gap-4 text-lg hover:text-[#067aee]'>
                                <span className='text-3xl text-[#094f94]'><AiOutlineFacebook /></span>
                            </a>

                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div class="card bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title"> Education Background </h2>
                            <div className='py-3 '>
                                <h4 className='font-bold'>SSC 2018 (science )</h4>
                                <p>Rangpur Zilla School , Rangpur</p>
                            </div>
                            <div className='py-3 '>
                                <h4 className='font-bold'>HSC 2020 (science )</h4>
                                <p>Carmichael Collegiate High School & College , Rangpur</p>
                            </div>
                            <div className='py-3 '>
                                <h4 className='font-bold'>Present </h4>
                                <p>After getting auto pass in HSC I'm not continue my study . Now try to getting scholarship </p>
                            </div>
                        </div>
                    </div>
                    <div class="card bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title"> Technologies and Skills </h2>
                            <div className='py-2 '>
                                <h4 className='font-bold'>Expert:</h4>
                                <p>HTML 5, CSS 3, Tailwind CSS , Bootstrap 5, JavaScript (ES6), React.Js, React-Bootstrap,React-router, Authentication.</p>
                            </div>
                            <div className='py-2 '>
                                <h4 className='font-bold'>Comfortable:</h4>
                                <p>Mongodb , Express , Node , React Query , Axios .</p>
                            </div>
                            <div className='py-2 '>
                                <h4 className='font-bold'>Familiar:</h4>
                                <p> Mailchimp , Payment Gateway ,Material Ui , WordPress .</p>
                            </div>
                            <div className='py-2 '>
                                <h4 className='font-bold'>Tools & Others:</h4>
                                <p>Git, Github,VScode, Figma, Firebase, Netlify , Chrome Dev Tools  .</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-8'>
                    <h2 className='text-center py-12 text-3xl'>Recent Project</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="card lg:max-w-lg bg-base-100 ">
                        <figure>
                            <a href="https://i.ibb.co/VWV24Nb/camera.jpg" target="_blank" rel="noopener noreferrer">
                                <img className='w-full' src={camera} alt="digital-camera-demo-site" />
                            </a>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Digital Camera Warehouse</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 py-2">
                                <button className='btn btn-outline btn-xs btn-primary'>React </button>
                                <button className='btn btn-outline btn-xs btn-primary'>Heroku </button>
                                <button className='btn btn-outline btn-xs btn-primary'>Firebase</button>
                                <button className='btn btn-outline btn-xs btn-primary'>Node</button>
                                <button className='btn btn-outline btn-xs btn-primary'>Mongodb</button>
                                <button className='btn btn-outline btn-xs btn-primary'>Express</button>
                            </div>
                            <div className="flex  justify-between">
                                <a href='https://github.com/EmtiazHossainE2/digital-camera-warehouse' target="_blank" rel="noopener noreferrer" >
                                    <button className='btn mt-3  btn-sm '>
                                        <div className="flex justify-center items-center">
                                            <p className='text-white capitalize'> Source Code</p>
                                        </div>
                                    </button>
                                </a>
                                <a href='https://digital-camera-warehouse.web.app/' target="_blank" rel="noopener noreferrer" >
                                    <button className='btn mt-3 btn-sm '>
                                        <div className="flex justify-center items-center">
                                            <p className='text-white capitalize'> Live Link</p>
                                        </div>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card lg:max-w-lg bg-base-100 ">
                        <figure>
                            <a href="https://i.ibb.co/fXJMxgK/handyman.jpg" target="_blank" rel="noopener noreferrer">
                                <img className='w-full' src={handyman} alt="handy-man-demo-site" />
                            </a>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Handy Man</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 py-2 ">
                                <button className='btn btn-outline btn-xs btn-primary'>Tailwind</button>
                                <button className='btn btn-outline btn-xs btn-primary'>React</button>
                                <button className='btn btn-outline btn-xs btn-primary'>Node</button>
                                <button className='btn btn-outline btn-xs btn-primary'>Mongodb</button>
                                <button className='btn btn-outline btn-xs btn-primary'>Express</button>
                                <button className='btn btn-outline btn-xs btn-primary'>Heroku</button>
                            </div>
                            <div className="flex justify-between">
                                <a href='https://github.com/EmtiazHossainE2/handy-man-client' target="_blank" rel="noopener noreferrer" >
                                    <button className='btn mt-3  btn-sm '>
                                        <div className="flex justify-center items-center">
                                            <p className='text-white capitalize'> Source Code</p>
                                        </div>
                                    </button>
                                </a>
                                <a href='https://handy-man.web.app/' target="_blank" rel="noopener noreferrer" >
                                    <button className='btn mt-3 btn-sm '>
                                        <div className="flex justify-center items-center">
                                            <p className='text-white capitalize'> Live Link</p>
                                        </div>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card lg:max-w-lg bg-base-100 ">
                        <figure>
                            <a href="https://i.ibb.co/5xCrbPJ/edu.png" target="_blank" rel="noopener noreferrer">
                                <img className='w-full' src={education} alt="education-demo-site" />
                            </a>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Education Hub</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 py-2">
                                <button className='btn btn-outline btn-xs btn-primary'>React</button>
                                <button className='btn btn-outline btn-xs btn-primary'>Bootstrap 5</button>
                                <button className='btn btn-outline btn-xs btn-primary'>Firebase</button>
                                <button className='btn btn-outline btn-xs btn-primary'>Animation</button>
                                <button className='btn btn-outline btn-xs btn-primary'>Axios</button>
                            </div>
                            <div className="flex  justify-between">
                                <a href='https://github.com/EmtiazHossainE2/education-hub' target="_blank" rel="noopener noreferrer" >
                                    <button className='btn mt-3  btn-sm '>
                                        <div className="flex justify-center items-center">
                                            <p className='text-white capitalize'> Source Code</p>
                                        </div>
                                    </button>
                                </a>
                                <a href='https://education-hub-101.web.app/' target="_blank" rel="noopener noreferrer" >
                                    <button className='btn mt-3 btn-sm '>
                                        <div className="flex justify-center items-center">
                                            <p className='text-white capitalize'> Live Link</p>
                                        </div>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default MyPortfolio;