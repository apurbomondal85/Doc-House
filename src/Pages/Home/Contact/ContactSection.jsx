
import { useForm } from "react-hook-form"
import { FaLocationDot, FaPhone } from 'react-icons/fa6'

function ContactSection() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = event => {
        const name = event.name;
        const email = event.email;
        const phone = event.phone;
        const doctor = event.doctor;
        const date = event.date;
        const time = event.time;

        const userMail = {name,email,phone,doctorName: doctor, date, time};
        console.log(userMail);

    }

    return (
        <div className='container py-16'>
            <div className='p-8 lg:p-24 rounded-sm bg-[#07332F] flex flex-col md:flex-row justify-center items-center gap-6'>
                <div className="text-white flex-1 space-y-6">
                    <h1 className="text-3xl font-semibold">Contact With Us</h1>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi.</p>
                    <div className="space-y-2">
                        <p className="flex items-center gap-4"><FaPhone></FaPhone><span>+88 01750 14 14 14</span></p>
                        <p className="flex items-center gap-4"><FaLocationDot></FaLocationDot><span>Dhanmondi, Dhaka, Bangladesh</span></p>
                    </div>
                </div>
                <div className="flex-1">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input style={{ background: "rgba(255, 255, 255, 0.05)" }} className="text-white w-full placeholder:text-white p-4 rounded-md shadow border-0 outline-none" type="text" {...register("name")} placeholder="Name" required />
                            <input style={{ background: "rgba(255, 255, 255, 0.05)" }} className="text-white w-full placeholder:text-white p-4 rounded-md shadow border-0 outline-none" type="email" {...register("email")} placeholder="Email" required />
                            <input style={{ background: "rgba(255, 255, 255, 0.05)" }} className="text-white w-full placeholder:text-white p-4 rounded-md shadow border-0 outline-none" type="text" {...register("phone")} placeholder="Mobile Number" required />
                            <input style={{ background: "rgba(255, 255, 255, 0.05)" }} className="text-white w-full placeholder:text-white p-4 rounded-md shadow border-0 outline-none" type="text" {...register("doctor")} placeholder="Doctor Name" />
                            <input style={{ background: "rgba(255, 255, 255, 0.05)" }} className="text-white w-full shadow p-4 rounded-md border-0 outline-none" type="date" {...register("date")} required/>
                            <select style={{ background: "rgba(255, 255, 255, 0.05)" }} className="text-white shadow border-0 outline-none" {...register("time")}>
                                <option className="text-black" value="Time" selected disabled>Time</option>
                                <option className="text-black" value="9:30 AM" >9:30 AM</option>
                                <option className="text-black" value="4:00 PM" >4:00 PM</option>
                            </select>
                        </div>
                        <div>
                            <button type="submit" className="text-[#F7A582] border border-[#F7A582] transition ease-in-out delay-150 hover:text-white hover:bg-[#F7A582] w-full font-medium rounded-lg py-3 mt-6 focus:outline-none">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactSection
