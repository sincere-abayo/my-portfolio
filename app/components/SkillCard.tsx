interface Skill {
  name: string;
  icon: string;
  level: string;
}

export function SkillCard({ name, icon, level }: Skill) {
  return (
    <div className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
      <img src={icon} alt={name} className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-400">{level}</p>
    </div>
  );
}
