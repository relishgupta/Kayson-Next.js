import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import map from "../../public/assets/img/map.png";
import ContactSection from '@/components/HomeContact';

const Contact = () => {
  return (
    <>
      <ContactSection/>
      <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-white">
        <div className="max-w-6xl w-full bg-white flex flex-col md:flex-row overflow-hidden">
          <div className="w-full md:w-1/2 bg-gray-200 border-2 border-black flex justify-center items-center p-4 md:mb-6 md:mt-6">
            <div className="w-full h-full flex justify-center items-center border border-gray-400 text-gray-600 text-lg">
              <Image 
                src={map} 
                alt="Location Map" 
                layout="responsive" 
                objectFit="cover" 
                width={500} 
                height={300} 
                className="rounded-sm"
                />
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-orange-500 p-8 text-white py-12 md:py-28">
            <h2 className="text-4xl font-bold mb-4 text-center">CONTACT US</h2>
            <p className="text-md uppercase mb-8 tracking-wider font-bold text-[#1b0b41] text-center">Head Office</p>
            <div className="flex items-center mb-6">
              <h3 className="bg-[#1b0b41] text-lg font-bold px-24 py-2 w-full h-10">KAYSON THINNERS & CHEMICALS</h3>
            </div>
            <div className="flex items-center pt-5 mb-4">
              <FaMapMarkerAlt className="mr-4 text-2xl" />
              <div className='font-bold text-[#1b0b41]'>
                <p>Village Chandersain</p>
                <p>Kangniwal, Old Hoshiarpur Road,</p>
                <p>Jalandhar - 144 025</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="mr-4 text-2xl" />
              <a href="mailto:info@kaysonpaints.com" className="hover:underline text-[#1b0b41] font-bold">info@kaysonpaints.com</a>
            </div>
            <div className="flex items-center">
              <FaPhone className="mr-4 text-2xl" />
              <a href="tel:+911815039476" className="hover:underline text-[#1b0b41] font-bold">+91-181-5039476</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
