import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20  '>


        {/* left side */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
            <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight '>
                Book Your  <br /> Appointment <br /> 
            </p>
            <div className='flex flex-col md:flex-row items-center text-[14px] text-white gap-3 mt-2 text-sm font-light'>
            <img className='' src={assets.group_profiles} alt="" />
            <p className=' mt-1'>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' /> schedule your appointment hassle-free</p>
        </div>

        <a className='flex items-center border px-8 py-3 bg-white rounded-full align-center text-[14px] text-gray text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 gap-0 hover:bg-blue-600 transition-transform duration-1500 active:scale-90 ' href="#speciality">
            Book appointment <img className='w-4 h-4 ml-2 mt-1' src={assets.arrow_icon} alt="" />
        </a>
        </div>

        {/* right side */}
        <div className='md:w-1/2 relative '>
            <img className='w-full md:absolute bottom-0 h-auto rounded-lg ' src={assets.header} alt="" />
        </div>
    </div>
    
  );
};

export default Header;