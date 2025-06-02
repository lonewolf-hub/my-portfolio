import React from 'react'
import { AiOutlineDownload } from 'react-icons/ai'
import SocialMediaLinks from './SocialMediaLinks'
import { AnimatedSpan, Position } from '../../../../styles/Home.styled'

const HomeComponent = () => {

  const produceSpans = (name: string) => {
    return name.split("").map((letter, index) => (
      <AnimatedSpan
        index={index}
        letter={letter}
        aria-hidden="true"
        key={index}
      >
        {letter}
      </AnimatedSpan>
    ));
  };
  return (
    <div id='home' className=' w-full h-screen text-center bg-bodyBackground'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-textColor'> let's build something together</p>

          <h1 className='py-4 text-textColor'> Hey, I'm <span className='text-[#5091e6] '>Jai Shukla</span> </h1>
          <div className='flex items-center justify-center'>
            <Position>
              <div className="text first" aria-label="Full Stack Developer">
                {produceSpans("Full Stack Developer")}
              </div>
              <div className="text second" aria-label="UI/UX Enthusiast">
                {produceSpans("UI/UX Enthusiast")}
              </div>
            </Position>
          </div>

          <p className='py-4 text-textColor max-w-[70%] m-auto '>Whether it's designing user-friendly user interfaces or developing the backend logic, I'm a full stack developer who is passionate about developing web applications. I mostly work with TypeScript, Next.js, and React, and I'm constantly trying to write code that is more streamlined and effective. I've been investigating decentralised technologies lately, which has been interesting and difficult. I enjoy solving problems one project at a time, am always learning, and maintain my curiosity.</p>

          <div className='flex justify-center items-center'>
            <SocialMediaLinks />
          </div>
          <div className='my-4 flex items-center justify-center'>
            <a href='/assets/resume/jairesume.pdf' download='Jai_Shukla_Resume.pdf'>
              <button className='flex text-white py-2 px-6 rounded-full  transition duration-300'>
                Download Resume
                <AiOutlineDownload className='text-xl mr-2' />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeComponent
