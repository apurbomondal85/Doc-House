
import img1 from '../../assets/images/Group1.png'
import img2 from '../../assets/images/Group2.png'


function CoverPage({title, subTitle}) {
    return (
        <div className='h-[350px] lg:h-[500px] bg-[#07332F] relative'>
            <div className="container h-full space-y-3 text-white flex flex-col justify-center">
                <p>Home / {subTitle}</p>
                <h2 className='text-3xl font-semibold'>{title}</h2>
            </div>
            <img src={img1} className='absolute top-1/2 left-1/2' />
            <img src={img2} className='absolute top-1/2 left-[10%]' />
        </div>
    )
}

export default CoverPage
