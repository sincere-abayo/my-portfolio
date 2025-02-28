import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import { Navigation } from "../components/Navigation";


export default function Projects() {
  const [filter, setFilter] = useState<string>("all");
  
  const technologies = ["all", ...new Set(projects.flatMap(p => p.technologies))];
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.technologies.includes(filter));

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-20">
        <div className="container mx-auto px-4 py-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-8"
          >
            My Projects
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            {technologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-full ${
                  filter === tech 
                    ? "bg-blue-500 text-white" 
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                } transition-colors`}
              >
                {tech}
              </button>
            ))}
          </motion.div>
          
          <AnimatePresence>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index}
                />
              ))}
            </div>
          </AnimatePresence>
        </div>
      </main>
    </>
  );
}
