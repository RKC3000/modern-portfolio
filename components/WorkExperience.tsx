import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";
import ExperienceCardOne from "./ExperienceCard-1";

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      {/* <div className="w-full flex spac-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"> */}
      <div className="w-full flex justify-evenly p-10 overflow-x-scroll snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {/* ExperienceCard */}
        {experiences.map((experience) => {
          return (
            <>
              <ExperienceCardOne key={experience._id} experience={experience} />
              <ExperienceCardOne key={experience._id} experience={experience} />
              <ExperienceCardOne key={experience._id} experience={experience} />
              <ExperienceCardOne key={experience._id} experience={experience} />
            </>
          );
        })}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
