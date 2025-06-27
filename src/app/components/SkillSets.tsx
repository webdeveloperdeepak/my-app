import React from "react";

const skills = {
  frontend: [
    { name: "Next.js", level: 80 },
    { name: "React", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "JavaScript", level: 75 },
  ],
  backend: [
    { name: "Node.js", level: 65 },
    { name: "MongoDB", level: 50 },
    { name: "Mongoose", level: 85 },
    { name: "TypeScript", level: 70 },
  ],
  others: [
    { name: "RESTful APIs", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "Responsive Design", level: 90 },
    { name: "Version Control (Git)", level: 85 },
  ],
};

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="w-full">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-gray-700">{name}</span>
      <span className="text-sm text-gray-500">{level}%</span>
    </div>
    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full transition-all duration-700 ease-out"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

const SkillSets: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-700 mb-14 tracking-tight">
        My Skill Sets
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white/80 border border-amber-200 shadow-xl p-8 rounded-3xl backdrop-blur-sm">
        {/* Frontend */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-amber-700 border-b pb-2 border-amber-300">
            Frontend Technologies
          </h3>
          {skills.frontend.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>

        {/* Backend */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-amber-700 border-b pb-2 border-amber-300">
            Backend Technologies
          </h3>
          {skills.backend.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>

        {/* Other Skills */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-amber-700 border-b pb-2 border-amber-300">
            Other Skills
          </h3>
          {skills.others.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSets;
// 