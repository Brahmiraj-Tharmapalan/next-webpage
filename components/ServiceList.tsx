import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";


interface ServiceListProps {
  title: string;
  description: string;
  url: string;
  icon: IconType;
}

const ServiceList: React.FC<ServiceListProps> = ({
  title,
  description,
  url,
  icon: Icon,
}) => {
  return (
    <div className="w-full h-fit flex items-center justify-center p-4  transition-all duration-300">
      <div className="relative flex items-center justify-center w-full  transition-all duration-500 m-4 text-center">
        <div className="group h-96 w-80 [perspective:1000px]">
          <div className="relative flex h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0 flex bg-blue-50 rounded-lg">
              <div className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40 flex flex-col items-center justify-center">
                <div className="m-8 text-blue-400">
                  <Icon size={96}/>
                </div>
                <h2 className="text-4xl font-bold text-blue-700">{title}</h2>
              </div>
            </div>
            <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="flex min-h-full flex-col items-center justify-center">
                <p className="text-base">{description}</p>
                <Link href={url}>
                  <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceList;
