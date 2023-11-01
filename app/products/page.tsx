"use client";
import { title } from "@/components/primitives";
import Swiper from "./Swiper";
import { motion } from "framer-motion";
const LightSpeed = require("react-reveal/LightSpeed");
const Bounce = require("react-reveal/Bounce");
const Zoom = require("react-reveal/Zoom");

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center">
        <h1 className={title()}>
          <LightSpeed left cascade>
            Product
          </LightSpeed>
        </h1>
      </div>
      <div className="flex p-5 max-md:flex-col">
        <div className="w-1/3 p-10 max-md:w-full">
          <h1 className="mb-4 text-4xl text-start sm:text-4xl md:text-3xl font-bold flex-1">
            <LightSpeed left delay={1000}>
              Uncover the Next-Generation of products with cutting-edge
              technology
            </LightSpeed>
          </h1>
          <motion.div
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{
              delay: 2,
              duration: 1.2,
            }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p className="m-4 w-5/6">
              Developing ground-breaking products that harness the latest
              advancements in AI, embedded systems, and IoT technologies.. Our
              products are designed to enhance efficiency, productivity, and
              connectivity across various industries.
            </p>

            {/* <a
              className="border-2  border-blue-500 rounded-lg hover:bg-blue-300  w-fit px-4 mt-4"
              href=""
            >
              Read More
            </a> */}
          </motion.div>
        </div>
        <div className="flex-1 w-2/3 max-md:w-full p-5">
          <Zoom top delay={2500} duration={2000}>
            <Swiper />
          </Zoom>
        </div>
      </div>
    </div>
  );
}
