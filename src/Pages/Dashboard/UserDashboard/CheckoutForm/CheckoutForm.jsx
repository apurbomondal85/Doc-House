

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import axios from 'axios';

const CheckoutForm = ({ price, name, closeModal, getPaymentId }) => {
    const { user } = useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    useEffect(() => {
        if (price) {
            fetch("http://localhost:5000/create-payment-intent", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ totalPrice: parseFloat(price.toFixed(2)) })
            })
                .then(res => res.json())
                .then(data => setClientSecret(data.clientSecret))
        }
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        const { paymentIntent, error: conformError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || "NotFound",
                        name: user?.displayName || "NotFound",
                    },
                },
            },
        );
        if (conformError) {
            console.log(conformError);
        }


        if (paymentIntent?.status === "succeeded") {
            const paymentHistory = { paymentId: paymentIntent.id, name, status : "Paid", price, email : user?.email }
            axios.post('http://localhost:5000/payment-history', paymentHistory)
                .then(data => {
                    if (data) {
                        closeModal();
                        getPaymentId(true);
                    }
                })
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" disabled={!stripe || !clientSecret} className='w-full py-2 bg-[#F7A582] rounded-md mt-6 text-white font-semibold'>
                Pay
            </button>
        </form>
    );
};
export default CheckoutForm
