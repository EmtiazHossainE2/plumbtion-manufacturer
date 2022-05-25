import React from 'react';
import Footer from '../../components/Footer';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineFacebook } from 'react-icons/ai';

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
                            <p></p>
                        </div>
                    </div>
                    <div class="card bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title"> Technologies and Skills </h2>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default MyPortfolio;