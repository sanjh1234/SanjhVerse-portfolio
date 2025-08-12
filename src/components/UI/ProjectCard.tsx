import type React from "react";
import type { ProjectDataType } from "../types";

interface ProjectCardProps {
  currProj: ProjectDataType;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ currProj }) => {
  const { title, icon, tech, link } = currProj;

  const handleProjCard = () => {
    return <div></div>;
  };

  return (
    <div className="project-div" onMouseOver={handleProjCard}>
      <img src={icon} alt={title} className="project-img" />
      <h2 className="project-name">{title}</h2>
      <div className="project-desc">
        <h2 className="project-desc-name">{title}</h2>
        {/* <div className="project-info">{info}</div> */}
        <div className="project-tech">
          <p>{tech.join(" • ")}</p>
        </div>
        <div className="project-link">
          <a href={link} target="_blank">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};
