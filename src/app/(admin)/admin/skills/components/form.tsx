"use client"

// import { Form } from 'next/form';
import { createAction } from '@/app/(admin)/admin/skills/create/action';
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

    const [types , setTypes] = useState([]);
    const [search, setSearch] = useState("");
    const [results, setResults] = useState<IconResult[]>([]);
    const [selected, setSelected] = useState("");

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

    useEffect(() => {
        const types = async () =>{
            const res = await getAllType();

            console.log(res);
            setTypes(res);
        }

        types();
    } , []);

    useEffect(() => {
            if (!search.trim()) {
                setResults([]);
                return;
            }
    
            const controller = new AbortController();
    
            const searchIcons = async () => {
                try {
                    const response = await fetch(
                        `https://api.iconify.design/search?query=${encodeURIComponent(
                            search
                        )}&limit=10`,
                        {
                            signal: controller.signal,
                        }
                    );
    
                    const data = await response.json();
    
                    setResults(
                        data.icons.map((icon: string) => {
                            const [prefix, name] = icon.split(":");
    
                            return {
                                prefix,
                                name,
                            };
                        })
                    );
                } catch (error) {
                    if ((error as Error).name !== "AbortError") {
                        console.error(error);
                    }
                }
            };
    
            const timeout = setTimeout(searchIcons, 300);
    
            
            return () => {
                clearTimeout(timeout);
                controller.abort();
            };
        }, [search]);

    return (
        <div className=''>
            <form action={formAction}>
                <div>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Title</legend>
                        <input type="text" name="title" className="input" placeholder="Type here" />
                    </fieldset>
                </div>

                <div>
                    <legend className='fieldset-legend'> Href </legend>
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
                        name="href"
                        required
                        placeholder="https://"
                        defaultValue="#"
                        pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                        title="Must be valid URL"
                    />
                    </label>
                </div>

                <div>
                <div className="mt-5 w-fit">
                    {/* Search */}
                <div className=' flex gap-4 items-center'>
                    <div className=''>
                        <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search technology or brand..."
                        className="input"
                        />
                    </div>

                    {selected && (
                        <div>
                            <div className="flex items-center gap-3">
                                <Icon icon={selected} width={32} height={32} />

                                <div>
                                    <p className="font-medium">Selected icon</p>
                                    <p className="text-sm opacity-60">{selected}</p>
                                </div>
                            </div>
                            <input
                                type="hidden"
                                name="icon"
                                value={selected}
                            />
                        </div>
                    )}
                </div>


                    <div className="flex flex-wrap mt-5">
                        {results.slice(0,10).map((icon) => {
                            const iconName = `${icon.prefix}:${icon.name}`;

                            return (
                                <button
                                    key={iconName}
                                    type="button"
                                    onClick={() => setSelected(iconName)}
                                >
                                    <Icon
                                        icon={iconName}
                                        width={32}
                                        height={32}
                                    />

                                </button>
                            );
                        })}
                    </div>
                </div>
                </div>
                <div>
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">Type</legend>
                    <select defaultValue="Pick a browser" className="select"
                        name="type"
                        required
                        >
                        <option disabled={true}>Pick a type</option>
                        {types.map((type) => (
                            <option
                                key={type.id}
                                value={type.id}
                            >
                                {type.type}
                            </option>
                        ))}
                    </select>
                </fieldset>
                </div>
                <button className='btn btn-primary' type="submit">Create</button>
            </form>    
        </div>
    )
};