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
    <div id='home' className=' w-full h-screen text-center bg-background'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-text'> let's build something together</p>

          <h1 className='py-4 text-text'> Hey, I'm <span className='text-[#5091e6] '>Jai Shukla</span> </h1>
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

          <p className="py-4 text-text max-w-[70%] m-auto">
            I am a full stack developer who enjoys building clean and efficient web applications. I mostly work with TypeScript, Next.js and React, and focus on writing code that is easy to maintain and performs well. Recently I have been exploring decentralized technologies to expand how I solve problems. I like working across both the frontend and backend, and I am always learning and refining my approach with every project.
          </p>

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
