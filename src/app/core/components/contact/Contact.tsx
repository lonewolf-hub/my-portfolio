/* eslint react/no-unescaped-entiities */
import React from 'react'
import Link from 'next/link'


import Image from 'next/image'
import {AiFillGithub, AiOutlineTwitter, AiOutlineMail} from 'react-icons/ai'
import {RiLinkedinFill} from 'react-icons/ri'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
            <h2 className='py-4'>Let's get in touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
 {/* left  */}

<div  className='col-span-3 lg:col-span-2 w-full h-full shadow-xl rounded-xl shadow-gray-400 rounded-xl- p-4'>
    <div className='lg:p-4 h-full '>
        <div>
        <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={""}
                  alt='/'
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

  <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
    <RiLinkedinFill />
  </div>
  </a>


  <a
      href="https://github.com/lonewolf-hub"
      target="_blank"
      rel="noreferrer"
    >
  <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
  <AiFillGithub />
  </div>
  </a>
  <a
      href="https://twitter.com/JaiShukla9128"
      target="_blank"
      rel="noreferrer"
    >
  <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
  <AiOutlineTwitter />
  </div>
  </a>
  <a
      href="mailto: iamshuklajai@gmail.com"
      target="_blank"
      rel="noreferrer"
    >
  <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
  <AiOutlineMail />
  </div>
  </a>

</div>
    </div>
    </div>
</div>

{/* right  */}

<div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
    <div className='p-4' >

        <form action="https://getform.io/f/c69d69ae-3a62-436c-b763-27a51f60b9db"
        method="POST"
        encType="multipart/form-data"
        >
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>

                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                        Name
                    </label>
                    <input name='name'  className='border-2 rounded-lg p-3 flex border-gray-300' type="text" required/>
                </div>

                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                        Phone Number
                    </label>
                    <input name='phone' className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                </div>

            </div>

            <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>
                        EMAIL
                    </label>
                    <input name='email' className='border-2 rounded-lg p-3 flex border-gray-300' type="email" required/>

            </div>

            <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>
                        SUBJECT
                    </label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="TEXT" required />
            </div>

            <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows={10}
                    name='message'
                  ></textarea>
                </div>

                <button  className=' hover:scale-105 ease-in duration-300 w-full p-4 text-gray-100 mt-4'>
                  Send Message
                </button>
        </form>
    </div>

</div>
    </div>
    
    <div className='flex justify-center py-12'>
        <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300' >
                <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30}/>
            </div>
        </Link>
    </div>

    </div>
    </div>
  )
}

export default Contact