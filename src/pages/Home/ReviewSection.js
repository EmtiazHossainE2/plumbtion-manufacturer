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
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const displayReviews = [...reviews].reverse().slice(0, 6)
    // console.log(displayReviews);
    const numberOne = displayReviews[0]
    const numberTwo = displayReviews[1]
    const numberThree = displayReviews[2]
    const numberFour = displayReviews[3]
    const numberFive = displayReviews[4]
    const numberSix = displayReviews[5]

    return (
        <section className="bg-[#F5F7FF] py-16 lg:px-12">
            <div>
                <h2 className='text-center text-4xl font-bold  pb-8 pt-5'>People About Plumbtion </h2>
                <p className='text-lg lg:px-28 mb-12'>We have decades of experience meeting the stringent regulations and certifications for the automotive, aerospace and medical device industries, which serve as benchmarks for all of the products we manufacture.</p>
            </div>

            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='pb-5'>
                    <div className="flex items-center justify-center cursor-pointer">
                        <div class="card lg:max-w-lg bg-base-100 shadow-xl mb-8 ">
                            <div class="card-body ">
                                <h2 class="card-title capitalize">{numberOne?.title}</h2>
                                <p>
                                    {numberOne?.rating && <Ratings ratings={numberOne?.rating} ></Ratings>}
                                </p>
                                <p> {numberOne?.des.slice(0, 180) + '...'}</p>
                                <div className='flex gap-5 pt-5'>
                                    <div class="avatar">
                                        <div class="w-20 rounded-full">
                                            <img src={numberOne?.img} alt='man1' />
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <div>
                                            <h4 className='text-lg font-bold'>{numberOne?.name}</h4>
                                            <p className='text-md'>{numberOne?.country}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='pb-5'>
                    <div className="flex items-center justify-center cursor-pointer">
                        <div class="card lg:max-w-lg bg-base-100 shadow-xl mb-8 ">
                            <div class="card-body ">
                                <h2 class="card-title capitalize">{numberTwo?.title}</h2>
                                <p>
                                    {numberTwo?.rating && <Ratings ratings={numberTwo?.rating} ></Ratings>}
                                </p>
                                <p> {numberTwo?.des.slice(0, 180) + '...'}</p>
                                <div className='flex gap-5 pt-5'>
                                    <div class="avatar">
                                        <div class="w-20 rounded-full">
                                            <img src={numberTwo?.img} alt='man1' />
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <div>
                                            <h4 className='text-lg font-bold'>{numberTwo?.name}</h4>
                                            <p className='text-md'>{numberTwo?.country}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='pb-5'>
                    <div className="flex items-center justify-center cursor-pointer">
                        <div class="card lg:max-w-lg bg-base-100 shadow-xl mb-8 ">
                            <div class="card-body ">
                                <h2 class="card-title capitalize">{numberThree?.title}</h2>
                                <p>
                                    {numberThree?.rating && <Ratings ratings={numberThree?.rating} ></Ratings>}
                                </p>
                                <p> {numberThree?.des.slice(0, 180) + '...'}</p>
                                <div className='flex gap-5 pt-5'>
                                    <div class="avatar">
                                        <div class="w-20 rounded-full">
                                            <img src={numberThree?.img} alt='man1' />
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <div>
                                            <h4 className='text-lg font-bold'>{numberThree?.name}</h4>
                                            <p className='text-md'>{numberThree?.country}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='pb-5'>
                    <div className="flex items-center justify-center cursor-pointer">
                        <div class="card lg:max-w-lg bg-base-100 shadow-xl mb-8 ">
                            <div class="card-body ">
                                <h2 class="card-title capitalize">{numberFour?.title}</h2>
                                <p>
                                    {numberFour?.rating && <Ratings ratings={numberFour?.rating} ></Ratings>}
                                </p>
                                <p> {numberFour?.des.slice(0, 180) + '...'}</p>
                                <div className='flex gap-5 pt-5'>
                                    <div class="avatar">
                                        <div class="w-20 rounded-full">
                                            <img src={numberFour?.img} alt='man1' />
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <div>
                                            <h4 className='text-lg font-bold'>{numberFour?.name}</h4>
                                            <p className='text-md'>{numberFour?.country}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='pb-5'>
                    <div className="flex items-center justify-center cursor-pointer">
                        <div class="card lg:max-w-lg bg-base-100 shadow-xl mb-8 ">
                            <div class="card-body ">
                                <h2 class="card-title capitalize">{numberFive?.title}</h2>
                                <p>
                                    {numberFive?.rating && <Ratings ratings={numberFive?.rating} ></Ratings>}
                                </p>
                                <p> {numberFive?.des.slice(0, 180) + '...'}</p>
                                <div className='flex gap-5 pt-5'>
                                    <div class="avatar">
                                        <div class="w-20 rounded-full">
                                            <img src={numberFive?.img} alt='man1' />
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <div>
                                            <h4 className='text-lg font-bold'>{numberFive?.name}</h4>
                                            <p className='text-md'>{numberFive?.country}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='pb-5'>
                    <div className="flex items-center justify-center cursor-pointer">
                        <div class="card lg:max-w-lg bg-base-100 shadow-xl mb-8 ">
                            <div class="card-body ">
                                <h2 class="card-title capitalize">{numberSix?.title}</h2>
                                <p>
                                    {numberSix?.rating && <Ratings ratings={numberSix?.rating} ></Ratings>}
                                </p>
                                <p> {numberSix?.des.slice(0, 180) + '...'}</p>
                                <div className='flex gap-5 pt-5'>
                                    <div class="avatar">
                                        <div class="w-20 rounded-full">
                                            <img src={numberSix?.img} alt='man1' />
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <div>
                                            <h4 className='text-lg font-bold'>{numberSix?.name}</h4>
                                            <p className='text-md'>{numberSix?.country}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper >
        </section >
    );
};

export default ReviewSection;