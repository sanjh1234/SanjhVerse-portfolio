import type React from "react";
import type { SkillDataType } from "../types";

interface SkillCardProps {
  currSkill: SkillDataType;
}

export const SkillCard: React.FC<SkillCardProps> = ({ currSkill }) => {
  const { title, icon, level } = currSkill;
  return (
    <div className="skill-div">
      <div className="skill-img-div">
        <img className="skill-img" src={icon} alt={title} />
      </div>
      <div className="skill-name">{title}</div>
      <div className="skill-level">{level}</div>
    </div>
  );
};
