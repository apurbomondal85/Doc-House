
import { useState } from 'react';
import CoverPage from '../CoverPage/CoverPage';
import AppointmentService from './AppointmentService/AppointmentService';
import BookService from './BookService/BookService';
import DateSection from './DateSection/DateSection';

function Appointment() {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <CoverPage title="Appointment" subTitle="Appointment"></CoverPage>
            <div className="bg-chair bg-no-repeat bg-cover bg-center">
                <div className="bg-[rgba(255,255,255,.9)]">
                    <div className='container py-16'>
                        <DateSection onChange={onChange}></DateSection>
                        <AppointmentService date={value}></AppointmentService>
                        <BookService date={value}></BookService>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appointment
