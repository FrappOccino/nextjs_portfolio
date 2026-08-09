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
import { Moon } from "lucide-react";

type FloatingIconDockProps = {
  links: Array<{
    title: string;
    icon: React.ReactNode;
    href: string;
  }>;
};

export function FloatingIconDock({ links }: FloatingIconDockProps) {
  return (
    <div className="flex items-center mt-5">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
