import React from "react";
import Separator from "./common/separator";
import { ProjectData } from "./Data/projects";
import ProjectCard from "./project-card";
import "../css/projects.css";
function Projects(){
    const data=ProjectData;
    return(
        <div className="projects">
            <Separator />
            <label className="title">Projects</label>
            <div>
                {
                    data.map((project) =>{
                        return <ProjectCard project={project}/>;
                    }

                    )
                }
            </div>
        </div>
    );
}
export default Projects;