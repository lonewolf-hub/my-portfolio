"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiFillGithub, AiOutlineTwitter, AiOutlineMail } from 'react-icons/ai'
import { RiLinkedinFill } from 'react-icons/ri'
import DarkMode from '../darkmode/DarkMode';

interface NavItem {
  label: string;
  href: string;
}

interface SocialLink {
  href: string;
  icon: React.ReactNode;
}

// Define arrays for navigation items and social links

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#project' },
  { label: 'Contact', href: '/#contact' },
];

const SOCIAL_LINKS: SocialLink[] = [
  { href: 'https://www.linkedin.com/in/jai-shukla-56041016a/', icon: <RiLinkedinFill /> },
  { href: 'https://github.com/lonewolf-hub', icon: <AiFillGithub /> },
  { href: 'https://twitter.com/JaiShukla9128', icon: <AiOutlineTwitter /> },
  { href: 'mailto: iamshuklajai@gmail.com', icon: <AiOutlineMail /> },
];
  

const Navbar = () => {

  const [nav, setnav] = useState(false)
  const [shadow, setshadow] = useState(false)
  const handlenav = (() => {
    setnav(!nav)
  })

  useEffect(() => {
    const handelshadow = () => {
      if (window.scrollY >= 90) {
        setshadow(true)
      }
      else {
        setshadow(false)
      }
    }

    window.addEventListener('scroll', handelshadow)

  }, [])

  return (
    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
      <div className='flex justify-between items-center w-full h-full px-2 lg:px-16 bg-bodyBackground'>
        <Link href={'#'}>
          <div style={{ width: 60, height: 60, overflow: 'hidden' }} className='rounded-full shadow-md shadow-gray-600'>
            <Image
              src={'/assets/images/jai.jpg'}
              alt='image'
              width={60}
              height={60}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
        </Link>
        <div className='text-textColor'>
          <ul className='hidden md:flex items-center justify-center gap-4'>
            {NAV_ITEMS.map(({ label, href }) => (
              <Link key={label} href={href}>
                <li className='text-sm  uppercase font-semibold hover:border-b hover:shadow-md shadow-gray-600 rounded-full py-[5px] px-3' onClick={() => setnav(false)}>
                  {label}
                </li>
              </Link>
            ))}
            <li className='px-2'>
              <DarkMode />
            </li>
          </ul>

          <div onClick={handlenav} className='md:hidden '>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen text-textColor bg-black/70' : ''}>
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w[60%] md:w-[45%] h-screen bg-bodyBackground p-10 ease-in duration-500 '
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }>
          <div>
            <div className=' flex w-full items-center justify-between'>
              <div style={{ width: 60, height: 60 }} className='rounded-md'>
                <Image
                  src={'/assets/images/jaismall.jpg'}
                  alt='image'
                  width={60}
                  height={60}
                  className='rounded'
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <div onClick={handlenav} className='rounded  shadow-md shadow-gray-700 p-3 cursor-pointer'>
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b  border-gray-500 my-4'>
              <p className=' font-semibold w-[85%] md:w-[90%] py-4'>Let's build something together</p>
            </div>
          </div>
          <div className=' flex flex-col'>
            <ul className='uppercase '>
              <li className='px-2'>
                <DarkMode />
              </li>
              {NAV_ITEMS.map(({ label, href }) => (
                <Link key={label} href={href}>
                  <li onClick={() => setnav(false)} className='py-2 text-sm font-semibold'>
                    {label}
                  </li>
                </Link>
              ))}
            </ul>

            <div className='pt-10'>
              <p className='uppercase font-semibold tracking-widest text-[#5151e5]'>Let's Connect</p>

              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                {SOCIAL_LINKS.map(({ href, icon }) => (
                  <a key={href} href={href}>
                    <div className='rounded-md shadow-md shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-bodyColor'>
                      {icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;