import { BackgroundRippleEffect } from "@/shared/components/ui/background-ripple-effect";

export default function Hero() {
  return (
    <div className="w-full">
      <BackgroundRippleEffect />
      <div className="mt-60 w-full">
        <h2 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold md:text-4xl lg:text-7xl ">
          Innovation through technology drives my{" "}
          <strong className="text-blue-500">passion and motivation</strong>
        </h2>
        <h4 className="relative z-10 mx-auto mt-4 max-w-xl text-center text-neutral-500 text-lg">
          Hi, I'm Jeffrey, an Full-stack Web Developer based in Philippines
        </h4>
      </div>
    </div>
  );
}
