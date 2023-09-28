"use client";
import { title } from "@/components/primitives";
import Image from "next/image";
import heroImg from "@/public/hero-img.png";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
const Zoom = require("react-reveal/Zoom");

export default function Home() {
  const [text] = useTypewriter({
    words: ["intelligence", "knowledge", "ideas"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <section className="flex max-md:flex-col items-center justify-center gap-4 max-md:gap-10 max-md:pt-20">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title({ size: "lg" })}>
          <div className="flex">
            <Zoom left cascade duration={3000}>
              Neuronic&nbsp;
            </Zoom>
            <Zoom right cascade duration={3000}>
              System
            </Zoom>
          </div>
        </h1>
        <br />
        <div className="mt-4">
          <h1 className={title({ size: "small" })}>Connecting&nbsp;</h1>
          <h1 className={title({ color: "violet", size: "small" })}>
            {text}&nbsp;
          </h1>
          <h1 className={title({ size: "small" })}>to the world</h1>
        </div>
      </div>
      <motion.div
        initial={{
          y: 400,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-28 w-[650px] max-md:w-[400px] max-sm:w-full"
      >
        <Image
          src={heroImg}
          alt="hero-image"
          width={0}
          height={0}
          sizes="100vw"
          priority
        />
      </motion.div>
    </section>
  );
}
