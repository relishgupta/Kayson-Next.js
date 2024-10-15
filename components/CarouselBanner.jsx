"use client";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import banner1 from "../public/assets/img/banners/banner 1.webp";
import banner2 from "../public/assets/img/banners/banner 2.webp";
import banner3 from "../public/assets/img/banners/banner 3.webp";
import Image from 'next/image';

const CarouselBanner = () => {
  return (
    <div className="max-h-full">
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
          <Image src={banner1} alt="Banner 1" />
        </div>
        <div>
          <Image src={banner2} alt="Banner 2" />
        </div>
        <div>
          <Image src={banner3} alt="Banner 3" />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselBanner;
