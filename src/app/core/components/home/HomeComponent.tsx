import React from 'react'
import {  AiFillGithub,AiOutlineTwitter,AiOutlineMail} from 'react-icons/ai'
import {RiLinkedinFill} from 'react-icons/ri'

const HomeComponent = () => {
  return (
    <div id='home' className=' w-full h-screen text-center bg-bodyBackground'>
    <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
    <p className='uppercase text-sm tracking-widest text-textColor'> let's build something together</p>
    
    <h1 className='py-4 text-textColor'> Hey, I'm <span className= 'text-[#5651e5] '>Jai Shukla</span> </h1>

    <h1 className='py-25 uppercase text-[200%] text-textColor'> A Full-Stack Web Developer</h1>

    <p className='py-4 text-textColor max-w-[70%] m-auto'>
Hey there! I'm a fresh graduate super excited about web development, both the front and back ends. I'm all about diving into cool technologies like Next.js and React.js, and I'm totally hooked on TypeScript. Now, I'm on a mission to amp up my skills and explore the fascinating world of decentralized tech. Can't wait to see where this journey takes me! 🚀 #TechEnthusiast #WebDevPassion</p>

    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>

    <a
          href="https://www.linkedin.com/in/jai-shukla-56041016a/"
          target="_blank"
          rel="noreferrer"
        >

      <div className='rounded-full shadow-lg shadow-gray-600 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
        <RiLinkedinFill className="text-textColor"/>
      </div>
      </a>


      <a
          href="https://github.com/lonewolf-hub"
          target="_blank"
          rel="noreferrer"
        >
      <div className='rounded-full shadow-lg shadow-gray-600 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
      <AiFillGithub className="text-textColor"/>
      </div>
      </a>
      <a
          href="https://twitter.com/JaiShukla9128"
          target="_blank"
          rel="noreferrer"
        >
      <div className='rounded-full shadow-lg shadow-gray-600 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
      <AiOutlineTwitter className="text-textColor"/>
      </div>
      </a>
      <a
          href="mailto: iamshuklajai@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
      <div className='rounded-full shadow-lg shadow-gray-600 p-5 cursor-pointer hover:scale-110 ease-in duration-300'>
      <AiOutlineMail className="text-textColor"/>
      </div>
      </a>

    </div>
      </div>
    </div>
</div>
  )
}

export default HomeComponent
