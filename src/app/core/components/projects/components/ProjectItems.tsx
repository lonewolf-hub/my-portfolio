import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ProjectItemsProps {
  title: string;
  backgroundImg: string;
  projectUrl: string;
  Stack: string;
}

const ProjectItems: React.FC<ProjectItemsProps> = ({ title, backgroundImg, projectUrl, Stack }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-lg shadow-gray-500 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#6792ef]'>
      <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' width={564} height={310} layout="responsive" objectFit="cover"/>

      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{Stack}</p>
        <Link href={projectUrl}>
          <p className='text-center py-3 px-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItems;
