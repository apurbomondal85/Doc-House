import serviceImg from '../../../assets/images/service.png'
import ServiceCategory from './ServiceCategory'

function OurServices() {
    return (
        <div className='container py-28'>
            <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-6">
                <div className="flex-1">
                    <img className='lg:h-[900px] w-full lg:w-[558px]' src={serviceImg} alt="services image" />
                </div>
                <div className="flex-1 space-y-4">
                    <h2 className='text-3xl text-center md:text-left font-semibold'>Our Services</h2>
                    <p className='text-center md:text-left'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <ServiceCategory></ServiceCategory>
                    <button type="button" className="text-[#F7A582] hover:text-white bg-transparent transition-colors hover:bg-[#F7A582]  border border-[#F7A582] font-medium rounded-lg text-sm px-5 py-2.5">More Details</button>
                </div>
            </div>
        </div>
    )
}

export default OurServices
