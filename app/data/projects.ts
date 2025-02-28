
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
    {
      id: "1",
      title: "IoT Smart Home System",
      description: "Complete smart home automation with sensors, mobile app control, and real-time monitoring.",
      technologies: ["Python", "Flask", "Arduino", "MQTT", "React"],
      imageUrl: "/images/projects/smart-home.jpeg",
      githubUrl: "https://github.com/sincere-abayo/smart-home"
    },
    {
      id: "2",
      title: "E-Learning Platform",
      description: "Full-stack learning management system with video courses and progress tracking.",
      technologies: ["Laravel", "PHP", "MySQL", "Vue.js"],
      imageUrl: "/images/projects/e-learning.jpeg",
      githubUrl: "https://github.com/sincere-abayo/e-learning"
    },
    {
      id: "3",
      title: "Fleet Management System",
      description: "Real-time vehicle tracking and management platform with analytics dashboard.",
      technologies: ["Python", "Django", "PostgreSQL", "React"],
      imageUrl: "/images/projects/fleet.png",
      githubUrl: "https://github.com/sincere-abayo/fleet"
    },
    {
      id: "4",
      title: "Healthcare Management",
      description: "Electronic health records system with appointment scheduling and patient portal.",
      technologies: ["Laravel", "PHP", "MySQL", "React"],
      imageUrl: "/images/projects/healthcare.jpeg",
      githubUrl: "https://github.com/sincere-abayo/healthcare"
    },
    {
      id: "5",
      title: "Weather Station",
      description: "IoT-based weather monitoring system with web interface and data visualization.",
      technologies: ["Python", "Flask", "IoT", "React"],
      imageUrl: "/images/projects/weather.jpeg",
      githubUrl: "https://github.com/sincere-abayo/weather"
    },
    {
      id: "6",
      title: "E-Commerce Platform",
      description: "Full-featured online store with payment integration and inventory management.",
      technologies: ["Laravel", "PHP", "MySQL", "Vue.js"],
      imageUrl: "/images/projects/ecommerce.jpeg",
      githubUrl: "https://github.com/sincere-abayo/ecommerce"
    }
  ];

