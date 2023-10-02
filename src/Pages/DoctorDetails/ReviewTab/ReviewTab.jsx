
import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa6';
import Rating from 'react-rating';

function ReviewTab({ doctor }) {
    const { rating, reviews, aboutMe, name } = doctor;
    return (
        <div className="text-[#3B3A3A]">
            <h3 className='text-xl font-semibold text-black mb-4'>About Me</h3>
            <p>{aboutMe} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis vero deserunt possimus magnam et autem architecto, nihil quas repudiandae beatae at ullam nisi sunt consequatur aperiam harum iste laudantium neque?</p>
            <div className="mt-12">
                <h3 className='text-xl font-semibold text-black mb-4'>Reviews</h3>
                <h3 className='text-[16px] font-semibold text-black mb-4'>{name}</h3>
                <div className="flex items-center gap-2">
                    <p>Review:</p>
                    <Rating
                        placeholderRating={rating}
                        emptySymbol={<FaRegStar className='text-[16px] text-yellow-400'></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-[16px] text-yellow-400'></FaStar>}
                        fullSymbol={<FaStar className='text-[16px] text-yellow-400'></FaStar>}
                        readonly
                    />
                    <p>({reviews.length})</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewTab
