
import { useForm } from 'react-hook-form';
import loginImg from '../../assets/images/login.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

function singUp() {
    const { createUser, updateUser } = useContext(AuthContext);
    const [error, setError] = useState();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        createUser(email, password)
            .then((userCredential) => {
                updateUser(userCredential.user, name)
                console.log(userCredential.user);
                reset()
                navigate(from)
            })
            .catch((error) => {
                const errorCode = error?.code;
                setError(errorCode)
            });

    }

    return (
        <div className='container'>
            <div className="flex flex-col md:flex-row md:items-center gap-8 bg-slate-200">
                <div className="bg-[#07332F] p-24 flex-1 h-full">
                    <img src={loginImg} alt="login image" className='h-[500px]' />
                </div>
                <div className="flex-1 flex justify-center items-center bg-slate-200">
                    <div className="p-8 rounded-lg shadow border bg-white border-blue-300">
                        <h1 className='text-center text-3xl font-semibold mb-10'>Sign Up to Doc House</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-6">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                                <input type="text" {...register("name", { required: true })} className="bg-gray-50 border-none outline-none shadow-md text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Enter your Name" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Username or Email Address</label>
                                <input type="email" id="email" {...register("email", { required: true })} className="bg-gray-50 border-none outline-none shadow-md text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Enter your username or address" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                                <input type="password" id="password" {...register("password", { pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/ }, { required: true })} className="bg-gray-50 border-none outline-none shadow-md text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder='Enter your password' required />
                                {errors.password && <span className='text-red-500 text-sm mt-3'>Password will be minimum 8 character and  at least one special character and at least one Alphabet,Number</span>}
                            </div>
                            <p className="text-red-500 my-3 text-sm">{error && error}</p>
                            <button type="submit" className="text-white mb-3 bg-[#D1A054] font-medium rounded-lg text-base w-full px-5 py-2.5 text-center">Create Account</button>
                            <p className='my-4 text-center'>Already registered? Go to <Link to="/login" className='underline text-blue-500'>login</Link></p>
                            <Link to="/"><button className='bg-[#D1A054] p-1 rounded-md text-white'>Back Home</button></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default singUp
