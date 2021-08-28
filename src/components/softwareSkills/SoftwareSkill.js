import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill({title}) {
  const skills = title === "Programming Languages" 
  ? skillsSection.programmingLang
  : title === "Frontend" 
  ? skillsSection.softwareSkills 
  : title === "Backend" 
  ? skillsSection.backendSkills
  : skillsSection.toolSkills;
  return (
    <div>
      <div className="software-skills-main-div">
      <p className="skill-title">{title}</p>
        <ul className="dev-icons">
          {skills.map((skills, i) => {
            return (
              
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {/* <i class="devicon-flutter-plain colored"></i> */}
                <i class={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
              
            );
          })}
        </ul>
      </div>
    </div>
  );
}
