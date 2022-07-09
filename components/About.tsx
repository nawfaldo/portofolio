import React, { useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import AnimatedText from "../utils/AnimatedText";

const About = () => {
  const [replay, setReplay] = useState(true);

  const placeholderText = [{ type: "heading1", text: "Hello" }];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const handleReplay = () => {
    setReplay(!replay);
    setTimeout(() => {
      setReplay(true);
    }, 600);
  };

  return (
    <div id="about" className="bg-[#A0D995] px-[100px] pb-10">
      <motion.div
        className="App"
        initial="hidden"
        animate={replay ? "visible" : "hidden"}
        variants={container}
      >
        <div className="container hello" onClick={handleReplay}>
          {placeholderText.map((item, index) => {
            return <AnimatedText {...item} key={index} />;
          })}
        </div>
      </motion.div>
      <div className="space-y-1">
        <p className="font-medium text-3xl text-white font-Comfortaa">
          My name is Aldo
        </p>
        <p className="font-medium text-3xl text-white font-Comfortaa">
          A fullstack developer
        </p>
        <p className="font-medium text-2xl text-white font-Comfortaa">
          &lt;/&gt;
        </p>
      </div>
    </div>
  );
};

export default About;