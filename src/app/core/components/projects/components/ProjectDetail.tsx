// ProjectDetail.tsx
import React from 'react';
import Image from 'next/image';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa'; // Import a cooler bullet point icon

interface ProjectDetailProps {
  imageSrc: string;
  heading: string;
  description: string[]; // Updated to handle multiline description
  demoLink: string;
  codeLink: string;
  technologies: string[];
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  imageSrc,
  heading,
  description,
  demoLink,
  codeLink,
  technologies,
}) => {
  return (
    <div className='w-full overflow-x-hidden'>
      <div className='w-screen h-[50vh] relative'>
        {/* ... your existing code for the image */}
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={imageSrc} alt={heading} />
        {/* ... your existing code for the overlay */}
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className='text-xl px-1 uppercase text-[#5651e5]'>Project</p>
          <h2>{heading}</h2>
          <div className='py-3'>
            {description.map((line, index) => (
              <div key={index} className='flex items-center'>
                <FaAngleRight className='text-[#5651e5] pr-2' />
                <p>{line}</p>
              </div>
            ))}
          </div>


          <a href={demoLink}>
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>

          <a href={codeLink}>
            <button className='px-8 py-2 mt-4'>Code</button>
          </a>
        </div>

        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              {technologies.map((tech, index) => (
                <p key={index} className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> {tech}
                </p>
              ))}
            </div>
          </div>
        </div>

        <Link href='/#project'>
          <p className='px-2 text-bold underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
