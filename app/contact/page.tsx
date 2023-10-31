"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/react";
import confetti from "canvas-confetti";
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

  const handleConfetti = () => {
    confetti({ particleCount: 150, angle: 60, spread: 55, origin: { y: 1.2 } });
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
      <div className="flex max-lg:flex-col space-x-5 justify-between items-center max-md:px-3 px-20 mt-10">
        <div className="sm:space-y-10 space-y-1">
          <div className="flex items-center space-x-5">
            <a
              href="https://wa.me/+94765266417"
              target="_blank"
              className="flex gap-5 justify-center items-center"
            >
              <PhoneIcon className="text-blue-700 sm:h-7 sm:w-7 w-4 h-4 animate-pulse" />
              <p className="sm:text-2xl text-lg">+94 76 526 6417</p>
            </a>
          </div>
          <div className="flex items-center space-x-5">
            <a
              href=""
              target="_blank"
              className="flex gap-5 justify-center items-center"
            >
              <EnvelopeIcon className="text-blue-700 sm:h-7 sm:w-7 w-4 h-4 animate-pulse" />
              <p className="sm:text-2xl text-lg">info@neuronicsystem.com</p>
            </a>
          </div>
          <div className="flex items-center space-x-5">
            <a
              href="https://goo.gl/maps/2CwPs61FBHESQmsN6"
              target="_blank"
              className="flex gap-5 justify-center items-center"
            >
              <MapPinIcon className="text-blue-700 sm:h-7 sm:w-7 w-4 h-4 animate-pulse" />
              <p className="sm:text-2xl text-lg">
                176/27, Lower Road, Orr’s Hill, Trincomalee, Sri Lanka
              </p>
            </a>
          </div>
        </div>
        <div className="max-lg:pt-10">
          <form
            className="flex flex-col space-y-2 w-fit mx-auto"
            onSubmit={handleSubmit(sendEmail)}
            ref={formRef}
          >
            <div className="sm:flex sm:space-x-2 space-x-0 space-y-2 sm:space-y-0">
              <input
                {...register("name", { required: true })}
                placeholder="Name"
                className="contactInput w-full"
                type="text"
              />
              <input
                {...register("email", { required: true })}
                placeholder="Email"
                className="contactInput w-full"
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
            <Button
              disableRipple
              className="dark:bg-blue-700 dark:hover:bg-blue-500 bg-blue-500 hover:bg-blue-700 text-xl font-bold text-white"
              size="lg"
              onPress={handleConfetti}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
