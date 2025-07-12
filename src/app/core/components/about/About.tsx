"use client"
import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import AnimatedText from "./AnimatedText";
import AboutItem from "./AboutItem";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { ref, inView } = useInView({});
  const [show, setShow] = useState(inView);
  useEffect(() => {
    setShow(inView);
  }, [inView]);


  const educationItems = [
    {
      title: "Gopal Narayan Singh University, Jamuhar",
      p: "BCA (2020–2023)",
      image: "/assets/images/gnsu.jpeg",
      color: {
        "00": "#000000",
        "60": "#3B82F6",
      },
    },
    {
      title: "Veer Kunwar Singh University, Ara",
      p: "High School (2018–2020)",
      image: "/assets/images/vksu.png",
      color: {
        "00": "#003300",
        "60": "#22c55e",
      },
    },
    {
      title: "Scottish Central School, Sasaram",
      p: "Secondary Education (2017–2018)",
      image: "/assets/images/school.jpeg", // Update with your actual path
      color: {
        "00": "#333300",
        "60": "#fde047",
      },
    },
  ];


  return (
    <div id="about" className="w-full  p-2 flex items-center py-16 overflow-x-hidden bg-background" ref={ref}>
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 text-text">
        <div className="col-span-2">
          <AnimatedText text="ABOUT" />
          <p className="py-4 text-2xl font-bold">Who I Am</p>
          <p>
            Hey! I'm someone who’s genuinely passionate about building meaningful digital experiences through code. I love working with modern web technologies and enjoy turning ideas into interactive, well-crafted products.<br />
            <br />
            My stack includes JavaScript, TypeScript, Node.js, React.js, Next.js, and Tailwind CSS—tools I use daily to bring designs and logic together seamlessly.
          </p>
          <br />
          <pre />
          <p>
            Currently working as a Full Stack Developer, I see every project as a new opportunity to learn, grow, and push the boundaries of what I can create. I’m driven by curiosity, a love for problem-solving, and the excitement of building for the web in an ever-changing tech world.
          </p>
          <div className="md:flex flex-col space-y-4 hidden mt-4">
            <p className="mt-2 text-2xl font-bold">Education</p>
            <div className="flex flex-wrap gap-4 mt-2">
              {educationItems.map((item, index) => (
                <AboutItem
                  key={index}
                  data={item}
                  color={item.color}
                  active={activeIndex === index}
                  onHover={() => setActiveIndex(index)}
                />
              ))}

            </div>
          </div>
          <Link href="/#project">
            <p className="py-2 text-gray-600 cursor-pointer underline">
              You can check out some of my projects
            </p>
          </Link>
        </div>
        <div className="w-full h-auto shadow-md shadow-gray-700 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 sm:flex-row sm:p-8 bg-body ">
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
