import React from 'react';
import Link from 'next/link';
import { PiPackage } from "react-icons/pi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";




const Footer = () => {
  return (
    <footer className="h-[100vh] mt-20 uppercase text-center">

<div className='h-[40%] border-y overflow-x-auto md:overflow-x-hidden w-full scrollbar-hide'>
      <div className='flex md:flex-row h-full md:w-full md:justify-evenly w-[100vw]'>
        <div className='w-full md:w-1/3 h-full flex-shrink-0 flex flex-col justify-center items-center gap-5'>
          <div className='rounded-full bg-gray-300 text-gray-600 text-4xl p-4'><PiPackage /></div>
          <p className='text-3xl text-center'>Fast Shipping</p>
          <Link href='/' className='underline underline-offset-2'>Learn More</Link>
        </div>

        <div className='w-full md:w-1/3 h-full flex-shrink-0 flex flex-col justify-center border-x items-center gap-5'>
          <div className='rounded-full bg-gray-300 text-gray-600 text-4xl p-4'><MdOutlineShoppingCart /></div>
          <p className='text-3xl text-center'>30 days <br /> return policy</p>
          <Link href='/' className='underline underline-offset-2'>Learn More</Link>
        </div>

        <div className='w-full md:w-1/3 h-full flex-shrink-0 flex flex-col justify-center items-center gap-5'>
          <div className='rounded-full bg-gray-300 text-gray-600 text-4xl p-4'><CiCreditCard1 /></div>
          <p className='text-3xl text-center'>100% Secure <br /> payments</p>
          <Link href='/' className='underline underline-offset-2'>Learn More</Link>
        </div>
      </div>
    </div>

    <div className='bg-white text-black py-8 h-[60%] text-left'>
      <div className='container mx-auto px-4 md:px-8'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Company</h3>
            <ul className='space-y-2'>
              <li><Link href='/contact'>Contact Us</Link></li>
              <li><Link href='/gift-card'>Gift Card</Link></li>
              <li><Link href='/blog'>Blog</Link></li>
              <li><Link href='/lookbook'>Lookbook</Link></li>
              <li><Link href='/sustainability'>Sustainability</Link></li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Get Help</h3>
            <ul className='space-y-2'>
              <li><Link href='/faq'>FAQ</Link></li>
              <li><Link href='/terms'>Terms of Service</Link></li>
              <li><Link href='/return-policy'>Return Policy</Link></li>
              <li><Link href='/shipping-info'>Shipping Info</Link></li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Account</h3>
            <ul className='space-y-2'>
              <li><Link href='/login'>Log In</Link></li>
              <li><Link href='/sign-up'>Sign Up</Link></li>
              <li><Link href='/gift-card'>Gift Card</Link></li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Connect</h3>
            {/* Add your social media icons or links here */}
          </div>
        </div>
      </div>
      <div className='h-full flex flex-col justify-center items-center'>
        <div className='h-full flex items-center w-1/2'>
        <img src="/banner.png" alt="banner" className='h-1/2 w-full' />
        </div>
        <p className='self-start p-4 text-sm'>© 2024 ECOM, All rights reserved. Powered by Shopify</p>
      </div>
    </div>

    </footer>
  );
}

export default Footer;
