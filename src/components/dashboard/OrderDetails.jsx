import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { get_order_details } from '../../store/reducers/orderReducer';

const OrderDetails = () => {
    const orderId = useParams()
    const dispatch = useDispatch()
    const {myOrder} = useSelector(state => state.order)
    const {userInfo} = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(get_order_details(orderId))
    },[orderId])

    return (
        <div className='bg-white p-4'>
            <h2 className='text-slate-600 font-semibold pb-3'><span className='text-[#852770]'>#{myOrder._id}</span>,  <span className='pl-1'>{myOrder.date}</span></h2>
            <div className='grid grid-cols-2 gap-3'>
                <div className='flex flex-col gap-1'>
                    <h2 className='text-slate-600 font-semibold font-sans'>Deliver To: <span className='text-[#852770]'> {myOrder.shippingInfo?.name}</span></h2>
                    <p>
                        <span className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-2 rounded'>Home</span>
                        <span className='text-slate-600 text-sm'>{myOrder.shippingInfo?.address}, {myOrder.shippingInfo?.providence}, {myOrder.shippingInfo?.city}</span>
                    </p>
                    <p className='text-slate-600 text-md font-semibold'>
                        Email: <span className='text-[#852770]'>{userInfo.email}</span>
                    </p>
                </div>
                <div className='text-slate-600'>
                    <h2 className='font-mono'><span className='font-bold'>Price</span>: <span className='text-[#852770] font-semibold'>${myOrder.price}</span>  Include Shipping charges</h2>
                    <p className='font-mono'><span className='font-bold'>Payment Status</span>: <span className={`pu-[1px] text-xs px-3 ${myOrder.payment_status === 'paid' ? 
                        'bg-green-300 text-green-800' : 'bg-red-300 text-red-800'} rounded-md`}>{myOrder.payment_status}</span></p>
                    <p className='font-mono'><span className='font-bold'>Order Status</span>: <span className={`pu-[1px] text-xs px-3 ${myOrder.delivery_status === 'paid' ? 
                        'bg-green-300 text-green-800' : 'bg-red-300 text-red-800'} rounded-md`}>{myOrder.delivery_status}</span></p>
                </div>
                <div className='mt-4'>
                    <h2 className='text-slate-600 text-lg pb-2 font-sans font-bold'>Order Products</h2>
                    <div className='flex gap-5 flex-col'>
                        {
                            myOrder.products?.map((p,i) => <div key={i}>
                                <div className='flex gap-5 justify-start items-center text-slate-600'>
                                    <div className='flex gap-2'>
                                        <img className='w-[55px] h-[55px]' src={p.images[0]} alt="" />
                                        <div className='flex text-sm flex-col justify-start items-start'>
                                            <Link>{p.name}</Link>
                                            <p>Brand: {p.brand}</p>
                                            <p><span>Quantity: {p.quantity}</span></p>
                                        </div>
                                    </div>
                                    <div className='pl-4 flex flex-col'>
                                        <h2>${p.price - Math.floor((p.price*p.discount)/100)}</h2>
                                        <p className='line-through'>${p.price}</p>
                                        <p>{p.discount}%</p>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default OrderDetails;