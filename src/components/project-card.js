import React from "react";
import "../css/project-card.css";
import "../images/freelancing.png"
function ProjectCard({ project }){
    
    return(
        
        <div className="project-card">
            <div className="info">
                <label className="project-title">{project.title}</label>
                <p>{project.about}</p>
                <div className="technologies">
                    {project.technologies.map((tag) =>{
                        return <label className="tag">{tag}</label>;
                    }

                    )}
                </div>
            </div>
             
            <img src={require("../images/freelancing.png")} className="photo" alt="projectImage"/>
        </div>
    );
}
export default ProjectCard;