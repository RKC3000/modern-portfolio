import React from "react";
import { motion } from "framer-motion";
import ArcReactor from "./ArcReactor";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      {/* <div className="absolute border border-[#333333] rounded-full md:h-[100px] md:w-[100px] lg:h-[200px] lg:w-[200px] mt-52 animate-ping" /> */}
      <ArcReactor />
      <div className="absolute border border-[#333333] rounded-full md:h-[150px] md:w-[150px] lg:h-[300px] lg:w-[300px] mt-52" />
      <div className="absolute border border-[#333333] rounded-full md:h-[250px] md:w-[250px] lg:h-[500px] lg:w-[500px] mt-52" />
      <div className="absolute border border-[#0088ce] rounded-full md:h-[325px] md:w-[325px] lg:h-[650px] lg:w-[650px] mt-52 animate-pulse opacity-20" />
      <div className="absolute border border-[#333333] rounded-full md:h-[400px] md:w-[400px] lg:h-[800px] lg:w-[800px] mt-52 " />

      {/* Right-Top */}
      {/* <div className="absolute -top-80 -right-[800px] mt-24 border-[12px] border-[#0088ce] border-dashed ring-8 ring-inherit rounded-full lg:h-[200px] lg:w-[200px] animate-spin-slow " /> */}

      {/* Right-Top Inside */}
      {/* <div className="absolute -top-64 -right-[740px] mt-[95px] border-[12px] border-[#0088ce] border-dashed rounded-full lg:h-[80px] lg:w-[80px] animate-reverse " /> */}

      {/* Left */}
      {/* <div className="absolute -top-80 right-[550px] mt-96 border-[12px] border-[#0088ce] border-dotted ring-8 ring-inherit rounded-full lg:h-[200px] lg:w-[200px] animate-spin-slow " /> */}
    </motion.div>
  );
}

export default BackgroundCircles;
