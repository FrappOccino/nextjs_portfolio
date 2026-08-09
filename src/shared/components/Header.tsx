import ThemeToggle from "@/shared/components/ThemeToggle";
import Image from "next/image";

export default function Header() {
    return (
        <>
            <div className="container navbar fixed top-0 z-50 border-none outline-none ring-0 shadow-none">
                <div className="flex-1">
                    <Image
                        src="/web-icon.svg"
                        alt="Logo"
                        width={50}
                        height={50}
                        loading="eager"
                    />
                </div>
                <div className="flex-none">
                    <ThemeToggle />
                </div>
            </div>
        </>
    );
}