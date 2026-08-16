"use client"

import { createAction } from '@/app/(admin)/admin/projects/create/actions';
import { useActionState, useEffect, useState } from "react";
import { notification } from "@/shared/notifications/notification";
import { useRouter } from "next/navigation";
import { getAllType } from '@/features/skills/service';
import { Icon } from "@iconify/react";

const initialState = {
    success: false,
    message: "",
};

type IconResult = {
    name: string;
    prefix: string;
};

export default function Form() {
    const [state, formAction] = useActionState(
        createAction,
        initialState
    );

    // const [types , setTypes] = useState([]);
    // const [search, setSearch] = useState("");
    // const [results, setResults] = useState<IconResult[]>([]);
    // const [selected, setSelected] = useState("");

    const router = useRouter();

    useEffect(() => {
        if (!state.message) return;

        if (state.success) {
            notification.success(state.message);
            setTimeout(() => {
                router.push("/admin/projects");
            }, 1000);
        } else {
            notification.error(state.message);
        }
    }, [state]);


    return (
        <div className=''>
            <form action={formAction}>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Title</legend>
                    <input 
                        type="text" 
                        name="title" 
                        className="input" 
                        placeholder="Type here" 
                    />

                    <legend className='fieldset-legend'> Link </legend>
                    <label className="input validator">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                            >
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                            </g>
                        </svg>
                        <input
                            type="url"
                            name="link"
                            required
                            placeholder="https://"
                            pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                            title="Must be valid URL"
                        />
                    </label>
                    <legend className="fieldset-legend">Description</legend>
                    <textarea 
                        name="description" 
                        className="textarea h-24" 
                        placeholder="Description..."
                    >
                    </textarea>
                    
                    <legend className="fieldset-legend">Thumbnail</legend>
                    <input 
                        name="thumb_nail"
                        type="file" 
                        className="file-input"
                    />
                </fieldset>

                <button className='btn btn-primary' type="submit">Create</button>
            </form>    
        </div>
    )
};