import { AnimatedTestimonials } from "@/shared/components/ui/animated-testimonials";

export function AnimatedWorkExperiences() {
    const testimonials = [
        {
            quote:
                "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
            name: "NFT Administrator",
            designation: "MIX",
            src: "/nft_admin.png",
        },
        {
            quote:
                "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
            name: "IT support Intern",
            designation: "GoBeyondLimits OutSourcing",
            src: "/it_support.png",
        },
        {
            quote:
                "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
            name: "Junior Software Engineer",
            designation: "Avvanz Inc",
            src: "/junior_software_engineer.png",
        },
        {
            quote:
                "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
            name: "Software Engineer",
            designation: "Qstrike Innovations Phils., OPC.",
            src: "/software_engineer.png",
        },

    ];
    return <AnimatedTestimonials testimonials={testimonials} />;
}
