/* eslint react/no-unescaped-entiities */
import React from 'react'
import Link from 'next/link'


import Image from 'next/image'
import { AiFillGithub, AiOutlineTwitter, AiOutlineMail } from 'react-icons/ai'
import { RiLinkedinFill } from 'react-icons/ri'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Form from './Form'

const Contact = () => {
  return (
    <div id='contact' className='w-full bg-bodyBackground text-textColor'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
        <h2 className='py-4'>Let's get in touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left  */}

          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-lg rounded-xl shadow-gray-700 rounded-xl- p-4'>
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
                <div className='flex items-center justify-between py-4'>

                  <a
                    href="https://www.linkedin.com/in/jai-shukla-56041016a/"
                    target="_blank"
                    rel="noreferrer"
                  >

                    <div className='rounded-full shadow-lg shadow-gray-700 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <RiLinkedinFill />
                    </div>
                  </a>


                  <a
                    href="https://github.com/lonewolf-hub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className='rounded-full shadow-lg shadow-gray-700 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <AiFillGithub />
                    </div>
                  </a>
                  <a
                    href="https://twitter.com/JaiShukla9128"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className='rounded-full shadow-lg shadow-gray-700 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <AiOutlineTwitter />
                    </div>
                  </a>
                  <a
                    href="mailto: iamshuklajai@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className='rounded-full shadow-lg shadow-gray-700 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <AiOutlineMail />
                    </div>
                  </a>

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
              <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
            </div>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Contact