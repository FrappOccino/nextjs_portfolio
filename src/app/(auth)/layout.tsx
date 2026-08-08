"use client";

import AppToaster from "@/shared/components/AppToaster";
// import { useTheme } from "next-themes";



export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // const { resolvedTheme } = useTheme();

    return (
        <main className="min-h-screen flex items-center justify-center">
            {children}
            <AppToaster />
        </main>
    );
}