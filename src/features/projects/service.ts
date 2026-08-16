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