"use client";

import React from "react";
import { motion } from "framer-motion";

interface ColorShade {
  [key: string]: string;
}

interface AboutItemProps {
  color?: ColorShade;
  active?: boolean;
  data: {
    title: string;
    p: string;
    image: string;
  };
  onHover: () => void;
}

const defaultBlue = {
  "00": "#000000",
  "60": "#3B82F6",
};

const AboutItem: React.FC<AboutItemProps> = ({ color = defaultBlue, active = false, data, onHover }) => {
  const bgColor = color["60"];
  const borderColor = color["00"];

  return (
    <motion.div
      onMouseEnter={onHover}
      className="cursor-pointer flex items-center rounded-2xl border-4 select-none overflow-hidden"
      animate={{
        width: active ? 400 : 90,
        backgroundColor: bgColor,
        borderColor: borderColor,
        justifyContent: active ? "flex-start" : "center",
      }}
      transition={{
        type: "spring",
        stiffness: 600,
        damping: 25,
        mass: 0.1,
      }}
      style={{
        boxShadow: `6px 6px 0 ${borderColor}`,
        height: 90,
        minHeight: 90,
      }}
    >
      <div className="rounded-full overflow-hidden m-3 flex-shrink-0 w-[50px] h-[50px]">
        <img
          src={data.image}
          alt={data.title}
          className="object-cover w-full h-full"
          draggable={false}
        />
      </div>

      {active && (
        <motion.div
          className="ml-4 text-black"
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -5 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          <h3 className="text-base font-semibold leading-tight">{data.title}</h3>
          <p className="mt-1 text-sm leading-snug">{data.p}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default AboutItem;
