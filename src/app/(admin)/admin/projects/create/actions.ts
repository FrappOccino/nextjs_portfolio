"use server";

import type { ActionResponse } from "@/shared/types/action-response";
import { createProject } from "@/features/projects/service";
import { writeFile } from "fs/promises"
import path from "path"

export async function createAction(
    _: ActionResponse,
    formData: FormData
): Promise<ActionResponse> {
    try {
        console.log(formData);
        const file = formData.get("thumb_nail");
        console.log(file.name);
        await createProject({
            
                title: formData.get("title"),
                link: formData.get("link"),
                description: formData.get("description"),
                thumb_nail: file.name,
                        
            }
        );

        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)
        const filePath = path.join(process.cwd(), "public/projects", file.name)
        await writeFile(filePath, buffer)
    
        return {
            success: true,
            message: "Project created successfully.",
        };
    } catch (error) {
        console.error("FAILED DURING SKILL CREATION:", error);

        return {
            success: false,
            message: error instanceof Error ? error.message : "Creation failed.",
        };
    }
}