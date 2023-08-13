import React from "react";
import "../css/skill-card.css";

import 'devicon/devicon.min.css';



function SkillCard({skill}){
    
    return(
        <div className="skill-card">
            <div className="skill-icon">{skill.icon}</div>

            <label className="skill-name">{skill.name}</label>
        </div>
    );
}
export {SkillCard};