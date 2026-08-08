import { BackgroundRippleEffect } from '@/shared/components/ui/background-ripple-effect';

export default function Home() {
    return (
        // <div className="hero bg-base-200 min-h-screen">

        // </div>
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
            {/* <div className="hero-content flex-col lg:flex-row-reverse z-40 bg-blue-500">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div> */}
        </div>
    )
}