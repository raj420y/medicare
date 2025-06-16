import React, { useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';


import doc1 from '../assets/doc1.jpg';
import doc2 from '../assets/doc2.png';
import doc3 from '../assets/doc3.png';
import doc4 from '../assets/doc4.png';
import doc5 from '../assets/doc5.png';
import doc6 from '../assets/doc6.png';
import doc7 from '../assets/doc7.png';
import doc8 from '../assets/doc8.png';
import doc9 from '../assets/doc9.png';
import doc10 from '../assets/doc10.png';
import doc11 from '../assets/doc11.png';
import doc12 from '../assets/doc12.png';
import doc13 from '../assets/doc13.png';
import doc14 from '../assets/doc14.png';
import doc15 from '../assets/doc15.png';
import doc16 from '../assets/doc16.png';
import doc17 from '../assets/doc17.png';
import doc18 from '../assets/doc18.png';
import doc19 from '../assets/doc19.png';
import doc20 from '../assets/doc20.png';
import About from './About';
import RelatedDoctors from './../components/RelatedDoctors';

const imagesMap = {
  doc1,
  doc2,
  doc3,
  doc4,
  doc5,
  doc6,
  doc7,
  doc8,
  doc9,
  doc10,
  doc11,
  doc12,
  doc13,
  doc14,
  doc15,
  doc16,
  doc17,
  doc18,
  doc19,
  doc20
};

const Appointment = () => {

  const {docId} = useParams()
  const {doctors} = useContext(AppContext)
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'] 

  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const fetchDocinfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
    console.log(docInfo);
    
  }

  const getAvailableSlots = async () => {
    setDocSlots([]);

    //getting current date
    let today = new Date()

    for (let i = 0 ; i < 7; i++) {

      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(currentDate);
      endTime.setHours(21,0,0,0)

      //setting hours 
        if (i === 0) {
      currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
      currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
    } else {
      currentDate.setHours(10);
      currentDate.setMinutes(0);
    }

      let timeSlots = []

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour : '2-digit', minute: '2-digit' })

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        })

        // Increment current time by 30 min
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      } 

      setDocSlots(prev => [...prev, timeSlots])
    }
  }

  useEffect(()=> {
    fetchDocinfo()
  }, [doctors,docId])

  useEffect( ()=>{
    if (docInfo) getAvailableSlots()
  }, [docInfo]);

  useEffect(()=>{
    console.log(docSlots);
    
  }, [docSlots] )

  return docInfo &&(
    <div>
    <div>
        <div className='flex flex-col sm:flex-row gap-4'>
          <div>
            <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={imagesMap[docInfo.image]} alt="" />
          </div>
          <div className=' border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
            <div className='pb-1 '>
            <p className='text-4xl'>{docInfo.name}</p>
          </div>
          <div className='flex gap-5 pb-3'>
            <p className='text-gray-500'>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='bg-gray-200 rounded-lg p-0.5 text-gray-500'>{docInfo.experience}</button>
          </div>
          <div className='pb-5'>
            <p className='pb-1 text-lg text-black text-sm'>About <img src="" alt="" /></p>
            <p className='text-sm text-gray-500 '> {docInfo.about} </p>
          </div>
          <p className='text-black'>Appointment fee: <span>{docInfo.fees} INR</span></p>
          </div>
        </div>

        <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'></div>
        <p>Booking slots</p>

        <div className='flex gap-3 items-center w-full overflow-x -scroll mt-4'>
           {docSlots.length > 0 && docSlots.map((item, index) => {
        const dateObj = new Date(item[0]?.datetime);
        return (
          <div onClick={()=> setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`} key={index}>
            <p>{daysOfWeek[dateObj.getDay()]}</p>
            <p>{dateObj.getDate()}</p>
          </div>
        );
      })}
        </div>
        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
        {docSlots.length && docSlots[slotIndex].map ((item, index)=> (
          <p onClick={()=> setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300' }`} key={index}>
            {item.time.toLowerCase()}
          </p>
        ))}
        </div>
        <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book an appointment</button>
    </div>
    <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
    
  )
}

export default Appointment;