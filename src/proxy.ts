import { auth } from "@/features/auth/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
    console.log("🔥 Proxy is running");
    console.log("Path:", req.nextUrl.pathname);
    console.log("Auth:", req.auth);

    if (!req.auth) {
        console.log("❌ Redirecting to login");

        return NextResponse.redirect(new URL("/login", req.url));
    }

    console.log("✅ Authenticated");
});

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/admin/:path*"
    ],
};