import React from 'react';
import Image from 'next/image';

interface SkillItemProps {
  imageSrc: string;
  skillName: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ imageSrc, skillName }) => {
  return (
    <div className='p-6 shadow-md shadow-gray-700 rounded-xl hover:scale-105 ease-in duration-300 bg-bodyColor'>
      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
          {/* Smaller image size on mobile devices */}
          <Image
            src={imageSrc}
            width={60}
            height={60}
            alt={skillName}
            className='w-12 h-12 md:w-16 md:h-16' // Adjust the width and height for smaller screens
          />
        </div>
        <div>
          <h3 className='flex flex-col items-center justify-center text-xs md:text-base'>{skillName}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
