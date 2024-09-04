import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useLocation } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';


const Shipping = () => {
    const [res, setRes] = useState(false)
    const [state, setState] = useState({
        name: '',
        address: '',
        phone: '',
        post: '',
        providence: '',
        city: '',
        area: ''
    })
    
    const card_products = [1,2]

    const inputHandle =(e) => {
        e.preventDefault()
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const save =(e) => {
        e.preventDefault()
        const {name, address, phone, post, providence, city, area} = state
        if (name && address && phone && post && providence && city && area) {
            setRes(true)
        }
    }
    return (
        <div>
            <Header />
            <section className='bg-[url("http://localhost:3000/images/banner/shop.png")] h-[220px] mt-6 bg-cover bg-no-repeat relative bg-left'> 
                <div className='absolute left-0 top-0 w-full h-full bg-[#2422228a]'>
                    <div className='w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto '>
                        <div className='flex flex-col justify-center gap-1 items-center h-full w-full text-white'>
                            <h2 className='text-3xl font-bold'>Shipping Page</h2>
                            <div className='flex justify-center items-center gap-2 text-2xl w-full'>
                                <Link to='/' >Home</Link>
                                <span className='pt-1'><IoIosArrowForward /></span>
                                <span>Shipping</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-[#eeeeee]'>
                <div className='w-[85%] lg:w-[90%] md:w-[90%] sm:w-[90%] mx-auto py-16'>
                    <div className='w-full flex flex-wrap'>
                        <div className='w-[67%] md-lg:w-full'>
                            <div className='flex flex-col gap-3'>
                                <div className='bg-white p-6 shadow-sm rounded-md'>
                                    <h2 className='text-slate-600 font-bold pb-3'>Shipping Information</h2>
                                    {
                                        !res && <>
                                            <form onSubmit={save}>
                                            <div className='flex md:flex-col md:gap-2 w-full gap-5 text-slate-600'>
                                                <div className='flex flex-col gap-1 mb-2 w-full'>
                                                    <label onChange={inputHandle} value={state.name} htmlFor='name' className='text-sm font-bold'>Name</label>
                                                    <input type="text" className='w-full px-3 py-2 border border-slate-200 outline-none 
                                                    focus:border-[#852770] rounded-md' name='name' id='name' placeholder='Name'/>
                                                </div>
                                                <div className='flex flex-col gap-1 mb-2 w-full'>
                                                    <label onChange={inputHandle} value={state.address} htmlFor='address' className='text-sm font-bold'>Address</label>
                                                    <input type="text" className='w-full px-3 py-2 border border-slate-200 outline-none 
                                                    focus:border-[#852770] rounded-md' name='address' id='address' placeholder='Address'/>
                                                </div>
                                            </div>
                                            <div className='flex md:flex-col md:gap-2 w-full gap-5 text-slate-600'>
                                                <div className='flex flex-col gap-1 mb-2 w-full'>
                                                    <label onChange={inputHandle} value={state.phone} htmlFor='phone' className='text-sm font-bold'>Phone</label>
                                                    <input type="text" className='w-full px-3 py-2 border border-slate-200 outline-none 
                                                    focus:border-[#852770] rounded-md' name='phone' id='phone' placeholder='Phone'/>
                                                </div>
                                                <div className='flex flex-col gap-1 mb-2 w-full'>
                                                    <label onChange={inputHandle} value={state.post} htmlFor='post' className='text-sm font-bold'>Post</label>
                                                    <input type="text" className='w-full px-3 py-2 border border-slate-200 outline-none 
                                                    focus:border-[#852770] rounded-md' name='post' id='post' placeholder='Post'/>
                                                </div>
                                            </div>
                                            <div className='flex md:flex-col md:gap-2 w-full gap-5 text-slate-600'>
                                                <div className='flex flex-col gap-1 mb-2 w-full'>
                                                    <label onChange={inputHandle} value={state.providence} htmlFor='providence' className='text-sm font-bold'>Providence</label>
                                                    <input type="text" className='w-full px-3 py-2 border border-slate-200 outline-none 
                                                    focus:border-[#852770] rounded-md' name='providence' id='providence' placeholder='Providence'/>
                                                </div>
                                                <div className='flex flex-col gap-1 mb-2 w-full'>
                                                    <label onChange={inputHandle} value={state.city} htmlFor='city' className='text-sm font-bold'>City</label>
                                                    <input type="text" className='w-full px-3 py-2 border border-slate-200 outline-none 
                                                    focus:border-[#852770] rounded-md' name='city' id='city' placeholder='City'/>
                                                </div>
                                            </div>
                                            <div className='flex md:flex-col md:gap-2 w-full gap-5 text-slate-600'>
                                                <div className='flex flex-col gap-1 mb-2 w-full'>
                                                    <label onChange={inputHandle} value={state.area} htmlFor='area' className='text-sm font-bold'>Area</label>
                                                    <input type="text" className='w-full px-3 py-2 border border-slate-200 outline-none 
                                                    focus:border-[#852770] rounded-md' name='area' id='area' placeholder='Area'/>
                                                </div>
                                                <div className='flex flex-col gap-1 mt-7 w-full'>
                                                    <button className='px-3 py-[6px] rounded-sm hover:shadow-[#852770]/50 hover:shadow-lg bg-[#852770] text-white'>Save Changes</button>
                                                </div>
                                            </div>
                                        </form>
                                        </>
                                    }
                                    {
                                        res && <div className='flex flex-col gap-1'>
                                            <h2 className='text-slate-600 font-semibold pb-2'>Deliver To</h2>
                                            <p>
                                                <span className='bg-blue-200 text-blue-800 text-sm font-medium mr-2 px-2 py-2 rounded'>Home</span>
                                                <span>{state.address} {state.phone} {state.post} {state.providence} {state.city} {state.area}</span>
                                                <span className='text-indigo-500 cursor-pointer' onClick={() => setRes(false)}> Change</span>
                                            </p>
                                            <p className='text-slate-600 text-sm'>Email to harshithakarnati@gmail.com</p>
                                        </div>
                                    }
                                    
                                </div>
                                {
                                    card_products.map((p,i) => <div className='flex bg-white p-4 flex-col gap-2'>
                                    <div className='flex justify-start items-center'>
                                        <h2 className='text-md text-slate-600 font-bold'>Gleam Street</h2>
                                    </div>
                                    {
                                        [1,2].map((p,i) => <div className='w-full flex flex-wrap'>
                                            <div className='flex sm:w-full gap-2 w-7/12'>
                                                <div className='flex gap-2 justify-start items-center'>
                                                    <img className='w-[80px] h-[80px]' src={`http://localhost:3000/images/products/${i+1}.webp`} alt="" />
                                                    <div className='pr-4 text-slate-600'>
                                                        <h2 className='text-md font-semibold'>Product Name</h2>
                                                        <span className='text-sm'>Brand: Zara</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex justify-between w-5/12 sm:w-full sm:mt-3'>
                                                <div className='pl-4 sm:pl-0 '>
                                                    <h2 className='text-lg text-orange-500 '>$240</h2>
                                                    <p className='line-through'>$300</p>
                                                    <p>-15%</p>
                                                </div>
                                                <div className='flex gap-2 flex-col'>
                                                    <div className='flex bg-slate-200 h-[30px] justify-center items-center text-xl'>
                                                        <div className='px-3 cursor-pointer'>-</div>
                                                        <div className='px-3 cursor-pointer'>2</div>
                                                        <div className='px-3 cursor-pointer'>+</div>
                                                    </div>
                                                    <button className='px-5 py-[3px] bg-red-500 text-white'>Delete</button>
                                                </div>
                                            </div>
                                        </div>)
                                    }
                                </div>)
                                }
                            </div>
                        </div>
                        <div className='w-[33%] md-lg:w-full'>
                            <div className='pl-3 md-lg:pl-0 md-lg:mt-5'>
                                <div className='bg-white p-3 text-slate-600 flex flex-col gap-3'>
                                    <h2 className='text-xl font-bold'>Order Summary</h2>
                                    <div className='flex justify-between items-center'>
                                        <span>Items Total (5)</span>
                                        <span>$343</span>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <span>Delivery Fee</span>
                                        <span>$30</span>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <span>Total Payment</span>
                                        <span >$373</span>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <span>Total</span>
                                        <span className='text-lg font-bold text-[#852770]'>$373</span>
                                    </div>
                                    <button disabled={res ? false : true} className={`px-5 py-[6px] rounded-sm hover:shadow-red-500/50 hover:shadow-lg text-sm text-white uppercase ${res ? 'bg-red-500' : 'bg-red-300'}`}>Place Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            
        </div>
    );
};

export default Shipping;