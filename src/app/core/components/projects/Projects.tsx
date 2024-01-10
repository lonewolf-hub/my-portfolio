/* eslint react/no-unescaped-entiities */

import React from 'react'

import Projectitems from './components/ProjectItems';

const Projects = () => {
  return (
    <div id='project' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest font-semibold uppercase text-[#5651e5]'> Projects </p>
        <h2 className='py-4'>Have a look at what I've built</h2>

        <div className='grid md:grid-cols-2 gap-8'>
           <Projectitems title='Portfolio-Site' backgroundImg={""} projectUrl='/portfolio' Stack="Next Js"/>
           <Projectitems title='Krypt' backgroundImg={""} projectUrl='/krypt' Stack="React Js" />

           <Projectitems title='Decentralized Credit System' backgroundImg={""} projectUrl='/credit' Stack="React Js"/>

           <Projectitems title='DAO DAPP' backgroundImg={""} projectUrl='/dao' Stack="React Js"/>
            
           <Projectitems title='Decentralized Wallet' backgroundImg={""} projectUrl='/Wallet' Stack="React Js"/>


           <Projectitems title=' Responsive Landing Page' backgroundImg={""} projectUrl='/landingpage' Stack="React Js"/>
        
            
           <Projectitems title='Drawing App' backgroundImg={""} projectUrl='/drawing' Stack="Canva"/>
        
           </div>

            </div>
            </div>
  )
}

export default Projects