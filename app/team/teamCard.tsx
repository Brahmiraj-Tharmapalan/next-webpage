import { Card, CardHeader, CardFooter, Button } from "@nextui-org/react";
import Brahmiraj_Tharmapalan from "@/public/brahmiraj-tharmapalan.jpg";
import Image from "next/image";

export default function TeamCard() {
  return (
    <div className="p-5">
      <Card
        isFooterBlurred
        className="w-full h-[350px] col-span-12 sm:col-span-7 group"
      >
        <Image
          alt="Relaxing app background"
          className="z-0 rounded-2xl w-full h-full object-cover transition-transform transform duration-500 scale-100 group-hover:scale-90"
          src={Brahmiraj_Tharmapalan}
        />
        <CardFooter className="absolute bg-black/70 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">BRAHMIRAJ THARMAPLAN</p>
              <p className="text-tiny text-white/60">Software Engineer</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
