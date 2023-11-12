import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import { Elements } from "@stripe/react-stripe-js";
import { useRef, useState } from "react";

const stripePromise = loadStripe(`${import.meta.env.VITE_PAYMENT_GATEWAY_KEY}`);
function PayMent({ selectAppointment, closeModal, getPaymentId }) {
    const [selectedValue, setSelectedValue] = useState();
    const [name, setName] = useState('');
    const handleService = (event) => {
        const value = event.target.value;
        if (value) {
            setName(value);
            const selectService = selectAppointment[0].categories.filter(item => item?.name === value)
            setSelectedValue(selectService);
        }
    }

    return (
        <div className="p-12">
            <div className="space-y-6 mb-8">
                <p className='text-[#F7A582]'>Hello, Awlad</p>
                <h2 className="text-xl font-semibold">Please Pay for Tech Cleaning</h2>
                <p className="text-gray-500">Your Appointment: <span className="text-[#F7A582]">Nov 09, 2022</span> at 08.00 AM - 08.30 AM</p>
                <div className="flex items-center justify-between">
                    <h2 className="text-[#383838] text-xl font-semibold">Please Pay: ${selectedValue && selectedValue[0].price}</h2>
                    <select onChange={handleService} className="border-0 focus:ring-0 bg-[#F7A582] p-2 rounded-md text-white">
                        <option selected disable='true' value=''>Select Service</option>
                        {
                            selectAppointment[0]?.categories.map((item, index) => <option key={index} value={item?.name}>{item?.name}</option>)
                        }
                    </select>
                </div>
            </div>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={selectedValue && selectedValue[0].price} name={name} closeModal={closeModal} getPaymentId={getPaymentId}/>
            </Elements>
        </div>
    )
}

export default PayMent
