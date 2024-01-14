import React, { useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string;
}

const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const [header, setHeader] = useState(text);

  const animate = () => {
    let iteration = 0;
    let interval = setInterval(() => {
      setHeader("");
      let newStr = "";
      text.split("").forEach((element, index) => {
        let char = ALPHABETS[Math.round(Math.random() * 25)] ?? "M";
        if (index < iteration) {
          char = text[index];
        }
        newStr += char;
      });
      setHeader(newStr);
      iteration += 1;
      if (iteration > text.length) {
        clearInterval(interval);
      }
    }, 60);
  };

  useEffect(() => {
    animate(); // Start animation on mount
  }, []);

  return (
    <p onMouseEnter={animate} style={{ cursor: "pointer" }} className="uppercase tracking-widest text-[#527ae9] text-4xl font-extrabold">
      {header}
    </p>
  );
};

export default AnimatedText;
