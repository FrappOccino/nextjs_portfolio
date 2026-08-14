"use server";

import { skillRepository } from "@/features/skills/repository";

export async function getSkills() {
    return await skillRepository.findAll();
}

export async function createSkill(data : any ) {
    return await skillRepository.create(data);
}