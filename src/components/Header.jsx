import React, { useState } from 'react';
import {MdEmail } from 'react-icons/md'
import { FaFacebook, FaGithub, FaHeart, FaLinkedin, FaList, FaLock, FaPhoneVolume, FaTwitter, FaUser } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsCart3 } from "react-icons/bs";
import { useSelector } from 'react-redux';

const Header = () => {
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const {categories} = useSelector(state => state.home)
    const {userInfo} = useSelector(state => state.auth)
    const {cart_product_count, wishlist_count} = useSelector(state => state.cart)
    const [showSidebar, setShowSidebar] = useState(true)
    const [categoryShow, setCategoryShow] = useState(true)
    const [searchValue, setSeatchValue] = useState('')
    const [category, setCategory] = useState('')

    const search = () => {
        navigate(`/products/search?category=${category}&&value=${searchValue}`)
    }

    const redirect_cart_page = () => {
        if (userInfo) {
            navigate('/cart')
        } else {
            navigate('/login')
        }
    }
    
    return (
        <div className='w-full bg-white'>
            {/* NavBar */}
            <div className='header-top bg-[#0a1729] md-lg:hidden'>
                <div className='w-[85%] lg:w-[90%] mx-auto'>
                    <div className='flex w-full justify-between items-center h-[50px] text-slate-400 '>
                        <ul className='flex justify-start items-center gap-8 font-semibold text-slate-200'>
                            <li className='flex relative justify-center items-center gap-2 text-sm after:absolute after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px]'>
                                <span><MdEmail /></span>
                                <span>support@gmail.com</span>
                            </li>
                            <li className='flex relative justify-center items-center gap-2 text-sm '>
                                <span><FaPhoneVolume /></span>
                                <span>+(789)123-4567</span>
                            </li>
                        </ul>
                        <div>
                            <div className='flex justify-center items-center gap-10'>
                                <div className='flex justify-center items-center gap-4 text-slate-200'>
                                    <a href="#"><FaFacebook /></a>
                                    <a href="#"><FaTwitter /></a>
                                    <a href="#"><FaLinkedin /></a>
                                    <a href="#"><FaGithub /></a>
                                </div>
                                <div className='flex group cursor-pointer text-slate-600 text-sm justify-center items-center gap-1 relative after:h-[18px] after:w-[1px]
                                after:bg-[#afafaf] after:-right-[16px] after:absolute before:absolute before:h-[18px] before:bg-[#afafaf] before:w-[1px] before:-left-[20px]'>
                                    <img src="http://localhost:3000/images/language.png" alt="" />
                                    <span><IoMdArrowDropdown /></span>
                                    <ul className='absolute invisible transition-all top-12 rounded-sm duration-200 text-white
                                    p-2 w-[100px] flex flex-col gap-3 group-hover:visible group-hover:top-6 group-hover:bg-black z-10'>
                                        <li>Hindi</li>
                                        <li>English</li>
                                    </ul>
                                </div>
                                {
                                    userInfo ? <Link className='flex cursor-pointer justify-center items-center gap-2 text-sm text-slate-200' to='/dashboard'>
                                        <span><FaUser /></span>
                                        <span>{userInfo.name}</span>
                                    </Link> : <Link to='/login' className='flex cursor-pointer justify-center items-center gap-2 text-sm text-slate-200' to='/login'>
                                        <span><FaLock/></span>
                                        <span>Login</span>
                                    </Link> 
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header */}
            <div className='w-white'>
                <div className='w-[85%] lg:w-[90%] mx-auto'>
                    <div className='h-[80px] md-lg:h-[100px] flex justify-between items-center flex-wrap'>
                        <div className='md-lg:w-full w-3/12 md-lg:pt-4'>
                            <div className='flex justify-between items-center'>
                                <Link to='/'>
                                    <img className='w-[120px] h-[90px]' src="http://localhost:3000/images/logo.png" alt="" />
                                </Link>
                                <div className='justify-center items-center w-[30px] h-[30px] bg-white text-slate-600
                                border-slate-600 border rounded-sm cursor-pointer lg:hidden md-lg:flex xl:hidden hidden' onClick={() => setShowSidebar(false)}> 
                                    <span><FaList /></span>
                                </div>
                            </div>
                        </div>
                        <div className='md-lg:w-full w-9/12'>
                            <div className='flex justify-between md-lg:justify-center items-center flex-wrap pl-8'>
                                <ul className='flex justify-start items-start gap-4 text-sm font-bold uppercase md-lg:hidden '>
                                    <li><Link to='/' className={`p-2 block ${pathname === '/' ? 'text-[#852770]' : 'text-slate-600'}`} >Home</Link></li>
                                    <li><Link to='/shops' className={`p-2 block ${pathname === '/shops' ? 'text-[#852770]' : 'text-slate-600'}`} >Shop</Link></li>
                                    <li><Link to='/' className={`p-2 block ${pathname === '/blog' ? 'text-[#852770]' : 'text-slate-600'}`} >Blog</Link></li>
                                    <li><Link to='/' className={`p-2 block ${pathname === '/about' ? 'text-[#852770]' : 'text-slate-600'}`} >About Us</Link></li>
                                    <li><Link to='/' className={`p-2 block ${pathname === '/contact' ? 'text-[#852770]' : 'text-slate-600'}`} >Contact Us</Link></li>
                                </ul>

                                <div className='flex md-lg:hidden justify-center items-center gap-5'>
                                    <div className='flex justify-center gap-5'>
                                        <div className='relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-[#e2e2e2]'>
                                            <span className='text-xl text-[#852770]'><FaHeart /></span>
                                                {
                                                    wishlist_count !== 0 && <div className='w-[20px] h-[20px] absolute bg-red-500 rounded-full
                                                     text-white flex justify-center items-center -top-[3px] -right-[5px]'>{wishlist_count}</div>
                                                }
                                        </div>
                                        <div onClick={redirect_cart_page} className='relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-[#e2e2e2]'>
                                            <span className='text-xl text-[#852770]'><BsCart3 /></span>
                                                {
                                                    cart_product_count !==0 &&<div className='w-[20px] h-[20px] absolute bg-red-500 rounded-full text-white flex 
                                                    justify-center items-center -top-[3px] -right-[5px]'>
                                                        {cart_product_count}
                                                    </div>
                                                }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* responsive sidebar */}
            <div className='hidden md-lg:block'>
                <div onClick={() => setShowSidebar(true)} className={`fixed duration-200 transition-all ${showSidebar ? 'invisible' : 'visible'} hidden md-lg:block w-screen h-screen bg-[rgba(0,0,0,0.5)] top-0 left-0 z-20`}></div>
                <div className={`w-[300px] z-[999] transition-all duration-200 fixed ${showSidebar? '-left-[300px]' : 'left-0 top-0 '} overflow-y-auto bg-white h-screen py-6 px-8`}>
                    <div className='flex justify-start flex-col gap-6'>
                        <Link to='/'>
                            <img src="http://localhost:3000/images/logo.png" alt="" />
                        </Link>
                    </div>
                    <div className='flex justify-start items-center gap-10 '>
                        <div className='flex group cursor-pointer text-slate-600 text-sm justify-center items-center gap-1 relative after:h-[18px] after:w-[1px]
                        after:bg-[#afafaf] after:-right-[16px] after:absolute'>
                            <img src="http://localhost:3000/images/language.png" alt="" />
                            <span><IoMdArrowDropdown /></span>
                            <ul className='absolute invisible transition-all top-12 rounded-sm duration-200 text-white
                            p-2 w-[100px] flex flex-col gap-3 group-hover:visible group-hover:top-6 group-hover:bg-black z-10'>
                                <li>Hindi</li>
                                <li>English</li>
                            </ul>
                        </div>
                        {
                            userInfo ? <Link className='flex cursor-pointer justify-center items-center gap-2 text-sm text-slate-600' to='/dashboard'>
                                <span><FaUser /></span>
                                <span>Harshitha Reddy</span>
                            </Link> : <Link className='flex cursor-pointer justify-center items-center gap-2 text-sm text-slate-600' to='/login'>
                                <span><FaLock/></span>
                                <span>Login</span>
                            </Link> 
                        }
                    </div>
                    <ul className='flex flex-col justify-start items-start text-sm font-bold uppercase pt-3 '>
                        <li><Link to='/' className={`py-2 block ${pathname === '/' ? 'text-[#852770]' : 'text-slate-600'}`} >Home</Link></li>
                        <li><Link to='/shops' className={`py-2 block ${pathname === '/shops' ? 'text-[#852770]' : 'text-slate-600'}`} >Shop</Link></li>
                        <li><Link to='/' className={`py-2 block ${pathname === '/blog' ? 'text-[#852770]' : 'text-slate-600'}`} >Blog</Link></li>
                        <li><Link to='/' className={`py-2 block ${pathname === '/about' ? 'text-[#852770]' : 'text-slate-600'}`} >About Us</Link></li>
                        <li><Link to='/' className={`py-2 block ${pathname === '/contact' ? 'text-[#852770]' : 'text-slate-600'}`} >Contact Us</Link></li>
                    </ul>
                    <div className='flex justify-start items-center gap-4 text-slate-600 py-5'>
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><FaGithub /></a>
                    </div>
                    <div className='w-full flex justify-end md-lg:justify-start gap-3 items-center'>
                        <div className='w-[48px] h-[48px] rounded-full flex bg-[#f5f5f5] justify-center items-center'>
                            <span><FaPhoneVolume /></span>
                        </div>
                        <div className='flex justify-end flex-col gap-1'>
                            <h2 className='text-sm font-medium text-slate-600'>+(789)123-4567</h2>
                            <span className='text-xs'>Support 24/7</span>
                        </div>
                    </div>
                    <ul className='flex flex-col justify-start items-start gap-3 text-[#1c1c1c] py-5'>
                        <li className='flex justify-start items-center gap-2 text-sm'>
                            <span><MdEmail /></span>
                            <span>support@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Search Bar */}
            <div className='w-[85%] lg:w-[90%] mx-auto'>
                <div className='flex w-full flex-wrap md-lg:gap-8'>
                    <div className='w-3/12 md-lg:w-full'>
                        <div className='bg-white relative'>
                            <div onClick={() => setCategoryShow(!categoryShow)} className='h-[50px] bg-[#852770] text-white flex justify-center md-lg:justify-between md-lg:px-6 items-center gap-3 font-bold text-md cursor-pointer'>
                                <div className='flex justify-center items-center gap-3'>
                                    <span><FaList /></span>
                                    <span>All Category</span>
                                </div>
                                <span className='pt-1'><IoMdArrowDropdown /></span>
                            </div>        
                            <div className={`${categoryShow? 'h-0' : 'h-[400px]'} overflow-hidden transition-all md-lg:relative duration-500 absolute z-[99999] w-full border-x bg-[#f5e8f2] `}>
                                <ul className='py-2 text-slate-600 font-medium'>
                                    {
                                        categories.map((c,i) => {
                                            return (
                                                <li key={i} className='flex justify-start items-center gap-2 px-[24px] py-[6px]'>
                                                    <img src={c.image} className='w-[30px] h-[30px] rounded-full overflow-hidden' alt="" />
                                                    <Link to={`/products?category=${c.name}`} className='text-sm'>{c.name}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='w-9/12 pl-8 md-lg:pl-0 md-lg:w-full'>
                        <div className='flex flex-wrap justify-between items-center md-lg:gap-6'>
                            <div className='w-8/12 md-lg:w-full'>
                                <div className='flex border h-[50px] items-center relative gap-6'>
                                    <div className='relative after:absolute after:h-[25px] after:w-[1px] after:bg-[#852770] after:-right-[15px] md-lg:hidden'>
                                        <select onChange={(e) => setCategory(e.target.value)} className='w-[152px] text-slate-600 font-semibold bg-transparent px-2 h-full outline-0 border-none ' name="" id="">
                                            <option value="">Select Category</option>
                                            {
                                                categories.map((c,i) => <option key={i} value={c.name}>{c.name}</option>)
                                            }
                                        </select>
                                    </div>
                                    <input className='w-full relative bg-transparent text-slate-600 outline-0 px-3 h-full' 
                                    onChange={(e) => setSeatchValue(e.target.value)} type="text" placeholder='Search what you need'/>
                                    <button onClick={search} className='bg-[#852770] right-0 absolute px-8 h-full font-semibold uppercase text-white'>Search</button>
                                </div>
                            </div>
                            <div className='w-4/12 block md-lg:hidden pl-2 md-lg:w-full md-lg:pl-0'>
                                <div className='w-full flex justify-end md-lg:justify-start gap-3 items-center'>
                                    <div className='w-[48px] h-[48px] rounded-full flex bg-[#f5f5f5] justify-center items-center'>
                                        <span><FaPhoneVolume /></span>
                                    </div>
                                    <div className='flex justify-end flex-col gap-1'>
                                        <h2 className='text-md font-medium text-slate-600'>+1346-898676557</h2>
                                        <span className='text-sm'>Support 33/45</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;