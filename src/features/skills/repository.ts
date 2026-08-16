import { BaseRepository } from "@/shared/repository/BaseRepository";
import { skills } from "@/db/schema/skills";
import { skill_types } from "@/db/schema/skill_types";
import { db } from "@/db";
import { eq, lt, gte, ne } from 'drizzle-orm';


export class SkillRepository
    extends BaseRepository<typeof skills>
{
    constructor() {
        super(skills);
    }

    async getSkillsByType(type: number) {
        const res = await db.select({
            title: skills.title,
            href: skills.href,
            icon: skills.icon,
        }).from(skills).where(eq(skills.type, type))
        
        
        console.log("getSkillsByType repo response :", res)
        return res;
    }

    async getType(type : string){
        const res = await db.select().from(skill_types).where(eq(skill_types.type , type));

        console.log("getType repo response :", res);
        return res;
    }

    async getAllType(){
        const res = await db.select().from(skill_types);

        console.log("getAllType repo response :", res);
        return res;
    }

    async getAllWithType(){
        const res = await db.select({
            id: skills.id,
            title: skills.title,
            icon: skills.icon,
            href: skills.href,
            type: {
                id: skill_types.id,
                type: skill_types.type,
            },
        })
        .from(skills)
        .leftJoin(
            skill_types,
            eq(skills.type, skill_types.id)
        );

        console.log("getAllWithType repo response :", res);
        return res;
    }
    
}

export const skillRepository = new SkillRepository();