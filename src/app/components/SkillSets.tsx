"use client";
import React from "react";

const skills = {
  frontend: [
    { name: "Next.js", level: 90 },
    { name: "React", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "JavaScript", level: 90 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "MongoDB", level: 80 },
  ],
  others: [
    { name: "RESTful APIs", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "Responsive Design", level: 90 },
    { name: "Version Control (Git)", level: 85 },
  ],
};

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-gray-700">{name}</span>
      <span className="text-sm text-gray-500">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-3">
      <div
        className="bg-blue-600 h-3 rounded-full"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

const SkillSets: React.FC = () => {
  return (
    <div className="mb-24">
      <h1 className="h1-heading">My Skill Sets</h1>
      <div className="grid grid-cols-1 border-[1.5px] shadow-lg border-amber-700 p-9 rounded-md md:grid-cols-3 gap-9 w-full ">
        <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Frontend Technologies</h3>
            {skills.frontend.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
        </div>
        <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Backend Technologies</h3>
            {skills.backend.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
        </div>
        <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Other Skills</h3>
            {skills.others.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSets;
