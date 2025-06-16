import group_doctors from './group_doctors.jpg'
import doc1Img from './doc1.jpg'
import doc2Img from './doc2.png'
import doc3Img from './doc3.png'
import doc4Img from './doc4.png'
import doc5Img from './doc5.png'
import doc6Img from './doc6.png'
import doc7Img from './doc7.png'
import doc8Img from './doc8.png'
import doc9Img from './doc9.png'
import doc10Img from './doc10.png'
import doc11Img from './doc11.png'
import doc12Img from './doc12.png'
import doc13Img from './doc13.png'
import doc14Img from './doc14.png'
import doc15Img from './doc15.png'
import doc16Img from './doc16.png'
import doc17Img from './doc17.png'
import doc18Img from './doc18.png'
import doc19Img from './doc19.png'
import doc20Img from './doc20.png'

import Gynecologist from './Gynecologist.png'
import General_physician from './General_physician.png'
import Pediatrician from './Pediatrician.png'
import Neurologist from './Neurologist.png'
import Gastroenterologist from './Gastroenterologist.png'
import Dermatologist from './Dermatologist.png'
import right_icon from './right_icon.png'
import cross from './cross.png'
import logo from './logo.jpg'
import profile_pic from './profile_pic.png'
import down_arrow from './down_arrow.png'
import group_profiles from './group_profiles.png'
import arrow_icon from './arrow_icon.png'
import header from './header.png'
import Banner from './Banner.png'
import about_us from './about_us.jpg'
import menu from './menu.png'
import contactus from './contactus.jpg'



export const assets = {
    contactus,
    menu,
    about_us,
    group_doctors,
    Banner,
    Gynecologist,
    General_physician,
    Pediatrician,
    Gastroenterologist,
    Neurologist,
    Dermatologist,
    right_icon,
    cross,
    logo,
    profile_pic,
    down_arrow,
    group_profiles,
    arrow_icon,
    header,
    doc1Img,
    doc2Img,
    doc3Img,
    doc4Img,
    doc5Img,
    doc6Img,
    doc7Img,
    doc8Img,
    doc9Img,
    doc10Img,
    doc11Img,
    doc12Img,
    doc13Img,
    doc14Img,
    doc15Img,
    doc16Img,
    doc17Img,
    doc18Img,
    doc19Img,
    doc20Img

}


export const specialityData = [

    {
        speciality: 'General_physician',
        image: General_physician
    },

    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },

    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },

    {
        speciality: 'Pediatrician',
        image: Pediatrician
    },

    {
        speciality: 'Neurologist',
        image: Neurologist
    },

    {
       speciality: 'Gastroenterologist',
       image: Gastroenterologist
    }
]


