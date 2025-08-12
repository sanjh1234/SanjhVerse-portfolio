import type { SkillDataType } from "../types";

export const getSkillsAPI = async (): Promise<SkillDataType[]> => {
  const response = await fetch("/API/skillData.json");
  if (!response.ok) {
    throw new Error("Failed to Fetch My Skills");
  }
  const data: SkillDataType[] = await response.json();
  return data;
};
