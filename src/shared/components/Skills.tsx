"use client"

import { FloatingIconDock } from "@/shared/components/FloatingIconDock";


interface Skill {
    title: string;
    icon: string;
    href: string;
}

export default function Skills() {
  return (
    <div className="w-full">
      <div className="flex w-full flex-col">
        <div className="divider"></div>
      </div>
      <div className="w-full ">
        <h4 className="relative z-10 mt-5 w-full pr-10 text-start text-xl font-bold md:text-4xl lg:text-4xl text-blue-400">
          Frameworks
        </h4>

        <div className="w-full flex  flex-wrap h-fit">
          <FloatingIconDock type={"Framework"} />
        </div>
      </div>
       <div className="w-full ">
        <h4 className="relative z-10 mt-5 w-full pr-10 text-start text-xl font-bold md:text-4xl lg:text-4xl  text-orange-400">
          Tools & Technologies
        </h4>

        <div className="mt-8 flex w-full justify-start  flex-wrap">
          <FloatingIconDock type={"Tools"}/>
        </div>
      </div>
      <div className="w-full ">
        <h4 className="relative z-10 mt-5 w-full pr-10 text-start text-xl font-bold md:text-4xl lg:text-4xl text-rose-400">
          Programming Languages & Web Technologies
        </h4>

        <div className="mt-8 w-full flex  align-items-end flex-wrap">
          <FloatingIconDock type={"Programming Language"}/>
        </div>
      </div>
    </div>
  );
}