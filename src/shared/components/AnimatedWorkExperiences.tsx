import { AnimatedTestimonials } from "@/shared/components/ui/animated-testimonials";

export function AnimatedWorkExperiences() {
    const testimonials = [
        {
            quote:
                "Led a 500+ member guild and 32-person team, contributing to $2.5M in revenue within seven months. Managed operations, sales data, and reporting to support data-driven decision-making.",
            name: "NFT Administrator",
            designation: "MIX",
            src: "/nft_admin.png",
        },
        {
            quote:
                "Provided end-to-end IT support, troubleshooting hardware and software issues while maintaining reliable Microsoft-based environments. Helped minimize technical disruptions and keep daily operations running smoothly.",
            name: "IT support Intern",
            designation: "GoBeyondLimits OutSourcing",
            src: "/it_support.png",
        },
        {
            quote:
                "Built AI-powered and full-stack enterprise solutions serving 5,000+ users, including systems that reduced response times by 40% and operational costs by 95%. Delivered scalable integrations and reusable components that transformed manual processes into automated workflows.",
            name: "Junior Software Engineer",
            designation: "Avvanz Inc",
            src: "/junior_software_engineer.png",
        },
        {
            quote:
                "Develop enterprise software and audit-ready history systems that improve data traceability, accountability, and stakeholder visibility. Lead feature development while mentoring developers and collaborating with cross-functional teams.",
            name: "Software Engineer",
            designation: "Qstrike Innovations Phils., OPC.",
            src: "/software_engineer.png",
        },

    ];
    return <AnimatedTestimonials testimonials={testimonials} />;
}
