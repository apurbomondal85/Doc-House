
import React, { useEffect, useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaQuoteLeft, FaRegStar, FaStar } from 'react-icons/fa6';
import Rating from 'react-rating';

function ReviewSlider() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://doc-house-server-nc9o54us0-apurbomondal85.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    const screenSize = window.innerWidth;

    return (
        <div>
            <Swiper
                slidesPerView={screenSize < 780 ? 1 : 2}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className='md:w-2/3 mx-auto text-center'>
                            <img src={review.imageURL} className='w-20 h-20 mx-auto rounded-full' alt="review image" />
                            <div className="flex flex-col items-center lg:my-4">
                                <Rating
                                    placeholderRating={review.rating}
                                    emptySymbol={<FaRegStar className='text-xl lg:text-2xl text-yellow-400'></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-xl lg:text-2xl text-yellow-400'></FaStar>}
                                    fullSymbol={<FaStar className='text-xl lg:text-2xl text-yellow-400'></FaStar>}
                                    readonly
                                />
                                <FaQuoteLeft className='text-3xl lg:text-6xl lg:mt-4'></FaQuoteLeft>
                            </div>
                            <p>{review.comment}</p>
                            <h3 className='text-2xl font-bold mt-3 text-[#CD9003]'>{review.patientName}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    )
}

export default ReviewSlider
