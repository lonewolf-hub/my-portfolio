"use client"
import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { blue, green, yellow } from "../../../../utils/colors";
import { Educations } from "../../../../styles/Home.styled";
import { Text } from "../../../../styles/Home.styled";
import { AboutItem } from "./AboutItem";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import Flip from "gsap/Flip";
import AnimatedText from "./AnimatedText";


const About = () => {
  const { ref, inView } = useInView({});
  const [show, setShow] = useState(inView);
  useEffect(() => {
    setShow(inView);
  }, [inView]);

  useEffect(() => {
    gsap.registerPlugin(Flip);
    let cards = document.querySelectorAll(".about-item");
    cards.forEach((card, i) => {
      if (i === 0) {
        card.classList.add("active");
      }
      card.addEventListener("mouseenter", (e) => {
        if (card.classList.contains("active")) {
          return;
        }
        const state = Flip.getState(cards);
        cards.forEach((c) => {
          c.classList.remove("active");
        });
        card.classList.add("active");
        Flip.from(state, {
          duration: 0.5,
          ease: "elastic.out(1,0.9)",
          absolute: true,
        });
      });
    });
  }, []);

  return (
    <div id="about" className="w-full  p-2 flex items-center py-16 overflow-x-hidden bg-bodyBackground" ref={ref}>
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 text-textColor">
        <div className="col-span-2">
          <AnimatedText text="ABOUT" />
          <p className="py-4 text-2xl font-bold">Who I Am</p>
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
          <div className="md:flex flex-col h-40 hidden">
          <p className="mt-2 text-2xl font-bold">Education</p>
          <Text>
          <Educations>
            <AboutItem
              color={blue}
              active
              data={{
                title: "Gopal Narayan Singh University, Jamuhar",
                p: "Bachelors of Computer Application (2020-2023)",
                image: "/assets/images/gnsu.jpeg",
              }}
            />
            <AboutItem
                color={green}
                data={{
                  title: "Veer Kunwar Singh University, Ara",
                  p: "High School (2018-2020)",
                  image: "/assets/images/vksu.png",
                }} active={undefined}            />
                <div className="md:flex sm:hidden">
                <AboutItem
                color={yellow}
                data={{
                  title: "Scottish Central School, Sasaram",
                  p: "Secondary Education (2017-2018)",
                  image: "/assets/images/school.jpeg",
                 }} active={undefined}            />
                </div>
          </Educations>
        </Text>
        </div>
          <Link href="/#project">
            <p className="py-2 text-gray-600 cursor-pointer underline">
              You can check out some of my projects
            </p>
          </Link>
        </div>
        <div className="w-full h-auto shadow-md shadow-gray-700 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 sm:flex-row sm:p-8 bg-bodyColor ">
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
