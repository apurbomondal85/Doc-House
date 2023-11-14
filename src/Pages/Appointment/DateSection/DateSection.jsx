
import chairImg from '../../../assets/images/chair.png'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

function DateSection({onChange}) {
    
    return (
        <div className='flex flex-col md:flex-row justify-center items-center gap-4 lg:gap-16'>
            <div>
                <Calendar onChange={onChange}></Calendar>
            </div>
            <div>
                <img src={chairImg} className='md:h-[270px] lg:h-auto' />
            </div>
        </div>
    )
}

export default DateSection
