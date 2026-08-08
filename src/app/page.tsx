import { BackgroundRippleEffect } from '@/shared/components/ui/background-ripple-effect';
import { AnimatedWorkExperiences } from '@/shared/components/AnimatedWorkExperiences';
import { FloatingDockDemo } from '@/shared/components/FloatingIconDock';
import { ImagesBadgeProjects } from '@/shared/components/ImageBadgeProjects';
import { Card } from '@/shared/components/Card';
import { ContactSection } from '@/shared/components/Contact';

export default function Home() {
    return (
        <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">

            <BackgroundRippleEffect />
            <div className="mt-60 w-full">
                <h2 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold md:text-4xl lg:text-7xl ">
                    Innovation through technology drives my <strong className="text-blue-500">passion and motivation</strong>
                </h2>
                <h4 className="relative z-10 mx-auto mt-4 max-w-xl text-center text-neutral-500 text-lg">
                    Hi, I'm Jeffrey, an Full-stack Web Developer based in Philippines
                </h4>
            </div>



            <h4 className="relative z-10 mx-auto max-w-4xl text-center text-xl font-bold md:text-4xl lg:text-5xl mt-30 text-violet-400">
                My Professional Experience
            </h4>

            <AnimatedWorkExperiences />

            <div className="flex w-full flex-col">
                <div className="divider"></div>
            </div>
            <div className="w-full pl-50">
                <h4 className="relative z-10 mt-5 w-full pr-10 text-start text-xl font-bold md:text-4xl lg:text-4xl text-blue-400">
                    Frameworks
                </h4>

                <div className="w-full d-flex">
                    <FloatingDockDemo />
                </div>
            </div>
            <div className="w-full pr-50">
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
            </div>

            <div className="flex w-full flex-col">
                <div className="divider"></div>
            </div>


            <div className="w-full">
                <h4 className="relative z-10 mx-auto max-w-4xl text-center text-xl font-bold md:text-4xl lg:text-5xl mt-30">
                    A small selection of recent <p className='text-violet-400'>projects</p>
                </h4>
                <div className='w-full flex flex-row flex-wrap gap-5 p-5 justify-center overflow-auto h-[800px] mt-10'>

                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>

            <ContactSection />
        </div>
    )
}