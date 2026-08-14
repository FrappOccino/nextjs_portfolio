import { BaseRepository } from "@/shared/repository/BaseRepository";
import { skills } from "@/db/schema/skills";

export class SkillRepository
    extends BaseRepository<typeof skills>
{
    constructor() {
        super(skills);
    }

    // async findByName(name: string) {
    //     // Skill-specific database logic
    // }
}

export const skillRepository = new SkillRepository();