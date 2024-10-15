"use client"

import Image from 'next/image';
import i1 from "../public/assets/img/products/1.webp";
import i2 from "../public/assets/img/products/2.webp";
import i3 from "../public/assets/img/products/3.webp";
import i4 from "../public/assets/img/products/4.webp";
import i5 from "../public/assets/img/products/5.webp";

const ProductSection = () => {
  return (
    <section className="py-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-medium">OUR PRODUCTS</h1>
      </div>

      {/* First row with 2 images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-xl mx-auto px-4 md:px-0">
        <div className="col-span-1">
          <div className="relative">
            <Image src={i1} alt="Coating & Finishing" className="w-full h-[300px] object-cover border-2 border-black"/>
            <p className="text-left -mt-4 ml-2 bg-white text-lg font-semibold border-4 border-orange-500 inline-block px-4 md:px-24 py-1">Coating & Finishing</p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative">
            <Image src={i2} alt="Industrial Paints" className="w-full h-[300px] object-cover border-2 border-black"/>
            <p className="text-left -mt-4 ml-2 bg-white text-lg font-semibold border-4 border-orange-500 inline-block px-4 md:px-24 py-1">Industrial Paints</p>
          </div>
        </div>
      </div>

      {/* Second row with 3 images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-xl mx-auto px-4 md:px-0 mt-8">
        <div className="col-span-1">
          <div className="relative">
            <Image src={i3} alt="Decorative Paints" className="w-full h-[300px] object-cover border-2 border-black"/>
            <p className="text-left -mt-4 ml-2 bg-white text-lg font-semibold border-4 border-orange-500 inline-block px-4 py-1">Decorative Paints</p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative">
            <Image src={i4} alt="Automotive Finishing" className="w-full h-[300px] object-cover border-2 border-black"/>
            <p className="text-left -mt-4 ml-2 bg-white text-lg font-semibold border-4 border-orange-500 inline-block px-4 py-1">Automotive Finishing</p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative">
            <Image src={i5} alt="Thinners" className="w-full h-[300px] object-cover border-2 border-black"/>
            <p className="text-left -mt-4 ml-2 bg-white text-lg font-semibold border-4 border-orange-500 inline-block px-4 py-1">Thinners</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
