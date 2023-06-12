/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, ${pageInfo?.name} here`,
      "Developer.py",
      "#MLEnthusiast",
      "<TechIsLove/>",
      "Nerd by Nature",
    ],
    loop: true,
    delaySpeed: 800,
  });
  return (
    <div className="h-screen flex flex-col space-y-10 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        // className="relative rounded-full h-32 w-32 mx-auto object-cover"
        className="relative rounded-full h-24 w-24 mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        alt=""
      />
      <div className="z-20">
        <h2 className="text-base uppercase font-stark text-gray-200 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-stark px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#02feff" />
        </h1>

        <div className="pt-5 space-x-6 font-stark">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
