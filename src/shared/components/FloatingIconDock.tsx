import React from "react";
import { FloatingDock } from "@/shared/components/ui/floating-dock";
import { useState , useEffect } from "react";
import { getByType , getType } from '@/features/skills/service';
import { Icon } from "@iconify/react";


interface Skill {
    title: string;
    icon: string;
    href: string;
}
export function FloatingIconDock(props : any) {
    const [skills , setSkills ] = useState<any[]>([]);
    const [typeID , setTypeID ] = useState(0);


    useEffect(() => {
        const Types = async () => {
            const result = await getType(props.type);

            console.log("type:", props.type);
            console.log("getType result:", result);

            const [res] = result;

            console.log("res:", res);

            if (!res) {
                console.error(`No type found for: ${props.type}`);
                return;
            }

            setTypeID(res.id);
        };

        Types();
    }, [props.type]);


    useEffect(() => {
        const fetchSkillsData = async () => {
            if (!typeID) return; 
            
            try {
                const response = await getByType(typeID);
                
                const transformedSkills = response.map((skill) => ({
                    ...skill,
                    icon: (
                        <Icon
                            icon={skill.icon ??  "mdi:help-circle"}
                            width={32}
                            height={32}
                        />
                    ),
                }));
                
                setSkills(transformedSkills);
            } catch (error) {
                console.error("Error fetching skills:", error);
            }
        };
    
        fetchSkillsData();
    }, [typeID])
  return (
    <div className="flex items-center mt-5">
      <FloatingDock
        mobileClassName="translate-y-20"
        items={skills}
      />
    </div>
  );
}
