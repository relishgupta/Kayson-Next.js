"use client";

import { FaCertificate, FaLightbulb, FaUsers, FaHandshake, FaCog, FaLeaf } from 'react-icons/fa'; // Import icons matching the values

const WhyUs = () => {
  return (
    <section className="py-14 md:py-32 md:px-28 bg-gray-100">
      <div className="container mx-auto px-4 md:px-0 flex flex-col md:flex-row items-start md:items-center">
        
        {/* Left side - Title */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-4xl font-semibold text-gray-900">Why Choose Us?</h2>
        </div>

        {/* Right side - Reasons */}
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First column */}
          <div>
            <div className="flex items-start space-x-3">
              <FaCertificate className="text-orange-500 w-12 h-12" />
              <div>
                <h4 className="text-2xl font-bold text-orange-500">Quality First</h4>
                <p className="text-gray-700">Commitment to delivering top-notch paint products with unwavering quality standards.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 mt-6">
              <FaLightbulb className="text-orange-500 w-12 h-12" />
              <div>
                <h4 className="text-2xl font-bold text-orange-500">Innovation Drive</h4>
                <p className="text-gray-700">Foster a culture of continuous improvement and forward-thinking to stay ahead in the industry.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 mt-6">
              <FaUsers className="text-orange-500 w-16 h-16" />
              <div>
                <h4 className="text-2xl font-bold text-orange-500">Customer Focus</h4>
                <p className="text-gray-700">Prioritize customer needs, providing exceptional products and services that exceed expectations.</p>
              </div>
            </div>
          </div>

          {/* Second column */}
          <div>
            <div className="flex items-start space-x-3">
              <FaHandshake className="text-orange-500 w-16 h-16" />
              <div>
                <h4 className="text-2xl font-bold text-orange-500">Integrity Matters</h4>
                <p className="text-gray-700">Uphold the highest levels of honesty, transparency, and ethical conduct in all business interactions.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 mt-6">
              <FaCog className="text-orange-500 w-16 h-16" />
              <div>
                <h4 className="text-2xl font-bold text-orange-500">Reliability Assurance</h4>
                <p className="text-gray-700">Maintain a track record of consistent and reliable product delivery, building trust with customers.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 mt-6">
              <FaLeaf className="text-orange-500 w-16 h-16" />
              <div>
                <h4 className="text-2xl font-bold text-orange-500">Environmental Responsibility</h4>
                <p className="text-gray-700">Minimizing our environmental footprint by developing and promoting eco-friendly paint solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
