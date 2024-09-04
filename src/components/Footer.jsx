import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-[#e7eef8]'>
            <div className='w-[85%] flex flex-wrap mx-auto border-b py-10 md-lg:pb-10 sm:pb-6'>
                <div className='w-3/12 lg:w-4/12 sm:w-full'>
                    <div className='flex flex-col gap-3'>
                        <div className='flex sm:justify-center justify-start items-center'>
                        <img className='flex w-[130px] h-[90px]' src={`http://localhost:3000/images/logo.png`} alt="logo" /></div>
                        <ul className='flex flex-col gap-2 text-slate-600'>
                            <li>Address: 987 Cedar Street, Building C, Seattle, WA 98109, USA</li>
                            <li>Phone: +(789)123-4567</li>
                            <li>Email: support@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className='w-5/12 lg:w-8/12 sm:w-full'>
                    <div className='flex justify-center sm:justify-start sm:mt-6 w-full'>
                        <div>
                            <h2 className='font-bold text-lg mb-2'>Useful Links</h2>
                            <div className='flex justify-between gap-[80px] lg:gap-[40px]'>
                                <ul className='flex flex-col gap-2 text-slate-600 text-sm font-semibold'>
                                    <li>
                                        <Link>About Us </Link>
                                    </li>
                                    <li>
                                        <Link>About Our Shop </Link>
                                    </li>
                                    <li>
                                        <Link>Delivery Information </Link>
                                    </li>
                                    <li>
                                        <Link>Privacy Policy </Link>
                                    </li>
                                    <li>
                                         <Link>Blogs </Link>
                                    </li>
                                </ul>
                                <ul className='flex flex-col gap-2 text-slate-600 text-sm font-semibold'>
                                    <li>
                                        <Link>Our Service </Link>
                                    </li>
                                    <li>
                                        <Link>Company Profile </Link>
                                    </li>
                                    <li>
                                        <Link>Delivery Information </Link>
                                    </li>
                                    <li>
                                        <Link>Privacy Policy </Link>
                                    </li>
                                    <li>
                                         <Link>Blogs </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-4/12 lg:w-full lg:mt-6'>
                    <div className='w-full flex flex-col justify-start gap-5'>
                        <h2 className='font-bold text-lg mb-2'>Join Our shop</h2>
                        <span>Get Email updates about our latest and shop special offers</span>
                        <div className='h-[50px] w-full bg-white border relative'>
                            <input className='h-full bg-transparent w-full px-3 outline-0' type="text" placeholder='Enter your email'/>
                            <button className='h-full absolute right-0 bg-[#852770] text-white uppercase px-4 font-bold text-sm rounded-sm'>Subscribe</button>
                        </div>
                        <ul className='flex justify-start items-center gap-3'>
                            <li><a className='w-[30px] h-[30px] hover:bg-[#852770] hover:text-white flex justify-center items-center bg-white rounded-full' href='#'><FaFacebook /></a></li>
                            <li><a className='w-[30px] h-[30px] hover:bg-[#852770] hover:text-white flex justify-center items-center bg-white rounded-full' href='#'><FaTwitter /></a></li>
                            <li><a className='w-[30px] h-[30px] hover:bg-[#852770] hover:text-white flex justify-center items-center bg-white rounded-full' href='#'><FaLinkedin /></a></li>
                            <li><a className='w-[30px] h-[30px] hover:bg-[#852770] hover:text-white flex justify-center items-center bg-white rounded-full' href='#'><FaGithub /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-[905] flex flex-wrap justify-center items-center text-slate-600 mx-auto py-2 text-center'>
                <span>Copyright @ 2024 All Rights Reserved</span>
            </div>
        </footer>
         
    );
};

export default Footer;