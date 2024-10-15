"use client";

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="bg-[#1b0b41] text-white py-4 md:text-md md:font-bold">
      <div className="container mx-auto flex flex-col md:flex-row md:gap-8 justify-end items-center px-4 md:px-32 space-y-2 md:space-y-0">

        {/* Contact Information Section */}
        <div className="flex flex-row space-x-3 md:space-x-6 justify-end items-center text-center md:text-right">
          {/* Mobile View: Icons Only */}
          <span className="flex items-center space-x-1 mb-2 md:mb-0">
            <FaPhone className="inline-block md:hidden" /> {/* Icon for mobile */}
            <span className="hidden md:inline">+91-181-5039476</span> {/* Text for desktop */}
          </span>
          <span className="flex items-center space-x-1 mb-2 md:mb-0">
            <FaEnvelope className="inline-block md:hidden" /> {/* Icon for mobile */}
            <span className="hidden md:inline">info@kaysonpaints.com</span> {/* Text for desktop */}
          </span>
          <span className="flex items-center mb-2 md:mb-0">
            <FaGlobe className="inline-block md:hidden" /> {/* Icon for mobile */}
            <span className="hidden md:inline">www.kaysonpaints.com</span> {/* Text for desktop */}
          </span>
        </div>

        {/* Social Media Icons Section */}
        <div className="flex justify-center md:justify-end space-x-4">
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp className="text-white hover:text-gray-300 w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="text-white hover:text-gray-300 w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-white hover:text-gray-300 w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube className="text-white hover:text-gray-300 w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
