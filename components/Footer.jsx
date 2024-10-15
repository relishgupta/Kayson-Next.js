import React from 'react';
import { FiPhone, FiMail } from 'react-icons/fi'; // For phone and mail icons
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#1b0b41] text-white">
      <div className="container mx-auto px-6 pt-20">
        <div className="flex flex-col xl:flex-row justify-between items-start md:items-center">
          {/* Left Section - Company Name and Address */}
          <div className="text-left mb-6 md:mb-0 font-bold">
            <h2 className="text-orange-500 text-3xl font-bold">
              KAYSON THINNERS AND CHEMICALS
            </h2>
            <p className="text-white mt-2">
              Village Chandersain - Kangniwal
              <br />
              Old Hoshiarpur Road, Jalandhar - 144025
            </p>
          </div>

          {/* Right Section - Store Location Link and Contact Info */}
          <div className="flex flex-col md:flex-col items-start md:items-end">
            <div className="mb-4 md:mb-0 md:mr-6">
              <Link href="/store-locator" className="text-white font-bold underline ">
                Locate Nearest Store
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 font-bold">
              <div className="flex ">
                <FiPhone className="mr-1" /> +91-181-5039476
              </div>
              <span className="hidden md:inline-block">|</span>
              <div className="flex items-center">
                <FiMail className="mr-1" /> info@kaysonpaints.com
              </div>
              <span className="hidden md:inline-block">|</span>
              <div className="flex items-center">
                <a href="https://www.kaysonpaints.com" target="_blank" rel="noopener noreferrer">
                  www.kaysonpaints.com
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Orange Bar */}
      </div>
        <div className="bg-orange-500 py-3 mt-6">
          <p className="flex justify-start md:justify-end ml-5 md:ml-0 md:mr-6 text-center text-sm font-bold text-black">
            © 2024 Kayson Paints. All Rights Reserved.
          </p>
        </div>
    </footer>
  );
};

export default Footer;