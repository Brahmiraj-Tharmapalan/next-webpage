"use client";
import { title } from "@/components/primitives";
import TeamCard from "./teamCard";
import { motion } from "framer-motion";
const LightSpeed = require("react-reveal/LightSpeed");
const Zoom = require("react-reveal/Zoom");

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center">
        <h1 className={title()}>
          <LightSpeed left cascade>
            Team
          </LightSpeed>
        </h1>
      </div>
      <div>
        <div className="flex max-lg:flex-col">
          <div className="w-1/3 max-lg:w-full p-5 px-5">
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
              viewport={{ once: true }}
            >
              Developing ground-breaking products that harness the latest
              advancements in AI, embedded systems, and IoT technologies.. Our
              products are designed to enhance efficiency, productivity, and
              connectivity across various industries.
            </motion.div>
          </div>
          <div className="grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:w-full w-2/3">
            <Zoom right delay={1500}>
              <TeamCard />
            </Zoom>
            <Zoom right delay={1600}>
              <TeamCard />
            </Zoom>
            <Zoom right delay={1700}>
              <TeamCard />
            </Zoom>
            <Zoom right delay={1800}>
              <TeamCard />
            </Zoom>
            <Zoom right delay={1900}>
              <TeamCard />
            </Zoom>
            <Zoom right delay={2000}>
              <TeamCard />
            </Zoom>
            <Zoom right delay={100}>
              <TeamCard />
            </Zoom>
            <Zoom right delay={200}>
              <TeamCard />
            </Zoom>
            <Zoom right delay={300}>
              <TeamCard />
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
}
