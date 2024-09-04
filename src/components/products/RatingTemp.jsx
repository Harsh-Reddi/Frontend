import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';

const RatingTemp = ({rating}) => {
    if(rating === 5){
        return(
            <>
                <span className='text-[#Edbb0e]'><FaStar /></span>
                <span className='text-[#Edbb0e]'><FaStar /></span>
                <span className='text-[#Edbb0e]'><FaStar /></span>
                <span className='text-[#Edbb0e]'><FaStar /></span>
                <span className='text-[#Edbb0e]'><FaStar /></span>
            </>
        )
    }
    else if(rating === 4){
        return(
            <>
                <span className='text-[#Edbb0e]'><FaStar /></span>
                <span className='text-[#Edbb0e]'><FaStar /></span>
                <span className='text-[#Edbb0e]'><FaStar /></span>
                <span className='text-[#Edbb0e]'><FaStar /></span>
                <span className='text-slate-600'><CiStar /></span>
            </>
        )
    }
    else if(rating === 3){
        return(
            <>
                <span className='text-[#Edbb0e]'><FaStar /></span>
                <span className='text-[#Edbb0e]'><FaStar /></span>
                <span className='text-[#Edbb0e]'><FaStar /></span>
                <span className='text-slate-600'><CiStar /></span>
                <span className='text-slate-600'><CiStar /></span>
            </>
        )
    }
    else if(rating === 2){
        return(
            <>
                <span className='text-[#Edbb0e]'><FaStar /></span>
                <span className='text-[#Edbb0e]'><FaStar /></span>
                <span className='text-slate-600'><CiStar /></span>
                <span className='text-slate-600'><CiStar /></span>
                <span className='text-slate-600'><CiStar /></span>
            </>
        )
    }
    else if(rating === 1){
        return(
            <>
                <span className='text-[#Edbb0e]'><FaStar /></span>
                <span className='text-slate-600'><CiStar /></span>
                <span className='text-slate-600'><CiStar /></span>
                <span className='text-slate-600'><CiStar /></span>
                <span className='text-slate-600'><CiStar /></span>
            </>
        )
    }
    else {
        return(
            <>
                <span className='text-slate-600'><CiStar /></span>
                <span className='text-slate-600'><CiStar /></span>
                <span className='text-slate-600'><CiStar /></span>
                <span className='text-slate-600'><CiStar /></span>
                <span className='text-slate-600'><CiStar /></span>
            </>
        )
    }
};

export default RatingTemp;