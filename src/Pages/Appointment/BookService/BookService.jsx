
import React, { useEffect, useState } from 'react'
import BookCart from './BookCart/BookCart';

function BookService({date}) {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://doc-house-server-nc9o54us0-apurbomondal85.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='lg:py-20'>
            <h1 className='text-3xl lg:text-4xl text-center'>Available slots for Teeth Orthodontics.</h1>
            <div className="mt-4 lg:mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                {
                    services?.map(item => <BookCart key={item?._id} service={item} date={date}></BookCart>)
                }
            </div>
        </div>
    )
}

export default BookService
