import type { ProjectDataType } from "../components/types";
import { ProjectCard } from "../components/UI/ProjectCard";
import { useEffect, useState } from "react";
import { getProjectsApi } from "../components/getApi/GetProjectsAPI";

export const ProjectPage = () => {
  const [projectData, setProjectData] = useState<ProjectDataType[]>([]);

  useEffect(() => {
    getProjectsApi().then(setProjectData);
  }, []);

  return (
    <div className="project-page page">
      <div className="project-title-div">
        <h1 className="project-title title">Launchpad: <br /> My Code Missions</h1>
        <img
          src="\spaceImg\astSShip1.png"
          alt="On Mission Icon"
          className="project-icon"
        />
      </div>
      <div className="project-container scroll-smooth">
        <div className="project-content">
          {projectData.map((currProj: ProjectDataType) => (
            <ProjectCard key={currProj.title} currProj={currProj} />
          ))}
        </div>
      </div>
    </div>
  );
};
