import { FloatingIconDock } from "@/shared/components/FloatingIconDock";
import React from "react";
import { FloatingDock } from "@/shared/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
} from "@tabler/icons-react";
import { Moon } from 'lucide-react';


export default function Skills() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Aceternity UI",
      icon: (
        <img
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "#",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "test",
      icon: <Moon />,
      href: "#",
    },
  ];
  return (
    <div className="w-full">
      <div className="flex w-full flex-col">
        <div className="divider"></div>
      </div>
      <div className="w-full pl-50">
        <h4 className="relative z-10 mt-5 w-full pr-10 text-start text-xl font-bold md:text-4xl lg:text-4xl text-blue-400">
          Frameworks
        </h4>

        <div className="w-full d-flex">
          <FloatingIconDock links={links} />
        </div>
      </div>
      {/* <div className="w-full pr-50">
        <h4 className="relative z-10 mt-5 w-full pr-10 text-right text-xl font-bold md:text-4xl lg:text-4xl text-orange-400">
          Tools
        </h4>

        <div className="mt-8 flex w-full justify-end">
          <FloatingDockDemo />
        </div>
      </div>
      <div className="w-full pl-50">
        <h4 className="relative z-10 mt-5 w-full pr-10 text-start text-xl font-bold md:text-4xl lg:text-4xl text-rose-400">
          Programming Languages
        </h4>

        <div className="mt-8 w-full d-flex align-items-end">
          <FloatingDockDemo />
        </div>
      </div> */}
    </div>
  );
}
