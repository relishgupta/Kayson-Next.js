"use client"

import i1 from "../public/assets/img/paint/1.webp";
import i2 from "../public/assets/img/paint/2.jpg";
import i3 from "../public/assets/img/paint/3.webp";
import i4 from "../public/assets/img/paint/4.webp";
import i5 from "../public/assets/img/paint/5.webp";
import i6 from "../public/assets/img/paint/6.webp";
import i7 from "../public/assets/img/paint/7.webp";

import Image from 'next/image';
import React from 'react';

const PaintSection = () => {
  return (
    <section className="py-10">
      {/* Header */}
      <div className="text-center bg-orange-500 py-12 text-white mb-8">
        <h1 className="text-4xl md:text-5xl font-bold">KAYSON PAINTS</h1>
        <p className="text-2xl md:text-4xl">Precession | Performance | Perfection</p>
      </div>
      
      {/* Grid layout for images */}
      <div className="grid grid-cols-3 gap-4 max-w-screen-xl mx-auto px-4">
        {/* First Column (Left) - 2 Images */}
        <div className="grid grid-rows-2 gap-4">
          <Image src={i1} alt="Image 1" className="w-full h-[40vh] object-cover" />
          <Image src={i2} alt="Image 2" className="w-full h-[40vh] object-cover" />
        </div>

        {/* Second Column (Middle) - 3 Images */}
        <div className="grid grid-rows-3 gap-4">
          <Image src={i3} alt="Image 3" className="w-full h-[26vh] object-cover" />
          <Image src={i4} alt="Image 4" className="w-full h-[26vh] object-cover" />
          <Image src={i5} alt="Image 5" className="w-full h-[26vh] object-cover" />
        </div>

        {/* Third Column (Right) - 2 Images */}
        <div className="grid grid-rows-2 gap-4">
          <Image src={i6} alt="Image 6" className="w-full h-[40vh] object-cover" />
          <Image src={i7} alt="Image 7" className="w-full h-[40vh] object-cover" />
        </div>
      </div>
    </section>
  );
};

export default PaintSection;
