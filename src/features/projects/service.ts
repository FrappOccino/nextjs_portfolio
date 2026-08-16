"use server";

import { projectsRepository } from "@/features/projects/repository";
import { writeFile } from "fs/promises"
import path from "path"

export async function getProjects() {
    return await projectsRepository.findAll();
}



export async function createProject(data : any ) {
    return await projectsRepository.create(data);
}


export async function uploadFile(formData) {
    const file = formData.get("file")
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const filePath = path.join(process.cwd(), "public", file.name)
    await writeFile(filePath, buffer)
}