"use client";
import { title } from "@/components/primitives";
const LightSpeed = require("react-reveal/LightSpeed");

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center">
        <h1 className={title()}>
          <LightSpeed left cascade>
            Contact
          </LightSpeed>
        </h1>
      </div>
    </div>
  );
}
