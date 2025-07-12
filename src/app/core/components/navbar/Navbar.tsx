"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import DarkMode from "../darkmode/DarkMode";

const NAV_ITEMS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#project" },
  { label: "Contact", href: "/#contact" },
];

const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/in/jai-shukla-56041016a/", icon: <RiLinkedinFill /> },
  { href: "https://github.com/lonewolf-hub", icon: <AiFillGithub /> },
  { href: "https://twitter.com/JaiShukla9128", icon: <AiOutlineTwitter /> },
  { href: "mailto: iamshuklajai@gmail.com", icon: <AiOutlineMail /> },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleNav = () => setNav(!nav);

  useEffect(() => {
    const handleShadow = () => {
      setShadow(window.scrollY >= 90);
    };
    window.addEventListener("scroll", handleShadow);
    return () => window.removeEventListener("scroll", handleShadow);
  }, []);

  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "project", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed w-full h-20 z-[100] transition-all duration-300 ${
        shadow ? "shadow-xl backdrop-blur-md bg-white/30 dark:bg-[#0e0e0e]/30" : ""
      }`}
    >
      <div className="flex justify-between items-center w-full h-full px-2 lg:px-36 bg-transparent">
        <Link href="/">
          <div style={{ width: 60, height: 60, overflow: "hidden" }}>
            <Image
              src="/assets/icon/j6.png"
              alt="Logo"
              width={60}
              height={60}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        </Link>
        <div className="text-text">
          <ul className="hidden md:flex items-center justify-center gap-4">
            {NAV_ITEMS.map(({ label, href }) => {
              const sectionId = href.split("#")[1];
              const isActive = activeSection === sectionId;
              return (
                <Link key={label} href={href}>
                  <li
                    className={`text-sm uppercase font-semibold py-[5px] px-3 rounded-md transition duration-200 ${
                      isActive
                        ? "text-primary bg-body shadow-md"
                        : "hover:border-b hover:shadow-md shadow-gray-600"
                    }`}
                    onClick={() => setNav(false)}
                  >
                    {label}
                  </li>
                </Link>
              );
            })}
            <li className="px-2">
              <DarkMode />
            </li>
          </ul>

          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen text-text bg-black/70" : ""}>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-background p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
            <div style={{ width: 60, height: 60 }}>
              <Image
                src="/assets/icon/j6.png"
                alt="Logo"
                width={60}
                height={60}
                className="rounded"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div onClick={handleNav} className="rounded shadow-md shadow-gray-700 p-3 cursor-pointer">
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-gray-500 my-4">
            <p className="font-semibold w-[85%] md:w-[90%] py-4">Let's build something together</p>
          </div>

          <ul className="uppercase">
            <li className="px-2">
              <DarkMode />
            </li>
            {NAV_ITEMS.map(({ label, href }) => {
              const sectionId = href.split("#")[1];
              const isActive = activeSection === sectionId;
              return (
                <Link key={label} href={href}>
                  <li
                    onClick={() => setNav(false)}
                    className={`py-2 text-sm font-semibold ${
                      isActive ? "text-primary underline underline-offset-4" : ""
                    }`}
                  >
                    {label}
                  </li>
                </Link>
              );
            })}
          </ul>

          <div className="pt-10">
            <p className="uppercase font-semibold tracking-widest text-[#5151e5]">Let's Connect</p>
            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
              {SOCIAL_LINKS.map(({ href, icon }) => (
                <a key={href} href={href}>
                  <div className="rounded-md shadow-md shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-body">
                    {icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
