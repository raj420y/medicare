import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className=''>
        <div className='flex mt-40 gap-20 ml-5 '>

            {/* ------Left SEction------- */}
            <div className='ml-10 w-1/3 text-sm text-gray-800 '>
                <div className='flex'>
                    <img className="h-10 w-auto " src={assets.logo} alt="" />
                <span className=" mt-1 text-xl fint-semibold "><span className="text-teal-500">Medi</span><span className="text-blue-800">Care</span></span>
                </div>
                
                <p className='mt-5 leading-relaxed'>MediCare is your one-stop platform for seamless doctor appointments. Find trusted specialists, book consultations instantly, and access quality healthcare with ease. Your health is our priority—experience reliable medical care, anytime, anywhere.</p>
            </div>

            {/*--------- center section-------- */}
            <div className='ml-20 '>
                <h1 className=' text-2xl font-Poppins'>COMPANY</h1>
                <div className='flex flex-col gap-1 mt-8 text-sm text-gray-600 m-5'>
                    <a  href="" >Home</a>
                <a  href="">About us</a>
                <a href="">Delivery</a>
                <a  href="">Privacy  policy</a>
                </div>
            </div>

            {/* ------right section------- */}
            <div className='ml-20'>
                <h1 className='text-2xl   mb-10'>GET IN TOUCH</h1>

                <div className='text-sm text-gray-600  '>
                    <p className='mb-2'>+91-6295-0000-20</p>
                <p>koushikdutta5812@gmail.com</p>
                </div>
            </div>
        </div>
        <hr className='border-t-2 border-gray-300 my-5'/>
       <p className="text-center text-sm text-black-900 mb-5 ">
  Copyright 2025 @ koushik.dev - All Rights Reserved.
</p>



    </div>
  );
};

export default Footer;