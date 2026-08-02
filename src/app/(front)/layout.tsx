import FrontLayout from "@/shared/layouts/Front";

export default function Layout({
        children,
    }: {
        children: React.ReactNode;
    }) {
    
        return <FrontLayout>{children}</FrontLayout>;
}