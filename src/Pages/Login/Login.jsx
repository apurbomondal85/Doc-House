
import { useForm } from 'react-hook-form';
import loginImg from '../../assets/images/login.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaGoogle } from "react-icons/fa6";
import usePostUser from '../../Hook/postUser/usePostUser';
import { Helmet } from 'react-helmet';

function Login() {
    const { login, google } = useContext(AuthContext);
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
        const email = data.email;
        const password = data.password;

        login(email, password)
            .then(currentUser => {
                const user = currentUser.user;
                reset();
                navigate(from)
            })
            .catch(error => {
                const errorCode = error.code;
                setError(errorCode)
            })

    }

    const handleGoogle = () => {
        google()
        .then((result) => {
            const user = result.user;
            usePostUser(user)
            navigate(from)
          }).catch((error) => {
            const errorCode = error.code;
            setError(errorCode)
          });
    }

    return (
        <div className='container'>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="flex flex-col md:flex-row md:items-center gap-2 lg:gap-8 bg-slate-200">
                <div className="bg-[#07332F] p-24 basis-[50%] h-full">
                    <img src={loginImg} alt="login image" className='h-[300px] lg:h-[500px] w-full' />
                </div>
                <div className=" basis-[50%] flex justify-center items-center bg-slate-200">
                    <div className="p-8 rounded-lg shadow border bg-white border-blue-300">
                        <h1 className='text-center text-3xl font-semibold mb-10'>Sign in to Doc House</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Username or Email Address</label>
                                <input type="email" id="email" {...register("email", { required: true })} className="bg-gray-50 border-none outline-none shadow-md text-gray-900 text-sm rounded-lg w-full p-2.5" placeholder="Enter your username or address" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                                <input type="password" id="password" {...register("password", { required: true })} className="bg-gray-50 border-none outline-none shadow-md text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder='Enter your password' required />
                            </div>
                            <p className="text-red-500 mt-3 text-sm">{error}</p>
                            <button type="submit" className="text-white mb-3 bg-[#D1A054] font-medium rounded-lg text-base w-full px-5 py-2.5 text-center">Login</button>
                            <span onClick={handleGoogle} className="text-white mb-3 bg-[#D1A054] font-medium rounded-lg text-base w-full px-5 py-2.5 text-center flex items-center justify-center gap-2 cursor-pointer"><FaGoogle className='text-blue-800 text-xl'></FaGoogle>Login With Google</span>
                            <p className='my-4 text-center'>Create a new account <Link to="/singup" className='underline text-blue-500'>Sing Up</Link></p>
                            <Link to="/"><button className='bg-[#D1A054] p-1 rounded-md text-white'>Back Home</button></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
