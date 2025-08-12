import { SkillCard } from "../components/UI/SkillCard";
import type { SkillDataType } from "../components/types";
import { useEffect, useState } from "react";
import { getSkillsAPI } from "../components/getApi/GetSkillsAPI";

export const SkillPage = () => {
  const [skillsData, setSkillsData] = useState<SkillDataType[]>([]);

  useEffect(() => {
    getSkillsAPI().then(setSkillsData);
  }, []);

  return (
    <div className="skills-page page">
      <h1 className="skills-title title">My Tech Nebula</h1>
      <div className="skills-info">
        {skillsData.map((currSkill: SkillDataType) => (
          <SkillCard key={currSkill.title} currSkill={currSkill} />
        ))}
      </div>
    </div>
  );
};
