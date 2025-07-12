"use client"
import React from 'react'
import Image from 'next/image'
import SkillItem from './SkillItems'
import AnimatedText from '../about/AnimatedText'

const Skills = () => {
  return (
    <div id='skills' className='w-full h-auto p-2 bg-background text-text'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <AnimatedText text="Skills" />
            <p className='py-4 text-2xl font-bold'>What I can do</p>
            <h2 className='py-0 text-xl '>Programming Languages I know</h2>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 mt-3'>
              <SkillItem imageSrc='/assets/skills/typescript.png' skillName='TYPESCRIPT'/>
              <SkillItem imageSrc='/assets/skills/javascript.png' skillName='JAVASCRIPT'/>
              <SkillItem imageSrc='/assets/skills/html.png' skillName='HTML'/>
              <SkillItem imageSrc='/assets/skills/social.png' skillName='CSS'/>
              <SkillItem imageSrc='/assets/skills/c-.png' skillName='C++'/>
            </div>

            <div>
                <h2 className='py-6 text-xl '>Frameworks || Libraries I know</h2>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>

                <SkillItem imageSrc='/assets/skills/next.svg' skillName='NEXT JS'/>
               <SkillItem imageSrc='/assets/skills/tailwind.svg' skillName='TAILWIND CSS'/>
               <SkillItem imageSrc='/assets/skills/structure.png' skillName='REACT JS'/>
               <SkillItem imageSrc='/assets/skills/node.svg' skillName='NODE JS'/>
            </div>

            <h2 className='py-6 text-xl '>Tools I am Familiar with</h2>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
               {/* <SkillItem imageSrc='/' skillName='JENKKINS'/> */}
               <SkillItem imageSrc='/assets/skills/docker.svg' skillName='DOCKER'/>
                </div>
            </div>


        </div>
        </div>
  )
}

export default Skills