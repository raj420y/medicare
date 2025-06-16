import React, { useContext } from 'react';
import Appointment from './Appointment';
import { AppContext } from '../context/AppContext';



const MyApointments = () => {

  const { doctors } = useContext(AppContext)


  return (
    <div>
        <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My Appointment</p>
        <div>
          {doctors.slice(0,2).map((item,index)=> (
            <div className=' flex gap-4 sm:gap-6 py-2 border-b' key={index}>
              <div className=''>
                <img className=' w-32 bg-indigo-50' src={item.image} alt="" />
              </div>
              <div className='flex-1 text-sm text-zinc-600'>
                <p className='text-neutral-800 font-semibold'>{item.name}</p>
                <p>{item.speciality}</p>
                <p className='text-zinc-700 font-medium mt-1'>Adress:</p>
                <p><span>Date & Time</span> 25, July, 2024 | 8:30 PM</p>
              </div>
              <div></div>
              <div className='flex flex-col gap-2 justify-end'>
                <button className=' w-20  text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>
                <button className=' w-20 text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel appointment</button>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default MyApointments;