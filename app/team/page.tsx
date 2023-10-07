"use client";
import { title } from "@/components/primitives";
import TeamCard from "./teamCard";
const LightSpeed = require("react-reveal/LightSpeed");

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
        <div className="flex">
          <div className="w-1/3">
            <p>
              Developing ground-breaking products that harness the latest
              advancements in AI, embedded systems, and IoT technologies.. Our
              products are designed to enhance efficiency, productivity, and
              connectivity across various industries.
            </p>
          </div>
          <div className="grid grid-cols-3 w-2/3">
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
        </div>
      </div>
    </div>
  );
}
