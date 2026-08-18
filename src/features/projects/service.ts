"use server";

import { projectsRepository } from "@/features/projects/repository";
import { writeFile } from "fs/promises"
import path from "path"
import { del } from '@vercel/blob';

export async function getProjects() {
    return await projectsRepository.findAll();
}



export async function createProject(data : any ) {
    return await projectsRepository.create(data);
}

export async function deleteProject(data: any) {
    await projectsRepository.delete(data);

    return {
        success: true,
    };
}

export async function deleteThumbNail(urlToDelete: any) {
    await del(urlToDelete);

    return {
        success: true,
    };
}