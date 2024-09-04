import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import Rating from '../components/Rating';
import { FaFacebookF, FaGithub, FaHeart, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import Reviews from '../components/Reviews';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Details = () => {
    const images = [1, 2, 3, 4, 5, 6]
    const [image, setImage] = useState('')
    const [state, setState] = useState('reviews')
    const discount = 10
    const stock = 4

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        Desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mdtablet: {
            breakpoint: { max: 991, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        },
        smmobile: {
            breakpoint: { max: 640, min: 0 },
            items: 2
        },
        xsmobile: {
            breakpoint: { max: 440, min: 0 },
            items: 1
        }
    }


    return (
        <div>
            <Header />
            <section className='bg-[url("http://localhost:3000/images/banner/shop.png")] h-[220px] mt-6 bg-cover bg-no-repeat relative bg-left'>
                <div className='absolute left-0 top-0 w-full h-full bg-[#2422228a]'>
                    <div className='w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto '>
                        <div className='flex flex-col justify-center gap-1 items-center h-full w-full text-white'>
                            <h2 className='text-3xl font-bold'>Product Details Page</h2>
                            <div className='flex justify-center items-center gap-2 text-2xl w-full'>
                                <Link to='/' >Home</Link>
                                <span className='pt-1'><IoIosArrowForward /></span>
                                <span>Details</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='bg-slate-100 py-5 mb-5'>
                    <div className='w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto'>
                        <div className='flex justify-start items-center text-md text-slate-600 w-full'>
                            <Link to='/'>Home</Link>
                            <span className='pt-1'><IoIosArrowForward /></span>
                            <Link to='/'>Category</Link>
                            <span className='pt-1'><IoIosArrowForward /></span>
                            <Link to='/'>Products</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto'>
                    <div className='grid grid-cols-2 md-lg:grid-cols-1 gap-8'>
                        <div>
                            <div className='p-5 border'>
                                <img className='h-[400px] w-full' src={image ? `http://localhost:3000/images/products/${image}.webp` : `http://localhost:3000/images/products/${images[3]}.webp`} alt="" />
                            </div>
                            <div className='py-3'>
                                {
                                    images && <Carousel autoPlay={true} infinite={true} transitionDuration={500} responsive={responsive} >
                                        {
                                            images.map((img, i) => {
                                                return (
                                                    <div key={i} onClick={() => setImage(img)}>
                                                        <img className='h-[120px] cursor-pointer' src={`http://localhost:3000/images/products/${i + 1}.webp`} alt="" />
                                                    </div>
                                                )
                                            })
                                        }
                                    </Carousel>
                                }
                            </div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div className='text-3xl text-slate-600 font-bold'>
                                <h3>Product Name</h3>
                            </div>
                            <div className='flex justify-start items-center gap-4'>
                                <div className='flex items-center text-md'>
                                    <Rating ratings={4.5} />
                                </div>
                                <span className=' text-green-500'>(23 reviews)</span>
                            </div>
                            <div className='text-2xl text-red-500 font-bold flex gap-3'>
                                {
                                    discount !== 0 ? <>
                                        Price: <h2 className='line-through'>$500</h2>
                                        <h2>${500 - Math.floor((500 * discount) / 100)} (-{discount}%)</h2>
                                    </> : <h2>Price : $200</h2>
                                }
                            </div>
                            <div className='text-slate-600'>
                                <p>Experience powerful sound anywhere you go with our Wireless Bluetooth Speaker. This compact yet robust speaker delivers high-definition
                                     sound with deep bass and crystal-clear highs. With up to 12 hours of playtime on a single charge, you can enjoy your favorite tunes 
                                     all day long. The speaker is waterproof and dustproof, making it perfect for pool parties, beach outings, or camping trips. 
                                     Plus, with Bluetooth 5.0 technology, you can connect effortlessly to your smartphone, tablet, or any other Bluetooth-enabled device.</p>
                            </div>
                            <div className='flex gap-3 pb-10 border-b'>
                                {
                                    stock ? <>
                                        <div className='flex bg-slate-200 h-[50px] justify-center items-center text-xl'>
                                            <div className='px-6 cursor-pointer'>-</div>
                                            <div className='px-6'>{stock}</div>
                                            <div className='px-6 cursor-pointer'>+</div>
                                        </div>
                                        <div>
                                            <button className='px-8 py-3 h-[50px] cursor-pointer hover:shadow-lg hover:shadow-[#852770]/40
                                             bg-[#852770] text-white rounded-sm'>Add To Cart</button>
                                        </div>
                                    </> : ''
                                }
                                <div>
                                    <div className='h-[50px] w-[50px] flex justify-center items-center cursor-pointer hover:shadow-lg
                                     hover:shadow-cyan-500 bg-cyan-500 text-white rounded-sm'>
                                        <FaHeart/>
                                     </div>
                                </div>
                            </div>
                            <div className='flex pt-5 gap-5'>
                                <div className='w-[150px] text-black font-bold text-xl flex flex-col gap-5'>
                                    <span>Availability</span>
                                    <span>Share On</span>
                                </div>
                                <div className='flex flex-col gap-5'>
                                    <span className={`text-${stock ? 'green' : 'red'}-500 text-md`}>~
                                        {stock ? `In Stock(${stock})` : 'Out of Stock'}
                                    </span>
                                    <ul className='flex justify-start items-center gap-3'>
                                        <li>
                                            <a className='w-[38px] h-[38px] hover:bg-[#852770] hover:text-white flex justify-center
                                            rounded-full items-center bg-indigo-500 text-white' href="#"><FaFacebookF /></a>
                                        </li>
                                        <li>
                                            <a className='w-[38px] h-[38px] hover:bg-[#852770] hover:text-white flex justify-center
                                            rounded-full items-center bg-cyan-500 text-white' href="#"><FaTwitter /></a>
                                        </li>
                                        <li>
                                            <a className='w-[38px] h-[38px] hover:bg-[#852770] hover:text-white flex justify-center
                                            rounded-full items-center bg-purple-500 text-white' href="#"><FaLinkedin /></a>
                                        </li>
                                        <li>
                                            <a className='w-[38px] h-[38px] hover:bg-[#852770] hover:text-white flex justify-center
                                            rounded-full items-center bg-blue-500 text-white' href="#"><FaGithub /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='flex gap-3 pb-3'>
                            {
                                stock ? <button className='px-8 py-3 h-[50px] cursor-pointer hover:shadow-lg hover:shadow-green-500/40
                                bg-[#2a7a76] text-white rounded-sm'>Buy Now</button>: ''
                            }
                                <Link to='#' className='px-8 py-3 h-[50px] cursor-pointer hover:shadow-lg hover:shadow-red-500/40
                                bg-red-500 text-white rounded-sm'>Chat Seller</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto pt-8 pb-16'>
                    <div className='flex flex-wrap'>
                        <div className='w-[72%] md-lg:w-full'>
                            <div className='pr-4 md-lg:pr-0'>
                                <div className='grid grid-cols-2 '>
                                    <button onClick={() => setState('reviews')} className={`py-1 hover:text-white px-5 hover:bg-[#852770]
                                         ${state === "reviews" ? 'bg-[#852770] text-white' : 'bg-slate-200 text-slate-600'}rounded-sm`}>Reviews</button>
                                    <button onClick={() => setState('description')} className={`py-1 hover:text-white px-5 hover:bg-[#852770]
                                         ${state === "description" ? 'bg-[#852770] text-white' : 'bg-slate-200 text-slate-600'} rounded-sm`}>Description</button>
                                </div>
                                <div>
                                    {
                                        state === 'reviews' ? <Reviews /> : <p className='py-5 text-slate-600'>
                                            Meet your new smart home companion, the Smart Speaker with Voice Assistant. This versatile speaker combines 
                                            excellent sound quality with the convenience of a built-in voice assistant. Ask it to play your favorite songs, 
                                            control your smart home devices, set reminders, or answer questions—all hands-free. With a sleek design and 
                                            multi-room audio capabilities, this smart speaker seamlessly blends into any environment while keeping you 
                                            connected and entertained. Meet your new smart home companion, the Smart Speaker with Voice Assistant. This versatile speaker combines 
                                            excellent sound quality with the convenience of a built-in voice assistant. 
                                        </p>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='w-[28%] md-lg:w-full'>
                            <div className='pl-4 md-lg:pl-0'>
                                <div className='px-3 py-2 text-slate-600 bg-slate-200'>
                                    <h2 className='font-bold'>From GleamStreet</h2>
                                </div>
                                <div className='flex flex-col gap-5 mt-3 border p-3'>
                                    {
                                        [1,2,3].map((p,i) => {
                                            return(
                                                <Link className='block'>
                                                    <div className='relative h-[270px]'>
                                                        <img className='w-full h-full' src={`http://localhost:3000/images/products/${p}.webp`} alt="" />
                                                        {
                                                            discount !==0 && <div className='flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full
                                                             bg-red-500 font-semibold text-xs left-2 top-2'>
                                                               {discount}%
                                                            </div>

                                                        }
                                                    </div>
                                                    <h2 className='text-slate-600 py-1 font-bold'>Product Name</h2>
                                                    <div className='flex gap-2'>
                                                        <h2 className='text-lg font-bold text-blue-400'>$523</h2>
                                                        <div className='flex items-center'>
                                                            <Rating ratings={4.5} />
                                                        </div>
                                                    </div>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
            <div className='w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto pb-10'>
                <h2 className='text-2xl py-8 text-slate-600 font-bold'>Related Products</h2>
                <div>
                    <Swiper
                    slidesPerView='auto'
                    breakpoints={{
                        1280: {
                            slidesPerView: 4
                        },
                        565: {
                            slidesPerView: 2
                        },
                    }}
                    spaceBetween={25}
                    loop={true}
                    pagination={{
                        clickable: true,
                        el: '.custom_bullet'
                    }}
                    modules={[Pagination]}
                    className='mySwiper'
                    >
                        {
                            [1,2,3,4,5,6].map((p,i) => {
                                return(
                                    <SwiperSlide key={i}>
                                        <Link className='block'>
                                            <div className='relative h-[250px]'>
                                                <div className='w-full h-full'>
                                                    <img className='w-full h-full' src={`http://localhost:3000/images/products/${p}.webp`} alt="" />
                                                    <div className='absolute h-full w-full top-0 left-0 bg-[#000] opacity-25 hover:opacity-50 transition-all duration-500'></div>
                                                    {
                                                        discount !==0 && <div className='flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full
                                                            bg-red-500 font-semibold text-xs left-2 top-2'>
                                                            {discount}%
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                            <div className='p-4 flex flex-col gap-1'>
                                            <h2 className='text-slate-600 text-lg font-bold'>Product Name</h2>
                                                <div className='flex justify-start items-center gap-3'>
                                                    <h2 className='text-lg font-bold text-blue-400'>$523</h2>
                                                    <div className='flex'>
                                                        <Rating ratings={4.5} />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
                <div className='w-full flex justify-center items-center pt-8'>
                    <div className='custom_bullet justify-center gap-3 !w-auto'></div>
                </div>
            </div>
            </section>
            <Footer />

        </div>
    );
};

export default Details;