

import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="px-8 py-12 bg-white">
      {/* Heading */}
      <div className="text-center text-3xl font-semibold text-gray-700 mb-12">
        CONTACT <span className="text-blue-600">US</span>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12">
        {/* Image */}
        <img
          className="w-full md:w-[400px] h-[300px] object-cover rounded shadow-md"
          src={assets.contactus}
          alt="Contact Us"
        />

        {/* Contact Info */}
        <div className="text-gray-700 max-w-lg">
          <h2 className="text-xl font-bold mb-4">Our Office</h2>

          <p className="mb-2 font-medium">MediConnect – Kolkata Office</p>

          <p className="mb-2">2nd Floor, Ecospace Business Park</p>
          <p className="mb-2">Plot No. 2F/11, New Town, Action Area II</p>
          <p className="mb-2">Kolkata – 700156, West Bengal, India</p>

          <div className="mt-6 space-y-2">
            <p>📞 <span className="font-medium">Phone:</span> +91 9876543210</p>
            <p>✉️ <span className="font-medium">Email:</span> support@mediconnect.in</p>
            <p>🕒 <span className="font-medium">Office Hours:</span> Mon–Sat, 10:00 AM – 6:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
