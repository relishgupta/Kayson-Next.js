"use client";

import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import i1 from "../public/assets/img/testimonials/1.jpg";
import i2 from "../public/assets/img/testimonials/2.jpg";
import i3 from "../public/assets/img/testimonials/3.jpg";
import i4 from "../public/assets/img/testimonials/4.jpg";

import Image from 'next/image';

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2, // Show 2 slides on larger screens
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablets and smaller screens
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      name: 'Sidak Vats',
      content: 'The service was exceptional, and the team went above and beyond to ensure my needs were met. I highly recommend them!',
      image: i1,
    },
    {
      id: 2,
      name: 'Aarav Mehta',
      content: 'Working with this team has been a fantastic experience. Their attention to detail and professionalism is unmatched.',
      image: i2,
    },
    {
      id: 3,
      name: 'Alice Thompson',
      content: 'I was incredibly impressed with the level of service and support I received. Definitely a great experience!',
      image: i3,
    },
    {
      id: 4,
      name: 'Robert Johnson',
      content: 'Their work ethic and dedication have truly set them apart. Highly recommended for anyone looking for great results!',
      image: i4,
    },
  ];

  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-32">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">Happy Customers</h2>
        <p className="text-base lg:text-lg text-gray-600 text-center mb-8 lg:mb-12">
          Hear what our clients have to say about our services
        </p>

        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-4 md:p-6 bg-gray-200">
              <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 text-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 mx-auto rounded-full object-cover mb-4"
                />
                <p className="text-gray-700 italic mb-4 text-sm lg:text-base">"{testimonial.content}"</p>
                <h4 className="text-lg lg:text-xl font-semibold text-gray-900">{testimonial.name}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

// Custom Previous Arrow with React Icons
function SamplePrevArrow({ onClick }) {
  return (
    <div
      className="bg-black rounded-full p-2 text-white flex items-center justify-center absolute left-0 z-10 cursor-pointer"
      onClick={onClick}
      style={{ top: '50%', transform: 'translateY(-50%)' }} // Align vertically
    >
      <FaArrowLeft />
    </div>
  );
}

// Custom Next Arrow with React Icons
function SampleNextArrow({ onClick }) {
  return (
    <div
      className="bg-black rounded-full p-2 text-white flex items-center justify-center absolute right-0 z-10 cursor-pointer"
      onClick={onClick}
      style={{ top: '50%', transform: 'translateY(-50%)' }} // Align vertically
    >
      <FaArrowRight />
    </div>
  );
}


export default TestimonialSection;
