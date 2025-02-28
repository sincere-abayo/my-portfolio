import { motion } from "framer-motion";
import { Navigation } from "../components/Navigation";
import { PageTransition } from "../components/PageTransition";
import { SocialLinks } from "../components/SocialLinks";

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
};

export default function About() {
  return (
    <>
      <Navigation />
      <PageTransition>
        <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
          <div className="container mx-auto px-4 py-16 mt-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
            >
              About Me
            </motion.h1>
            
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div 
                className="space-y-8 backdrop-blur-lg bg-white/5 p-8 rounded-xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div>
                  <h2 className="text-2xl font-semibold text-blue-400 mb-4">Background</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Full-stack developer specializing in Python, PHP, and IoT systems.
                    Passionate about creating innovative solutions that bridge hardware and software.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold text-blue-400 mb-4">Experience</h2>
                  <motion.ul className="space-y-3">
                    {[
                      "Backend Development with Flask and Laravel, building RESTful APIs and microservices",
                      "IoT and Embedded Systems Development using Arduino, Raspberry Pi and custom sensors",
                      "Full Stack Web Applications with React, Vue.js, Node.js and modern databases",
                      "System Architecture Design including cloud infrastructure and scalable solutions",
                      "Database Management with MySQL, PostgreSQL and MongoDB",
                      "API Integration and Third-party Service Implementation",
                      "DevOps practices including CI/CD, Docker and AWS services"                    
                    ].map((item, i) => (
                      <motion.li
                        key={item}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={listItemVariants}
                        className="flex items-center space-x-2"
                      >
                        <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                        <span className="text-gray-300">{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
              

<motion.div 
  className="space-y-8 backdrop-blur-lg bg-white/5 p-8 rounded-xl"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.4 }}
>
  <div>
    <h2 className="text-2xl font-semibold text-blue-400 mb-4">Education</h2>
    <motion.ul className="space-y-4">
      {[
        {
          degree: "Advanced Diploma in IT",
          school: "IPRC Kigali College",
          year: "2023-Present"
        },
        {
          degree: "High School Diploma in Software Development", 
          school: "Collegion SAMZ",
          year: "2019-2022"
        }
      ].map((edu, i) => (
        <motion.li
          key={edu.degree}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={listItemVariants}
          className="border-l-2 border-blue-500 pl-4"
        >
          <h3 className="text-lg font-medium text-white">{edu.degree}</h3>
          <p className="text-gray-400">{edu.school}</p>
          <p className="text-sm text-blue-400">{edu.year}</p>
        </motion.li>
      ))}
    </motion.ul>
  </div>

  <div>
    <h2 className="text-2xl font-semibold text-blue-400 mb-4">Certifications</h2>
    <motion.ul className="space-y-4">
      {[
        {
          name: "Full Stack Development",
          issuer: "Code Academy",
          year: "2023"
        },
        {
          name: "IOT AND EMBEDED SYSTEM",
          issuer: "IDA TECHNOLOGY",
          year: "2022"
        },
        {
          name: "Laravel Advanced Development",
          issuer: "PHP Masters",
          year: "2023"
        }
      ].map((cert, i) => (
        <motion.li
          key={cert.name}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={listItemVariants}
          className="flex items-start space-x-3"
        >
          <span className="h-2 w-2 mt-2 bg-purple-500 rounded-full"></span>
          <div>
            <h3 className="text-lg font-medium text-white">{cert.name}</h3>
            <p className="text-gray-400">{cert.issuer}</p>
            <p className="text-sm text-purple-400">{cert.year}</p>
          </div>
        </motion.li>
      ))}
<SocialLinks />

    </motion.ul>
  </div>
</motion.div>

            </div>
          </div>
        </main>
      </PageTransition>
    </>
  );
}