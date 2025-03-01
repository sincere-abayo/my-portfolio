import { type Project } from "../data/projects";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setShowDetails(!showDetails)}
      className="group cursor-pointer bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <motion.img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500"
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            filter: showDetails ? "blur(5px)" : "blur(0px)"
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"
          animate={{ opacity: isHovered ? 0.8 : 0.6 }}
        />
        
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
        >
          <span className="text-sm text-blue-400">Click to view details</span>
        </motion.div>
      </div>
      
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="p-4 bg-gray-900/80 border-t border-blue-500/20"
          >
            <h4 className="text-blue-400 font-semibold mb-2">Project Details</h4>
            <p className="text-gray-300 text-sm">{project.description}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="p-6">
        <motion.h3 
          className="text-xl font-bold mb-2"
          animate={{ color: isHovered ? "#3B82F6" : "#FFFFFF" }}
        >
          {project.title}
        </motion.h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <motion.span 
              key={tech}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
              className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
            onClick={(e) => e.stopPropagation()}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span>View Code</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
