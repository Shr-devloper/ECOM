"use client"
import React from 'react';
import Carousel from 'react-multi-carousel';
import { useRouter } from 'next/navigation';
import 'react-multi-carousel/lib/styles.css';
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2';

const CustomLeftArrow = ({ onClick }) => (
  <button
    className='hidden md:block absolute bottom-16 right-24 p-2'
    onClick={onClick}
  >
    <HiArrowLongLeft size={40} />
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    className='hidden md:block absolute bottom-16 right-8 p-2'
    onClick={onClick}
  >
    <HiArrowLongRight size={40} />
  </button>
);

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const Options = ({ items }) => {

    const router = useRouter();

  return (
    <div className="relative">
    <p className='text-2xl tracking-widest font-semibold md:text-3xl py-8 pl-12'>You may also like!</p>
      <Carousel
        swipeable={true}
        keyBoardControl={true}
        draggable={true}
        responsive={responsive}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        itemClass="px-2" 
      >
        {items.slice(5,16).map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-start h-full md:h-[80vh] group" onClick={() => router.push('/collections/allproducts/' + item._id)}>
            <div className='bg-white w-full h-full md:h-[50vh] flex items-center'>
            <img src={item.img} alt="img" className=" object-contain md:h-full w-full h-full group-hover:opacity-75" />
            </div>
            <div className="flex flex-col items-center gap-1 p-4 h-1/3 md:h-auto">
              <p className="text-lg font-semibold group-hover:underline underline-offset-2">{item.title}</p>
              <p>&#x20B9;{item.amount}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Options;
