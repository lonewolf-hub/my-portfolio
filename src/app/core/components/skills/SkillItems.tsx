
import React from 'react';
import Image from 'next/image';

interface SkillItemProps {
  imageSrc: string;
  skillName: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ imageSrc, skillName }) => {
  return (
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
          <Image src={imageSrc} width={64} height={64} alt={skillName} />
        </div>
        <div>
          <h3 className='flex flex-col items-center justify-center'>{skillName}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
