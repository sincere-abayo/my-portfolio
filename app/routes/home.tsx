import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";
import { SkillCard } from "../components/SkillCard";
import { SocialLinks } from "../components/SocialLinks";

// Define your skills data
const skills = [
  {
    name: "React",
    icon: "icons/react.svg",
    level: "Advanced"
  },
  {
    name: "TypeScript",
    icon: "icons/typescript.svg",
    level: "Intermediate"
  },
  {
    name: "Node.js",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    level: "Advanced"
  },
  {
    name: "Python",
    icon: "/icons/python.svg",
    level: "Advanced"
  },
  {
    name: "Flask",
    icon: "/icons/flask.svg",
    level: "Advanced"
  },
  {
    name: "PHP",
    icon: "/icons/php.svg",
    level: "Advanced"
  },
  {
    name: "Laravel",
    icon: "/icons/laravel.svg",
    level: "Advanced"
  },
  {
    name: "IoT/Embedded",
    icon: "/icons/iot.svg",
    level: "Advanced"
  }
];

export default function Home() {
  return (
    <>
      <Navigation />
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }} 
        className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white"
      >
        <motion.div 
          initial={{ y: 20 }}
          animate={{ y: 0 }} 
          className="container mx-auto px-4 py-16"
        >
          {/* ocial links */}
          <div className="mt-20">
            <h1 className="text-6xl font-bold mb-4">
              Hi, I'm <span className="text-blue-500">Abayo Sincere</span>
            </h1>
            <p className="text-2xl text-gray-300">
              Full Stack Developer | Problem Solver | Tech Enthusiast | IoT Enginner
            </p>
            <SocialLinks />
          </div>
          
          {/* Skills Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-6">Featured Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <SkillCard 
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.main>
    </>
  );
}
