
import React from 'react'
import vector from '../../../assets/images/Vector.png'
import Group1 from '../../../assets/images/Group1.png'
import Group2 from '../../../assets/images/Group2.png'
import Group3 from '../../../assets/images/Group3.png'
import BannerImg from '../../../assets/images/banner.png'

function Banner() {
    return (
        <div className="w-full bg-[#07332F] md:h-[500px] lg:h-[700px] flex items-center justify-center relative">
            <div className="container grid md:grid-cols-2 gap-8 md:items-center pt-[150px] md:pt-0">
                <div className="text-white space-y-3 lg:space-y-5 flex flex-col items-center justify-center text-center md:text-left md:block">
                    <h1 className='text-3xl md:text-4xl lg:text-6xl font-semibold '>Your Best Medical Help Center</h1>
                    <p>Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.</p>
                    <button type="button" className="text-white bg-[#F7A582] font-medium rounded-lg text-sm px-5 py-4 focus:outline-none">All Service</button>
                </div>
                <div className="flex justify-center items-center">
                    <img src={BannerImg} alt="Banner image" />
                </div>
            </div>
            <img className='absolute top-0 left-0 hidden md:block' src={vector} />
            <img className='absolute top-[60%] left-[40%] hidden md:block' src={Group1} />
            <img className='absolute top-[20%] left-[40%] hidden md:block' src={Group2} />
            <img className='absolute top-[30%] left-[60%] hidden md:block' src={Group3} />
        </div>
    )
}

export default Banner
