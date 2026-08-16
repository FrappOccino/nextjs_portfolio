"use client";

import { useActionState, useEffect } from "react";
import { loginAction, logOutAction } from "@/app/(auth)/login/actions";
import { notification } from "@/shared/notifications/notification";
import { useRouter } from "next/navigation";

const initialState = {
    success: false,
    message: "",
};

export default function LoginForm() {
    const [state, formAction] = useActionState(
        loginAction,
        initialState
    );

    const router = useRouter();

    useEffect(() => {
        if (!state.message) return;

        if (state.success) {
            notification.success(state.message);
            setTimeout(() => {
                router.push("/admin");
            }, 1000);
        } else {
            notification.error(state.message);
        }
    }, [state]);

    return (
        <div>
            <form action={formAction}>
                <div>
                    <label>Email</label>

                    <input
                        name="email"
                        type="email"
                        required
                    />
                </div>

                <div>
                    <label>Password</label>

                    <input
                        name="password"
                        type="password"
                        required
                    />
                </div>

                <button type="submit">
                    Login
                </button>
            </form>
            <form action={logOutAction}>
            <button type="submit">
                Sign Out
            </button>
            </form>
        </div>
    );
}