import React from 'react';
import Image from 'next/image';
import GIT from "../public/assets/img/GIT.png";

const ContactSection = () => {
  return (
    <section className="relative bg-orange-500">
      <div className="flex flex-col md:flex-row items-center justify-start px-6 py-3">
        <div className="flex-1 flex items-center justify-start">
          <Image 
            src={GIT}
            alt="Get in Touch Image"
            width={350}
            height={350}
            className="hidden md:inline-block rounded-lg"
          />
        </div>

        <div className="flex-1">
          <form className="p-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="col-span-1 p-3 h-10 w-full sm:w-auto border border-gray-300 focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Email"
                className="col-span-1 p-3 h-10 w-full sm:w-auto border border-gray-300 focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Mobile No."
                className="col-span-1 p-3 h-10 w-full sm:w-auto border border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <textarea
                placeholder="Message"
                className="col-span-2 sm:col-span-2 p-3 w-full h-20 border border-gray-300 focus:ring-2 focus:ring-blue-500"
              />

              <button className="flex items-center justify-center col-span-1 w-full bg-blue-800 text-white h-10">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
