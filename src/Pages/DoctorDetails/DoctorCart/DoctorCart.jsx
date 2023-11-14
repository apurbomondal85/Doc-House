
import React from 'react'
import { FaLocationDot, FaRegStar, FaStar } from 'react-icons/fa6';
import Rating from 'react-rating';

function DoctorCart({ doctor }) {
    const { _id, name, image, price, graduation, rating, reviews, location, available, specializations } = doctor;


    return (
        <div className='lg:px-32'>
            <div className="flex flex-col md:flex-row items-center border rounded-lg shadow bg-white gap-6 p-8">
                <div>
                    <img className="object-cover rounded-t-lg md:w-[350px]" src={image} alt="" />
                </div>
                <div className="space-y-2 text-[#6C6B6B]">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{name}</h5>
                    <p className="mb-3 font-normal">{graduation}</p>
                    <div className='flex items-center gap-2'>
                        <Rating
                            placeholderRating={rating}
                            emptySymbol={<FaRegStar className='text-sm text-yellow-400'></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-sm text-yellow-400'></FaStar>}
                            fullSymbol={<FaStar className='text-sm text-yellow-400'></FaStar>}
                            readonly
                        />
                        <p>({reviews?.length})</p>
                    </div>
                    <p className='flex items-center gap-2'><FaLocationDot></FaLocationDot><span>{location}</span></p>
                    <div>
                        {
                            specializations?.map((item, index) => <button key={index} className='mt-2 lg:mr-8 py-1 px-4 text-[#6C6B6B] border border-[#6C6B6B] rounded-lg'>{item}</button>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorCart
