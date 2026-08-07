import { Toaster } from "sonner";


export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen flex items-center justify-center">
            {children}
            <Toaster
                position="top-right"
                richColors
                closeButton
            />

        </main>
    );
}