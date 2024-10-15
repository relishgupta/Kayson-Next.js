import Image from 'next/image';
import React from 'react';

import chairman from "../../public/assets/img/map.png";

const About = () => {
  return (
    <section className="bg-white py-1">
      {/* Header Section */}
      <div className="bg-orange-500 text-white py-6 px-4 text-center">
        <h1 className="text-3xl font-bold italic">
          Kayson Thinners & Chemicals - Where every brushstroke tells a tale of quality, trust, and timeless craftsmanship.
        </h1>
      </div>

      {/* About Kayson Section */}
      <div className="max-w-6xl md:max-w-7xl mx-auto px-4 md:px-0 py-12">
        <h2 className="text-center text-3xl font-bold text-[#1b0b41] mb-8">ABOUT KAYSON</h2>

        <p className="text-[#1b0b41] text-xl leading-7">
          Established in 1980, Kayson Thinners & Chemicals is a firm of dedication, quality, and unwavering commitment. 
          Nestled in the heart of Jalandhar, Punjab, India, we take pride in being a beacon of trust and dependability in 
          paint and chemicals. Our journey began with a vision – to deliver not just products, but an experience. 
          We've crafted a legacy of excellence that revolves around understanding our client's needs and surpassing their expectations.
        </p>

        <p className="text-[#1b0b41] text-xl leading-7">
          What sets us apart is not just the products we manufacture, but the ethos that drives us forward. Our team, 
          a symphony of highly experienced professionals, forms the backbone of our success. Their passion for perfection, 
          combined with a client-centric approach, has been instrumental in building a brand that stands tall in the industry. 
          At Kayson Thinners & Chemicals, we don’t just promise; we deliver. Our strong logistic support ensures that our premium 
          range of products reaches our clients within the promised time frame. It's not just about timely delivery; it's about 
          keeping the trust intact.
        </p>

        <p className="text-[#1b0b41] text-xl leading-7 mb-6">
          Quality is our hallmark, and we take immense pride in providing a qualitative range of products that have garnered 
          us a positive record in the industry. Our commitment to fair business practices has created a wide distribution 
          network that spans far and wide, reaching every corner where quality matters. We believe in not just meeting 
          expectations but exceeding them. This philosophy has earned us the belief of our valued patrons. As we continue 
          our journey, we invite you to be a part of our story – a story of integrity, passion, and the relentless pursuit of excellence.
        </p>
      </div>

      {/* Vision Section */}
<div className="bg-orange-500 text-white py-14 px-8 relative max-w-md md:max-w-6xl mb-10">
  <h3 className="absolute top-0 md:top-10 -right-0 md:-right-20 bg-[#1b0b41] px-10 py-4 font-bold text-md">VISION</h3>
  <p className="text-xl font-bold text-[#1b0b41]">
    Kayson Thinners & Chemicals envisions a world where our products bring joy, inspiration, and long-lasting impressions. 
    Our vision is to be the preferred choice for those who demand quality, precision, durability, and a touch of artistic brilliance 
    in every stroke. Kayson Paints strives to be a symbol of excellence and creativity, enriching lives with vibrant colors.
  </p>
</div>

{/* Mission Section */}
<div className="bg-orange-500 text-white py-16 px-16 md:px-20 relative max-w-md md:max-w-6xl transform translate-x-12 ml-auto">
  <h3 className="absolute top-0 left-0 md:top-10 md:-left-24 bg-[#1b0b41] px-10 py-4 font-bold text-md">MISSION</h3>
  <p className="text-xl font-bold text-[#1b0b41]">
    At Kayson Thinners & Chemicals, our mission is to elevate the beauty and quality of living spaces through the creation and supply 
    of innovative, eco-friendly, and premium-quality paint products.
  </p>
</div>


      {/* Message from Chairman Section */}
      <div className="max-w-6xl md:max-w-7xl mx-auto px-4 md:px-0 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {/* Diagonal Borders Beside Chairman's Image */}
        <div className="relative">
          {/* Image placeholder */}
          <div className="w-full h-auto p-8 md:p-40 flex justify-center items-center">
            <Image src={chairman} className='w-96 h-[40vh]'/>
          </div>
          {/* Diagonal Borders */}
          <div className="absolute top-0 right-0 w-40 h-40 border-t-4 border-r-4 border-orange-500"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-orange-500"></div>
        </div>
        
        {/* Message from the Chairman */}
        <div>
          <h3 className="text-3xl font-bold text-[#1b0b41] mb-4">Message from Chairman</h3>
          <p className="text-[#1b0b41] text-lg leading-7 mb-4">
            I am delighted to share a pivotal development at Kayson Thinners & Chemicals, a prominent player in the manufacturing of 
            Paints, Thinners, and Tin Containers. Over the years, our commitment to delivering top-notch quality products has solidified 
            our position as a trusted brand, particularly in North India.
          </p>
          <p className="text-[#1b0b41] text-lg leading-7 mb-4">
            Today, I am thrilled to unveil a significant milestone – Kayson Thinners & Chemicals is extending its legacy into the world 
            of decorative paints. Our proficiency in crafting high-quality industrial solutions now converges with a foray into the decorative realm.
          </p>
          <p className="text-[#1b0b41] text-lg leading-7 mb-4">
            These paints are not just about adding color; they symbolize the durability, innovation, and superior quality synonymous with the 
            Kayson name. While we have been a stronghold in North India, I am pleased to announce our expansion into Delhi NCR and other states.
          </p>
          <p className="text-[#1b0b41] text-lg leading-7 mb-4">
            Thank you for your unwavering support. We look forward to defining new standards in the decorative paints industry, 
            fuelled by our passion for quality and excellence.
          </p>
          <p className="text-[#1b0b41] text-lg leading-7">
            Warm Regards,<br />
            [Chairman's Name]<br />
            <span className='font-bold'>CHAIRMAN</span><br />
            Kayson Thinners & Chemicals
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
