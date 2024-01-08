
import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full  p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            {" "}
            About
          </p>
          <h2 className="py-4 ">Who I Am</h2>

          <p>
          Greetings! I'm a Bhopal-based Full Stack Software Developer. With a keen interst in blockchain technology. <br/> <br/>
          Passionate about design and building exceptional digital experiences. 🚀 <br/> <br/>
          Proficient in JavaScript, Typescript, NodeJs, NextJS, ReactJS, Bootstrap, 
     
          </p>

          <pre/>
          <p>
          Currently I am working as a Full Stack Developer, my journey reflects continuous growth and a commitment to excellence in the ever-evolving tech landscape.
          </p>

          
       
          <Link href="/#project">
            <p className="py-2 text-gray-600 cursor-pointer underline">
              Check out some of my latest projects
            </p>
          </Link>
        </div>
        <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 sm:flex-row sm:p-8">
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
