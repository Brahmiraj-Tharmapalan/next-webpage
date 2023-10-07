"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { title } from "@/components/primitives";
const LightSpeed = require("react-reveal/LightSpeed");

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

export default function ContactPage() {
  const { register, handleSubmit } = useForm<Inputs>();
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (data: Inputs) => {
    const serviceID = process.env.NEXT_PUBLIC_YOUR_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_YOUR_USER_ID;

    if (formRef.current && serviceID && templateID && userID) {
      try {
        await emailjs.sendForm(serviceID, templateID, formRef.current, userID);
        console.log("sended sent successfully!");
        formRef.current.reset();
      } catch (error) {
        console.error("Email sending failed:", error);
      }
    } else {
      console.error(
        "Form reference is null or environment variables are missing."
      );
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center">
        <h1 className={title()}>
          <LightSpeed left cascade>
            Contact
          </LightSpeed>
        </h1>
      </div>
      <div>
        <div className="sm:space-y-10 space-y-1">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-blue-700 sm:h-7 sm:w-7 w-4 h-4 animate-pulse" />
            <p className="sm:text-2xl text-lg">+94775240043</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-blue-700 sm:h-7 sm:w-7 w-4 h-4 animate-pulse" />
            <p className="sm:text-2xl text-lg">brahmirajt@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-blue-700 sm:h-7 sm:w-7 w-4 h-4 animate-pulse" />
            <p className="sm:text-2xl text-lg">Batticaloa, srilanka, 30400</p>
          </div>
        </div>
        <form
          className="flex flex-col space-y-2 w-fit mx-auto"
          onSubmit={handleSubmit(sendEmail)}
          ref={formRef}
        >
          <div className="sm:flex in sm:space-x-2 space-x-0 space-y-2 sm:space-y-0">
            <input
              {...register("name", { required: true })}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email", { required: true })}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject", { required: true })}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message", { required: true })}
            placeholder="Message"
            className="contactInput"
          />
          <button className="buttonContact bg-teal-400" type="submit">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
