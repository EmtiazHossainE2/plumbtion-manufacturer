import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import Ratings from './Ratings';

const ReviewSection = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://plumbtion-manufacturer.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const displayReviews = [...reviews].reverse()
    // console.log(displayReviews);

    return (
        <div className='bg-[#F5F7FF]'>
            <section className=" py-16 container mx-auto" id='review'>
                <div>
                    <h2 className='text-center text-4xl font-bold  pb-8 pt-5'>People About Plumbtion </h2>
                    <p className='text-lg px-5 lg:px-28 mb-12'>We have decades of experience meeting the stringent regulations and certifications for the automotive, aerospace and medical device industries, which serve as benchmarks for all of the products we manufacture.</p>
                </div>
                <Swiper
                    breakpoints={{
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 2,
                            width: 768,
                        },
                        1224: {
                            slidesPerView: 2,
                            width: 1224,
                        },
                    }}
                    slidesPerView={1}
                    spaceBetween={10}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {displayReviews.map((r, index) =>
                        <SwiperSlide key={index} className='pb-5'>
                            <div className="flex items-center justify-center cursor-pointer">
                                <div className="card lg:max-w-xl bg-base-100 shadow-xl mb-8 min-h-[45vh] lg:min-h-[50vh] ">
                                    <div className="card-body ">
                                        <div className='flex gap-5 '>
                                            <div className="avatar">
                                                <div className="w-20 rounded-full">
                                                    <img src={r?.img} alt='man1' />
                                                </div>
                                            </div>
                                            <div className='flex items-center justify-center'>
                                                <div>
                                                    <h4 className='text-lg font-bold'>{r?.name}</h4>
                                                    <p className='text-md'>{r?.country}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            {r?.rating && <Ratings ratings={r?.rating} ></Ratings>}
                                        </div>
                                        <h2 className="card-title capitalize">{r?.title}</h2>
                                        <p> {r?.des.slice(0,240) }</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper >
            </section >
        </div>
    );
};

export default ReviewSection;