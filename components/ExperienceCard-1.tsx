/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
import Tilt from "react-parallax-tilt";

type Props = {
  experience: Experience;
};

function ExperienceCardOne({ experience }: Props) {
  return (
    <Tilt>
      <article className="container w-[350px] max-h-full py-4 px-1 flex flex-col justify-center items-center gap-5 border-4 border-[#02feff] rounded-3xl card-experience">
        {/* img */}
        <img
          src={urlFor(experience?.companyImage).url()}
          alt=""
          className="arc-img-experience w-[70px] h-full object-cover origin-center "
        />

        <div className="px-5">
          <h4 className="text-xl md:text-4xl font-light font-stark">
            {experience.jobTitle}
          </h4>
          <p className="font-bold font-stark text-2xl mt-1">
            {experience.company}
          </p>

          {/* Reactor */}
          <div className="relative">
            <div className="absolute left-24 -top-4 border-[11px] border-[#0088ce] border-dashed ring-8 ring-inherit rounded-full lg:h-[150px] lg:w-[150px] animate-spin-slow opacity-25 " />
            <div className="absolute left-[122px] top-[10px] border-[9px] border-[#0088ce] border-dashed rounded-full lg:h-[100px] lg:w-[100px] animate-reverse opacity-25 " />
          </div>

          <div className="flex space-x-2 my-2 flex-wrap">
            {experience.technologies.map((technology) => (
              <img
                key={technology._id}
                className="h-10 w-10 rounded-full"
                src={urlFor(technology.image).url()}
              />
            ))}
          </div>

          <p className="uppercase py-3 text-gray-300 font-stark">
            {new Date(experience.dateStarted).toDateString()} -{" "}
            {experience.isCurrentlyWorkingHere
              ? "Present"
              : new Date(experience.dateEnded).toDateString()}
          </p>

          <ul className="space-y-4 ml-5 text-lg max-h-96 overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80 font-stark">
            {experience.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </article>
    </Tilt>
  );
}

export default ExperienceCardOne;
