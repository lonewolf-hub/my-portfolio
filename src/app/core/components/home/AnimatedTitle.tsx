"use client";

import { motion } from "framer-motion";
import React from "react";

interface AnimatedTitleProps {
  text1: string;
  text2: string;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ text1, text2 }) => {
  const generateAnimatedSpans = (
    text: string,
    direction: "down" | "up",
    color: string
  ) => {
    return (
      <div
        className={`absolute top-0 left-0 w-full flex flex-wrap font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${color}`}
      >
        {text.split("").map((letter, i) => (
          <motion.span
            key={i}
            initial={{
              y: direction === "down" ? 0 : 100,
              rotateX: direction === "down" ? 0 : -90,
              opacity: direction === "down" ? 1 : 0,
            }}
            animate={{
              y: direction === "down" ? -100 : 0,
              rotateX: direction === "down" ? -90 : 0,
              opacity: direction === "down" ? 0 : 1,
            }}
            transition={{
              delay: i * 0.05,
              duration: 2.4,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
            className="inline-block will-change-transform"
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "bottom",
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>
    );
  };

  return (
    <div className="relative h-[2.5em] sm:h-[3em] md:h-[3.5em] lg:h-[4em] overflow-hidden cursor-default">
      {generateAnimatedSpans(text1, "down", "text-blue-500 dark:text-blue-300")}
      {generateAnimatedSpans(text2, "up", "text-pink-400 dark:text-pink-300")}
    </div>
  );
};

export default AnimatedTitle;
