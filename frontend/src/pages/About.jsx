import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="px-8 py-12 bg-white">
      {/* Heading */}
      <div className="text-center text-3xl font-semibold text-gray-700 mb-12">
        ABOUT <span className="text-blue-600">US</span>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12">
        {/* Image */}
        <img
          className="w-full md:w-[400px] h-[300px] object-cover rounded shadow-md"
          src={assets.about_us}
          alt="About Us"
        />

        {/* About Info */}
        <div className="text-gray-700 max-w-lg text-sm">
          <p className="mb-4">
            Welcome to <span className="font-medium">MediCare</span>, where we are committed to transforming the way people access healthcare. Our mission is to make booking doctor appointments simple, secure, and stress-free for everyone.
          </p>

          <p className="mb-4">
            We connect patients with trusted, experienced, and verified doctors across various specialities — all at your fingertips. Whether it's a general consultation, a specialist appointment, or follow-up care, MediCare ensures you're matched with the right doctor at the right time.
          </p>

          <h2 className="text-lg font-semibold mb-2">Our Vision</h2>
          <p>
            To be India’s most reliable and user-centric platform for digital healthcare services, ensuring accessibility, convenience, and trust for every patient.
          </p>

          <p className="mt-4 font-medium">
            Join us in redefining healthcare—one appointment at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
