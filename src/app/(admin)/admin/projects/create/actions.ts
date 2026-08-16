"use server";

import type { ActionResponse } from "@/shared/types/action-response";
import { createProject } from "@/features/projects/service";
import { writeFile } from "fs/promises"
import path from "path"
import { put } from "@vercel/blob";


export async function createAction(
    _: ActionResponse,
    formData: FormData
): Promise<ActionResponse> {
    try {
        const file = formData.get("thumb_nail");
    
        if (!(file instanceof File)) {
            throw new Error("Thumbnail is required.");
        }    

        // Upload to Vercel Blob
        const blob = await put(
            `projects/${file.name}`,
            file,
            {
                access: "public",
            }
        );


        // Save the Blob URL in  database
        await createProject({
            title: formData.get("title"),
            link: formData.get("link"),
            description: formData.get("description"),
            thumb_nail: blob.url,
        });


        // const bytes = await file.arrayBuffer()
        // const buffer = Buffer.from(bytes)
        // const filePath = path.join(process.cwd(), "public/projects", file.name)
        // await writeFile(filePath, buffer)
    
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