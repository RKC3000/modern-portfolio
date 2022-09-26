import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="/Ramakrishna-Pic.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>

        <p className="text-sm">
          I am Ramakrishna, I love to learn new technologies and build new
          useful product. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Ab illum nisi cum atque, veritatis libero minus facilis
          praesentium! Numquam ipsum non, ratione sit quia dicta at ab quo sequi
          modi! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptas sit suscipit beatae nobis quaerat autem, est doloribus minima
          vel quo blanditiis natus ex! Quidem quibusdam unde veniam, laborum
          impedit porro.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
