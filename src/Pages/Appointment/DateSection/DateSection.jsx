
import chairImg from '../../../assets/images/chair.png'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

function DateSection({onChange}) {
    
    return (
        <div className='flex flex-col md:flex-row justify-center items-center gap-16'>
            <div className=''>
                <Calendar onChange={onChange}></Calendar>
            </div>
            <div className="">
                <img src={chairImg} alt="" />
            </div>
        </div>
    )
}

export default DateSection