export const doctors = [
   {
        _id: 'doc1',
        name: 'Dr. Anirban Dutta',
        image: doc1Img,
        speciality: 'General_physician',
        degree: 'MBBS',
        experience: '4 years',
        about: 'Dr. Sushmita Dutta is an experienced General Physician committed to providing quality healthcare with compassion and expertise.',
        fees: 500,
        address: {
            line1: 'Nababharati, Barasat, West Bengal'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Priya Mehra',
        image: doc2Img,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '8 years',
        about: 'Dr. Priya Mehra specializes in women’s health and is dedicated to providing personalized gynecological care.',
        fees: 700,
        address: {
            line1: 'Salt Lake City, Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Sameer Roy',
        image: doc3Img,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '5 years',
        about: 'Dr. Sameer Roy is known for his expertise in treating skin conditions with modern dermatological practices.',
        fees: 600,
        address: {
            line1: 'Park Street, Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Payel Bose',
        image: doc4Img,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '10 years',
        about: 'Dr.  Payel Bose is a leading Neurologist with vast experience in treating neurological disorders.',
        fees: 1000,
        address: {
            line1: 'Jadavpur, Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Raghav Sen',
        image: doc5Img,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '7 years',
        about: 'Dr. Raghav Sen provides exceptional care for gastrointestinal issues with a patient-focused approach.',
        fees: 800,
        address: {
            line1: 'Dum Dum, Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Alex Dutta',
        image: doc6Img,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '6 years',
        about: 'Dr. Shweta Pandey is a compassionate Pediatrician who offers quality care for children and adolescents.',
        fees: 650,
        address: {
            line1: 'Ballygunge, Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Shweta Pandey',
        image: doc7Img,
        speciality: 'General_physician',
        degree: 'MBBS',
        experience: '3 years',
        about: 'Dr. Aman Gupta is dedicated to diagnosing and treating a variety of general health issues.',
        fees: 400,
        address: {
            line1: 'New Town, Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Neha Sharma',
        image: doc8Img,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '9 years',
        about: 'Dr. Neha Sharma specializes in women’s reproductive health, offering quality care and support.',
        fees: 750,
        address: {
            line1: 'Garia, Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Ravi Patel',
        image: doc9Img,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '6 years',
        about: 'Dr. Ravi Patel is known for his advanced dermatological treatments and patient-focused care.',
        fees: 600,
        address: {
            line1: 'Shyambazar, Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Rishi Kumar',
        image: doc10Img,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '11 years',
        about: 'Dr. Sushmita Dey is a specialist in neurology, with expertise in handling critical neurological conditions.',
        fees: 1200,
        address: {
            line1: 'Esplanade, Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Sandeep Malhotra',
        image: doc11Img,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '8 years',
        about: 'Dr. Rishi Kumar is known for his exceptional care in treating digestive and liver disorders.',
        fees: 850,
        address: {
            line1: 'Rajarhat, Kolkata, West Bengal'
        }
    },

     {
        _id: 'doc12',
        name: 'Dr. Sushmita Dey',
        image: doc12Img,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '5 years',
        about: 'Dr. Sandeep Malhotra is known for his gentle approach and exceptional care for children.',
        fees: 600,
        address: {
            line1: 'Behala, Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Aparna Nair',
        image: doc13Img,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '12 years',
        about: 'Dr. Aparna Nair has extensive experience in women’s health and gynecological surgeries.',
        fees: 800,
        address: {
            line1: 'Kasba, Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Manish Gupta',
        image: doc14Img,
        speciality: 'General_physician',
        degree: 'MBBS',
        experience: '4 years',
        about: 'Dr. Manish Gupta is committed to providing holistic treatment for common illnesses.',
        fees: 500,
        address: {
            line1: 'Kankurgachi, Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Rekha Das',
        image: doc15Img,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '7 years',
        about: 'Dr. Rekha Das specializes in skin care and cosmetology, providing modern solutions for skin health.',
        fees: 700,
        address: {
            line1: 'Howrah, Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc16',
        name: 'Dr. Subhajit Sen',
        image: doc16Img,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '9 years',
        about: 'Dr. Subhajit Sen is a respected Neurologist known for his work with neurodegenerative diseases.',
        fees: 1100,
        address: {
            line1: 'Baranagar, Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc17',
        name: 'Dr. Ritu Sharma',
        image: doc17Img,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '6 years',
        about: 'Dr. Ritu Sharma is known for her expertise in digestive health and patient-centered care.',
        fees: 750,
        address: {
            line1: 'Lake Town, Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc18',
        name: 'Dr. Ayan Mitra',
        image: doc18Img,
        speciality: 'Pediatrician',
        degree: 'MBBS',
        experience: '5 years',
        about: 'Dr. Ayan Mitra provides specialized care for infants, children, and adolescents.',
        fees: 650,
        address: {
            line1: 'Joka, Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc19',
        name: 'Dr. Meera Singh',
        image: doc19Img,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '10 years',
        about: 'Dr. Meera Singh has a strong reputation for her work in obstetrics and gynecological surgeries.',
        fees: 850,
        address: {
            line1: 'Sealdah, Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc20',
        name: 'Dr. Nishant Kumar',
        image: doc20Img,
        speciality: 'General_physician',
        degree: 'MBBS',
        experience: '4 years',
        about: 'Dr. Nishant Kumar is a trusted General Physician providing primary care and preventive medicine.',
        fees: 500,
        address: {
            line1: 'Kalighat, Kolkata, West Bengal'
        }
    }
]


