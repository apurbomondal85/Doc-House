
import CoverPage from '../CoverPage/CoverPage';
import DateSection from './DateSection/DateSection';

function Appointment() {

    return (
        <div>
            <CoverPage title="Appointment" subTitle="Appointment"></CoverPage>
            <div className="bg-chair bg-no-repeat bg-cover bg-center">
                <div className="bg-[rgba(255,255,255,.9)]">
                    <div className='container py-16'>
                                <DateSection></DateSection>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appointment
