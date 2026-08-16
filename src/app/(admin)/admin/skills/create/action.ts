"use server";

import type { ActionResponse } from "@/shared/types/action-response";
import { createSkill } from "@/features/skills/service";

export async function createAction(
    _: ActionResponse,
    formData: FormData
): Promise<ActionResponse> {
    try {
        console.log(formData);
        await createSkill({
            title: formData.get("title"),
            href: formData.get("href"),
            icon: formData.get("icon"),
            type: formData.get("type"),
                    
        }
        );

        return {
            success: true,
            message: "Skill created successfully.",
        };
    } catch (error) {
        console.error("FAILED DURING SKILL CREATION:", error);

        return {
            success: false,
            message: error instanceof Error ? error.message : "Creation failed.",
        };
    }
}