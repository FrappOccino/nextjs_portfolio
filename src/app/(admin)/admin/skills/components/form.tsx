"use client"

// import { Form } from 'next/form';
import { createAction } from '@/app/(admin)/admin/skills/create/action';
import { useActionState, useEffect } from "react";
import { notification } from "@/shared/notifications/notification";
import { useRouter } from "next/navigation";


const initialState = {
    success: false,
    message: "",
};

export default function Form() {
    const [state, formAction] = useActionState(
        createAction,
        initialState
    );

    const router = useRouter();

    useEffect(() => {
        if (!state.message) return;

        if (state.success) {
            notification.success(state.message);
            setTimeout(() => {
                router.push("/admin/skills");
            }, 1000);
        } else {
            notification.error(state.message);
        }
    }, [state]);

    return (
        <div>
            <form action={formAction}>
                <div>
                    <label>Title</label>

                    <input
                        name="title"
                        type="text"
                        required
                    />
                </div>
                <div>
                    <label>href</label>

                    <input
                        name="href"
                        type="href"
                        required
                    />
                </div>
                <div>
                    <label>Icon</label>

                    <input
                        name="icon"
                        type="text"
                        required
                    />
                </div>
                <div>
                    <label>Type</label>

                    <input
                        name="type"
                        type="number"
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>    
        </div>
    )
};