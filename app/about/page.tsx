"use client";
import React from "react";
import { title } from "@/components/primitives";
import { Image } from "@nextui-org/react";
import aboutImg from "@../../public/abt-us.jpg";
import { TickIcon } from "@/components/icons";
import { motion } from "framer-motion";
const LightSpeed = require("react-reveal/LightSpeed");
const Zoom = require("react-reveal/Zoom");
const Bounce = require("react-reveal/Bounce");

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center">
        <h1 className={title()}>
          <LightSpeed left cascade>
            About
          </LightSpeed>
        </h1>
      </div>
      <div className="flex flex-col-reverse xl:flex-row xl:justify-center py-3">
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            delay: 1,
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex p-10 justify-center"
        >
          <Image
            className=" justify-center rounded-xl"
            src={aboutImg.src}
            alt="hero-image"
            width={650}
          />
        </motion.div>
        <div className="py-10 px-5 xl:w-1/2">
          <h1 className="text-4xl font-bold py-5 ">
            <LightSpeed right delay={2000}>
              We Make Your Business Smarter with Artificial Intelligence
            </LightSpeed>
          </h1>
          <motion.div
            initial={{
              x: 200,
              opacity: 0,
            }}
            transition={{
              delay: 2.8,
              duration: 1.2,
            }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p className="py-5 text-justify font-medium ">
              Neuronic System is a dynamic startup offering a wide range of
              innovative products that harness the immense potential of AI,
              embedded systems, and IoT. As product and service providers, we
              cater to diverse industry needs, delivering cutting-edge solutions
              that drive transformative results.
            </p>
            <p className="py-5 text-justify font-medium">
              With our own developed line of innovative products, we bring
              forward-thinking solutions to the table. Whether you require
              embedded systems development or IoT solutions, Neuronic System
              covers you. Our products are meticulously crafted with utmost
              precision, incorporating advanced AI algorithms to ensure optimal
              performance. We believe in pushing the boundaries of technology to
              create solutions that meet and exceed expectations, empowering our
              clients to achieve remarkable outcomes.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
