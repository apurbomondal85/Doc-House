import React from 'react'
import { FaCircle } from 'react-icons/fa6';

function Overview({ doctor }) {
    const { aboutMe, education, workExperience, services, awards, specializations } = doctor;
    return (
        <div className='text-[#3B3A3A]'>
            <h3 className='text-xl font-semibold text-black mb-4'>About Me</h3>
            <p>{aboutMe} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis vero deserunt possimus magnam et autem architecto, nihil quas repudiandae beatae at ullam nisi sunt consequatur aperiam harum iste laudantium neque?</p>
            <div className="flex flex-col md:flex-row mt-12">
                <div className='space-y-8'>
                    <div>
                        <h3 className='text-xl font-semibold text-black mb-4'>Education</h3>
                        {
                            education?.map((item, index) =>
                                <div key={index} >
                                    <h3 key={index} className='flex items-center gap-2 font-semibold'><FaCircle className='text-[7px]' />{item.school}</h3>
                                    <p className='mt-2'>{item?.degree}</p>
                                    <p className='my-2'>({item?.date})</p>
                                </div>
                            )
                        }
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold text-black mb-4'>Work & Experience</h3>
                        {
                            workExperience?.map((item, index) =>
                                <div key={index}>
                                    <h3 className='flex items-center gap-2 font-semibold'><FaCircle className='text-[7px]' />{item.name}</h3>
                                    <p className='mb-4'>{item?.date}</p>
                                </div>
                            )
                        }
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold text-black mb-4'>Services</h3>
                        {
                            services?.map((item, index) =>
                                <p key={index} className='mb-2 flex items-center gap-2'><FaCircle className='text-[7px]' />{item}</p>
                            )
                        }
                    </div>
                </div>
                <div className='pl-20'>
                    <div>
                        <h3 className='text-xl font-semibold text-black mb-4'>Awards</h3>
                        {
                            awards?.map((item, index) =>
                                <div key={index}>
                                    <p className='mb-2'>{item?.date}</p>
                                    <h3 className='flex items-center gap-2 font-semibold'><FaCircle className='text-[7px]' />{item.name}</h3>
                                    <p className='mb-4'>{item?.description}</p>
                                </div>
                            )
                        }
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold text-black mb-4'>Specializations</h3>
                        {
                            specializations?.map((item, index) =>
                                <p key={index} className='mb-2 flex items-center gap-2'><FaCircle className='text-[7px]' />{item}</p>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview
