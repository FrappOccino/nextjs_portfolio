import { AnimatedWorkExperiences } from '@/shared/components/AnimatedWorkExperiences';
// import { FloatingDockDemo } from '@/shared/components/FloatingIconDock';

export default function Experience() {
  return (
    <div className="w-full">
      <h4 className="relative z-10 mx-auto max-w-4xl text-center text-xl font-bold md:text-4xl lg:text-5xl mt-30 text-violet-400">
        My Professional Experience
      </h4>

      <AnimatedWorkExperiences />
    </div>
  );
}
