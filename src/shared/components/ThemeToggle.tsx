"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button className="btn btn-circle" disabled>
                <div className="h-5 w-5" />
            </button>
        );
    }

    return (
        <button
            className="btn btn-circle"
            onClick={() =>
                setTheme(resolvedTheme === "light" ? "dark" : "light")
            }
        >
            {resolvedTheme === "light" ? (
                <Moon className="h-5 w-5" />
            ) : (
                <Sun className="h-5 w-5" />
            )}
        </button>
    );
}