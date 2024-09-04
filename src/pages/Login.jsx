import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaFacebookF, FaGoogle } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Login = () => {
    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const inputHandle = (e) => {
        e.preventDefault()
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const login = (e) => {
        e.preventDefault()
        
    }
    return (
        <div>
            <Header />
            <section>
                <div className='bg-slate-200 mt-4'>
                    <div className='w-full justify-center items-center p-10'>
                        <div className='grid grid-cols-2 w-[60%] 2xl:w-[50%] mx-auto bg-white rounded-md'>
                            <div className='px-8 py-8'>
                                <h2 className='text-center w-full text-xl text-slate-600 font-bold'>Register</h2>
                                <div>
                                    <form onSubmit={login}>
                                        <div className='text-slate-600'>
                                            <div className='flex flex-col gap-1 mb-2'>
                                                <label htmlFor="email">Email</label>
                                                <input onChange={inputHandle} value={state.email} className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-[#852770] rounded-md' 
                                                type="email" name='email' id='email' placeholder='Email' required />
                                            </div>
                                            <div className='flex flex-col gap-1 mb-2'>
                                                <label htmlFor="password">Password</label>
                                                <input onChange={inputHandle} value={state.password} className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-[#852770] rounded-md' 
                                                type="password" name='password' id='password' placeholder='Password' required />
                                            </div>
                                            <button className='px-8 w-full py-2 bg-[#852770] shadow-lg hover:shadow-[#852770]/40 text-white rounded-md'>Login</button>
                                        </div>
                                    </form>
                                    <div className='flex justify-center items-center py-2'>
                                        <div className='h-[1px] bg-slate-300 w-[90%]'> </div>
                                        <span className='px-3 text-slate-600'>Or</span>
                                        <div className='h-[1px] bg-slate-300 w-[90%]'> </div>
                                    </div>
                                    <button className='px-8 w-full py-2 bg-indigo-500 shadow-lg hover:shadow-indigo-500/40 text-white rounded-md 
                                    flex justify-center items-center gap-2 mb-3'>
                                        <span><FaFacebookF /></span>
                                        <span>Login with Facebook</span>
                                    </button>
                                    <button className='px-8 w-full py-2 bg-red-500 shadow-lg hover:shadow-red-500/40 text-white rounded-md
                                    flex justify-center items-center gap-2 mb-3'>
                                        <span><FaGoogle /></span>
                                        <span>Login with Google</span>
                                    </button>
                                </div>
                                <div className='text-center text-slate-600 pt-1'>
                                    <p>Don't have an Account? <Link className='text-blue-500' to='/register'>Sign Up</Link></p>

                                </div>
                            </div>
                        <div className='w-full h-full py-4 pr-4'>
                            <img className='' src="http://localhost:3000/images/login.jpg" alt="" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Login;