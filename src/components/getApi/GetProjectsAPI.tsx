import type { ProjectDataType } from "../types";

export const getProjectsApi = async ():Promise<ProjectDataType[]> => {
    const response = await fetch("/API/projectData.json");
    if(!response.ok){
        throw new Error("Failed to Fetch My Projects");
    }
    const data:ProjectDataType[] = await response.json();
    return data;
}