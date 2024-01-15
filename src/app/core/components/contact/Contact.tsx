"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Form from './Form'
import SocialMediaLinks from '../home/SocialMediaLinks'
import AnimatedText from '../about/AnimatedText'

const Contact = () => {
  return (
    <div id='contact' className='w-full bg-bodyBackground text-textColor'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
      <AnimatedText text='Contact'/>
        <p className='py-4 text-2xl font-bold'>Let's get in touch</p>
        <div className='grid lg:grid-cols-5 gap-8 '>
          {/* left  */}

          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-lg rounded-xl shadow-gray-700 rounded-xl- p-4 bg-bodyColor'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={"/assets/images/contact.jpg"}
                  alt='/'
                  width={564} height={310} layout="responsive" objectFit="cover"
                />
              </div>
              <div>
                <h2 className='py-2'>Jai Shukla</h2>
                <p >Full Stack Web Developer</p>
                <p className='py-4'>I am available for Freelancing or full-time positions. Contact me and let's have a talk.</p>
              </div>
              <div>
                <p className=' uppercase pt-8'>Connect with me</p>

                {/* contactinfo */}
                <div className='flex items-center justify-center py-4'>
                  <SocialMediaLinks/>
                </div>
              </div>
            </div>
          </div>

          {/* right  */}
          <Form/>
       
        </div>

        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-600 p-5 cursor-pointer hover:scale-110 ease-in duration-300' >
              <HiOutlineChevronDoubleUp className='text-[#59fff7]' size={30} />
            </div>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Contact