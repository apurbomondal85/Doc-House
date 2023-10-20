import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(`${import.meta.env.VITE_PAYMENT_GATEWAY_KEY}`);
function PayMent() {

    return (
        <div className="p-12">
            <div className="space-y-6 mb-8">
                <p className='text-[#F7A582]'>Hello, Awlad</p>
                <h2 className="text-xl font-semibold">Please Pay for Tech Cleaning</h2>
                <p className="text-gray-500">Your Appointment: <span className="text-[#F7A582]">Nov 09, 2022</span> at 08.00 AM - 08.30 AM</p>
                <div className="flex items-center justify-between">
                    <h2 className="text-[#383838] text-xl font-semibold">Please Pay: $200</h2>
                    <select className="border-0 focus:ring-0 bg-[#F7A582] p-2 rounded-md text-white">
                        <option disable='true'>Select Service</option>
                        <option defaultValue='h'>a</option>
                        <option defaultValue='w'>b</option>
                        <option defaultValue='z'>c</option>
                    </select>
                </div>
            </div>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    )
}

export default PayMent
