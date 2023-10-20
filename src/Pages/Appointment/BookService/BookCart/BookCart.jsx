
import { Modal } from 'flowbite-react';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function BookCart({ service, date }) {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState();
    const props = { openModal, setOpenModal };
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const dates = data.date;
        const time = data.time;
        const name = data.name;
        const phone = data.phone;
        const email = data.email;
        if (user) {
            fetch(`http://localhost:5000/appointmentBook/${user?.email}`, {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({treatment:service?.category_name,  date: dates, time, name, phone, selectedEmail: email, userEmail: user?.email })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        Swal.fire(
                            'Good job!',
                            'You clicked the button!',
                            'success'
                        )
                        props.setOpenModal(undefined)
                    }
                })
        }else{
            navigate('/login')
        }
    }

    return (
        <div className='flex flex-col items-center justify-center gap-3 p-4 rounded-md shadow bg-white mt-8'>
            <div className="p-4 bg-[rgba(255,85,85,0.1)] rounded-md"><img src={service?.category_image_url} alt="" /></div>
            <h2 className="text-2xl text-[#3B3A3A] font-semibold">{service?.category_name}</h2>
            <p>8:00 AM - 9:00 AM</p>
            <button type="button" onClick={() => props.setOpenModal('form-elements')} className="text-[#F7A582] border border-[#F7A582] transition ease-in-out delay-150 hover:text-white hover:bg-[#F7A582] w-full font-medium rounded-lg py-2 mt-6 focus:outline-none">Book Appointment</button>

            <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
                <Modal.Header />
                <Modal.Body>
                    <h1 className="text-2xl text-[#3B3A3A] font-semibold mb-4">{service?.category_name}</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                        <input {...register("date", { required: true })} type="text" className='w-full p-2 bg-blue-100 rounded-md border-0 focus:ring-0' defaultValue={date.toDateString()} />
                        <input {...register("time", { required: true })} type="text" className='w-full p-2 bg-blue-100 rounded-md border-0 focus:ring-0 my-2' defaultValue="8:00 AM - 9:00 AM" />
                        <input {...register("name", { required: true })} type="text" className='w-full p-2 bg-blue-100 rounded-md border-0 focus:ring-0 my-2' placeholder='Full Name' />
                        <input {...register("phone", { required: true })} type="text" className='w-full p-2 bg-blue-100 rounded-md border-0 focus:ring-0 my-2' placeholder='Phone Number' />
                        <input {...register("email", { required: true })} type="email" className='w-full p-2 bg-blue-100 rounded-md border-0 focus:ring-0 my-2' placeholder='Email' />
                        <button type="submit" className="text-[#F7A582] border border-[#F7A582] transition ease-in-out delay-150 hover:text-white hover:bg-[#F7A582] w-full font-medium rounded-lg py-2 mt-6 focus:outline-none">Submit</button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default BookCart
