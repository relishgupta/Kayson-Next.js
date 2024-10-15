"use client"

import Image from 'next/image';
import i1 from "../public/assets/img/inspirations/1.jpg";
import i2 from "../public/assets/img/inspirations/2.jpg";
import i3 from "../public/assets/img/inspirations/3.jpg";
import i4 from "../public/assets/img/inspirations/4.webp";
import i5 from "../public/assets/img/inspirations/5.jpg";

const InspirationSection = () => {
  return (
    <section className="py-4">
      {/* Heading */}
      <div className="text-center py-12">
        <h1 className="text-5xl font-medium">INSPIRATIONS</h1>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-xl mx-auto px-4 md:px-0">
        {/* First Column (2 images) */}
        <div className="grid grid-rows-2 gap-4">
          <div className="relative">
            <Image src={i1} alt="Beautiful and Bold" className="w-full h-[40vh] object-cover border-2 border-black" />
            <p className="absolute bottom-4 right-4 text-white text-xl italic font-bold">BEAUTIFUL AND BOLD</p>
          </div>
          <div className="relative">
            <Image src={i2} alt="Natural Nature" className="w-full h-[40vh] object-cover border-2 border-black" />
            <p className="absolute bottom-4 right-4 text-white text-xl italic font-bold">NATURAL NATURE</p>
          </div>
        </div>

        {/* Second Column (1 large image and 2 small images) */}
        <div className="grid grid-rows-2 gap-4">
          {/* First Row - Large Image */}
          <div className="relative">
            <Image src={i3} alt="Earthy Elegance" className="w-full h-[40vh] object-cover border-2 border-black" />
            <p className="absolute bottom-4 right-4 text-white text-xl italic font-bold">EARTHY ELEGANCE</p>
          </div>

          {/* Second Row - 2 Small Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <Image src={i4} alt="Vibrant Vibe" className="w-full h-full object-cover border-2 border-black" />
              <p className="absolute bottom-4 right-4 text-white text-xl italic font-bold">VIBRANT VIBE</p>
            </div>
            <div className="relative">
              <Image src={i5} alt="Pastel Palette" className="w-full h-full object-cover border-2 border-black" />
              <p className="absolute bottom-4 right-4 text-white text-xl italic font-bold">PASTEL PALETTE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
