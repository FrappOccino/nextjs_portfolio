"use client";

import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

type IconResult = {
    name: string;
    prefix: string;
};

export default function IconPicker() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState<IconResult[]>([]);
    const [selected, setSelected] = useState("");

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
        <div className="w-full max-w-xl space-y-4">
            {/* Search */}
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search technology or brand..."
                className="input input-bordered w-full"
            />

            {selected && (
                <div>
                    <div className="flex items-center gap-3 rounded-lg border p-3">
                        <Icon icon={selected} width={32} height={32} />

                        <div>
                            <p className="font-medium">Selected icon</p>
                            <p className="text-sm opacity-60">{selected}</p>
                        </div>
                    </div>
                    <input
                        name="icon"
                        type="text"
                        value={selected}
                        hidden    
                    />
                </div>
            )}


            <div className="grid grid-cols-4 gap-2">
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
    );
}