"use client"

import { getProjects } from '@/features/projects/service';
import { Card } from '@/shared/components/Card';
import { useEffect, useState } from 'react';

export default function Projects() {
  const [projects , setProjects] = useState([]);

  useEffect(() => {
    const  fetchProjects = async ()  => {
      const res = await getProjects();
      console.log("CARDS PROJECT Res" , res);

      setProjects(res);
    }
    fetchProjects();
  } , []);

  return (
    <div className='w-full'>
      <div className="w-full">
        <h4 className="relative z-10 mx-auto max-w-4xl text-center text-xl font-bold md:text-4xl lg:text-5xl mt-30">
          A small selection of recent{" "}
          <p className="text-violet-400">projects</p>
        </h4>
        <div className="w-full flex flex-row flex-wrap gap-5 p-5 justify-center overflow-auto h-[800px] mt-10">
          {/* <Card title="TEST" thumb_nail="it_support.png" description="test" link="#"/> */}
          {
            projects.map( project =>
                <Card 
                  key={project.id}
                  title={project.title}
                  thumb_nail={project.thumb_nail} 
                  description={project.description} 
                  link={project.link}
                />
            )
          }
        </div>
      </div>
    </div>
  );
}
