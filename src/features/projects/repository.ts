import { BaseRepository } from "@/shared/repository/BaseRepository";
import { projects } from "@/db/schema/projects";
import { db } from "@/db";
import { eq, lt, gte, ne } from 'drizzle-orm';


export class ProjectsRepository
    extends BaseRepository<typeof projects>
{
    constructor() {
        super(projects);
    }

}

export const projectsRepository = new ProjectsRepository();