import Front from "../shared/layouts/Front";

export default function Layout({
        children,
    }: {
        children: React.ReactNode;
    }) {
    
        return <Front>{children}</Front>;
}