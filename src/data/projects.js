import breatheESG from "../assets/images/breathe-esg.png";
import projectManagement from "../assets/images/project-management.png";
import portfolioProject from "../assets/images/portfolio-project.png";

export const projects = [
  {
    id: 1,
    title: "Breathe ESG Platform",
    image: breatheESG,
    description:
      "Full-stack ESG analytics platform with dashboards, reporting, workflow management, and secure REST APIs.",
    technologies: [
      "Django REST Framework",
      "React.js",
      "JavaScript",
      "SQL",
      "Vercel",
      "Render"
    ],
    liveDemo: "https://breathe-esg-frontends.vercel.app",
    github: "https://github.com/srinu897/breathe-esg-platform.git",
    featured: true
  },

  {
    id: 2,
    title: "Project Management System",
    image: projectManagement,
    description:
      "Task and workflow management application with CRUD operations, API integration, and relational database design.",
    technologies: [
      "Node.js",
      "MySQL",
      "JavaScript"
    ],
    liveDemo: "https://project-management-system-twzj.onrender.com/signup",
    github:
      "https://github.com/srinu897/project-management-system.git",
    featured: true
  },

  {
    id: 3,
    title: "Personal Portfolio Website",
    image: portfolioProject,
    description:
      "Responsive portfolio website showcasing projects, skills, certifications, and achievements.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    liveDemo: "http://localhost:5173/",
    github:
      "https://github.com/srinu897/portfolio.git",
    featured: true
  }
];