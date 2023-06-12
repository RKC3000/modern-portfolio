import React from "react";
import {
  PhoneIcon,
  LocationMarkerIcon,
  MailIcon,
} from "@heroicons/react/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:ramakrishna.chhipa99@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message} (${formData.email})`;
  };

  return (
    <div className="min-h-screen flex relative flex-col justify-center max-w-full items-center space-y-4 font-stark">
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-xl md:text-2xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#02feff] underline">Lets Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#02feff] h-7 w-7 animate-pulse" />
            <p className="text-xl">+12243543434</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MailIcon className="text-[#02feff] h-7 w-7 animate-pulse" />
            <p className="text-xl">ramakrishna.chhipa99@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <LocationMarkerIcon className="text-[#02feff] h-7 w-7 animate-pulse" />
            <p className="text-xl">294, sector-11</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button className="bg-[#02feff] py-5 px-10 rounded-md text-black font-bold text-lg">
            {/* <button className="bg-[#0088ce] py-5 px-10 rounded-md text-black font-bold text-lg"> */}
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
