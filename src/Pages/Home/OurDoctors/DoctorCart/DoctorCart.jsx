
import React from 'react'
import { FaCalendar, FaDollarSign, FaLocationDot, FaRegStar, FaStar } from 'react-icons/fa6';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

function DoctorCart({ doctor }) {
    const {_id, name, image, price, graduation, rating, location, available } = doctor;
    return (
        <div className="bg-white rounded-lg shadow p-4 overflow-hidden">
            <img src={image} className='h-[150px] lg:h-[200px] w-full object-cover object-top rounded-md' alt="" />
            <div className="py-5 space-y-3">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <p className='text-slate-500'>{graduation}</p>
                <Rating
                    placeholderRating={rating}
                    emptySymbol={<FaRegStar className='text-xl text-yellow-400'></FaRegStar>}
                    placeholderSymbol={<FaStar className='text-xl text-yellow-400'></FaStar>}
                    fullSymbol={<FaStar className='text-xl text-yellow-400'></FaStar>}
                    readonly
                />
            </div>
            <div className="space-y-3">
                <p className='space-x-2 flex items-center text-slate-500'><FaLocationDot></FaLocationDot><span>{location}</span></p>
                <p className='space-x-2 flex items-center text-slate-500'><FaCalendar></FaCalendar><span>{available[0]}</span></p>
                <p className='space-x-2 flex items-center text-slate-500'><FaDollarSign></FaDollarSign><span>${price}</span></p>
            </div>
            <div>
                <Link to={`/doctor-profile/${_id}`}>
                    <button type="button" className="text-[#F7A582] border border-[#F7A582] transition ease-in-out delay-150 hover:text-white hover:bg-[#F7A582] w-full font-medium rounded-lg py-3 mt-4 focus:outline-none">View Profile</button>
                </Link>
            </div>
        </div>
    )
}

export default DoctorCart
