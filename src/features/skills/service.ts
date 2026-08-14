"use server";

import { skillRepository } from "@/features/skills/repository";

export async function getSkills() {
    return await skillRepository.findAll();
}

export async function createSkill(data : any ) {
    return await skillRepository.create(data);
}

export async function getByType(type: number) {

    const response = await skillRepository.getSkillsByType(type);
    console.log("getByType response :", response);
    return response;
}

export async function getType(type: string) {

    const response = await skillRepository.getType(type);
    console.log("getType response :", response);
    return response;
}