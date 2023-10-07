import { Card, CardHeader, CardFooter, Button } from "@nextui-org/react";
import Brahmiraj_Tharmapalan from "@/public/brahmiraj-tharmapalan.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const variants = {
  hover: {
    rotate: 360,
    scale: 0.8,
    y: -20,
  },
  initial: {
    scale: 1,
  },
};
export default function TeamCard() {
  const [isHovered, setIsHovered] = useState(false);
  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }
  return (
    <div
      className="p-5 group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card
        isFooterBlurred
        className="w-full h-[350px] col-span-12 sm:col-span-7 group"
      >
        <motion.div
          variants={variants}
          animate={isHovered ? "hover" : "initial"}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          <Image
            alt="Relaxing app background"
            className="z-0 rounded-2xl w-full h-full object-cover"
            src={Brahmiraj_Tharmapalan}
          />
        </motion.div>
        <CardFooter className="absolute bg-black/60 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 w-full h-full pt-0 transform duration-500 inset-y-[290px] group-hover:-inset-y-[-250px] items-start justify-center  ">
          <div className="flex flex-grow gap-2 items-center justify-center">
            <div className="flex flex-col">
              <p className="text-lg text-white/60">BRAHMIRAJ THARMAPLAN</p>
              <p className="text-base text-white/60 flex justify-center">
                Software Engineer
              </p>
              <div className="flex justify-center teamCard group-first absolute bottom-[240px] h-[70px] w-[200px] gap-5 px-8 py-4">
                <Link
                  href={"gitLink"}
                  target="_blank"
                  className="social-link1 relative flex items-center justify-center w-1/4 text-whitesmoke text-2xl no-underline transition duration-250 rounded-full"
                >
                  <svg
                    viewBox="-1 2 17 17"
                    className="github bi bi-twitter absolute flex w-[60%] h-full text-2xl font-semibold opacity-100 transition-opacity duration-250 z-2 cursor-pointer"
                    fill="currentColor"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z"></path>
                  </svg>
                </Link>
                <Link
                  href={"linkedInLink"}
                  target="_blank"
                  className="social-link2 relative flex items-center justify-center w-1/4 text-whitesmoke text-2xl no-underline transition duration-250 rounded-full"
                >
                  <svg
                    viewBox="0 0 448 512"
                    className="linkedIn bi bi-discord absolute flex w-[60%] h-full text-2xl font-semibold opacity-100 transition-opacity duration-250 z-2 cursor-pointer"
                    fill="currentColor"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>{" "}
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
