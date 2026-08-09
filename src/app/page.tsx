import { ContactSection } from '@/shared/components/Contact';
import Hero from '@/shared/components/Hero';
import Experience from '@/shared/components/Experience';
import Projects from '@/shared/components/Projects';
import Skills from '@/features/skills/components/Skills';
import Footer from  "@/shared/components/Footer";
import Header from  "@/shared/components/Header";
import FrontLayout from "@/shared/layouts/Front";


export default function Home() {
    return (
        <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
            <FrontLayout>
                <Hero />
                <Experience />
                <Skills />
                <div className="flex w-full flex-col">
                    <div className="divider"></div>
                </div>
                <Projects />
                <ContactSection />
            </FrontLayout>
        </div>
    )
} 