
import { Link } from 'react-router-dom'
import errorImg from '../../assets/images/error.jpg'

function Error() {
    return (
        <div className='container'>
            <div className="w-[60%] mx-auto">
                <h1 className='text-5xl font-semibold text-center mt-20'>Sorry,</h1>
                <p className='text-[#0A0808] text-center text-xl my-4'>This page is not found.</p>
                <img src={errorImg} />
                <div className="flex justify-center">
                    <Link>
                        <button className='py-2 px-4 bg-[#F7A582] text-white rounded-lg'>Back to home</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Error
