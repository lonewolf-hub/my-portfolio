import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ProjectItemsProps {
  title: string;
  backgroundImg: string;
  projectUrl: string;
  stack: string;
}

const ProjectItems: React.FC<ProjectItemsProps> = ({ title, backgroundImg, projectUrl, stack }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-md shadow-gray-600 rounded-xl p-4 group hover:bg-gradient-to-r from-[#59fff7] to-[#0f73d8] bg-body'>
      <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' width={564} height={310} layout="responsive" objectFit="cover"/>

      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{stack}</p>
        <Link href={projectUrl}>
          <p className='text-center py-3 px-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>View Details</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItems;
