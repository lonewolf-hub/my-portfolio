
import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full  p-2 flex items-center py-16 overflow-x-hidden">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            {" "}
            About
          </p>
          <h2 className="py-4 ">Who I Am</h2>

          <p>
          Hey there! I'm a student with a deep interest in cutting-edge technologies, especially when it comes to crafting awesome digital experiences.  <br/> <br/>
          I've got the tech toolkit. My drive? Crafting exceptional digital experiences. <br/>
         <br/>
          Proficient in JavaScript, Typescript, NodeJs, NextJS, ReactJS, Tailwind, 
     
          </p>

          <pre/>
          <p>
          Currently I am working as a Full Stack Developer, my journey reflects continuous growth and a commitment to excellence in the ever-evolving tech landscape.
          </p>

          
       
          <Link href="/#project">
            <p className="py-2 text-gray-600 cursor-pointer underline">
              You can check out some of my projects
            </p>
          </Link>
        </div>
        <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 sm:flex-row sm:p-8 ">
          <Image
            className="rounded-3xl rounded-tr-3xl object-contain md:object-cover"
            src={"/assets/images/jai.jpg"}
            width={1300}
            height={34}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
