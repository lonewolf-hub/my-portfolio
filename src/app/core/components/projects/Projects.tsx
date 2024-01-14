"use client"
import React from 'react'

import Projectitems from './components/ProjectItems';
import AnimatedText from '../about/AnimatedText';

const Projects = () => {
  return (
    <div id='project' className='w-full bg-bodyBackground text-textColor'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <AnimatedText text='Projects' />
        <h2 className='py-4 text-2xl'>Have a look at what I've built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <Projectitems title='Portfolio' backgroundImg={"/assets/projects/portfolio.png"} projectUrl='/portfolio' stack="Next Js" />
          <Projectitems title='Railway App' backgroundImg={"/assets/projects/railway.png"} projectUrl='/railway' stack="Next Js" />
          <Projectitems title='Admin Panel' backgroundImg={"/assets/projects/snipit-admin1.png"} projectUrl='/snipit-admin' stack="Next Js" />
          <Projectitems title='Next Chat App' backgroundImg={"/assets/projects/nextchatapp.png"} projectUrl='/next-chat-app' stack="Next Js" />
          <Projectitems title='React Movie App' backgroundImg={"/assets/projects/movieapp.png"} projectUrl='/movie-app' stack="React Js" />
          <Projectitems title='Ambulance Booking App' backgroundImg={"/assets/projects/ambulance.png"} projectUrl='/ambulance' stack="Next Js" />
          <Projectitems title='MERN E-Commerce' backgroundImg={"/assets/projects/banner1.png"} projectUrl='/mern-ecommerce' stack="React-Js" />
        </div>
      </div>
    </div>
  )
}

export default Projects