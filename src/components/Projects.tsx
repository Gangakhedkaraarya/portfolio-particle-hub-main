
import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const projects = [
    {
      title: "Shravasti Aadhar Foundation Web Project",
      date: "Jul 2024 - Sep 2024",
      description: "Designed and developed a fully functional, responsive website for an NGO supporting underprivileged communities.",
      points: [
        "User-friendly interface with an intuitive design.",
        "Comprehensive sections for mission, vision, and initiatives.",
        "Integrated contact forms and donation portals.",
        "Cross-platform compatibility for seamless access."
      ],
      liveDemo: "https://gangakhedkaraarya.github.io/NGO/",
      github: "https://github.com/Gangakhedkaraarya/NGO"
    },
    {
      title: "Real-Time Weather App",
      date: "Jan 2025",
      description: "A sleek, user-friendly weather application that fetches real-time weather data using the OpenWeather API.",
      points: [
        "Displays real-time weather updates for any location.",
        "Animated weather icons that change based on conditions.",
        "Optimized API rate-limiting and LocalStorage caching for better performance.",
        "Fully responsive and works seamlessly across devices."
      ],
      liveDemo: "https://api-integration-gamma.vercel.app/",
      github: "https://github.com/Gangakhedkaraarya/api.integration.git"
    },
    {
      title: "LinkedIn Job Automator - Chrome Extension",
      date: "Feb 2025",
      description: "Developed a Chrome extension that automates job applications on LinkedIn. The extension allows users to apply for jobs seamlessly by setting filters and running automation scripts.",
      points: [
        "Built using JavaScript, HTML, CSS, and Chrome Extension APIs.",
        "Automates job application processes with custom filters.",
        "Enhances efficiency by reducing manual effort."
      ],
      github: "https://github.com/Gangakhedkaraarya/linkedin-job-automator.git"
    },
    {
      title: "Real-Time Code Symphony",
      date: "Feb 2024",
      description: "Built a real-time collaborative coding environment using React.js, Node.js, Socket.io, and CodeMirror. Supports multiple users writing and executing code together in real time.",
      points: [
        "Integrated live code execution and syntax highlighting for better user experience.",
        "Supports real-time collaboration with multiple users.",
        "Hosted on Vercel for seamless performance."
      ],
      liveDemo: "https://real-time-code-symphony.vercel.app/"
    },
    {
      title: "E-Commerce Website for a Jewelry Shop with Live Price Updates",
      date: "Feb 2025 - Mar 2025",
      description: "Developed a fully functional E-commerce website for a jewelry shop, designed to offer a seamless online shopping experience while incorporating live gold and silver price updates.",
      liveDemo: "https://backend-wizardry-lounge-main.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 px-6 bg-gradient-to-b from-blue-50 to-white relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="section-title"
          ref={ref}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
            >
              <span className="inline-block text-xs font-semibold text-primary bg-blue-50 px-3 py-1 rounded-full mb-4">
                {project.date}
              </span>
              
              <h3 className="text-xl md:text-2xl font-semibold mb-3">{project.title}</h3>
              
              <p className="text-muted-foreground mb-5">{project.description}</p>
              
              {project.points && (
                <ul className="space-y-2 mb-6">
                  {project.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              <div className="flex flex-wrap gap-4 mt-6">
                {project.liveDemo && (
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="primary-button text-sm"
                  >
                    Live Demo
                  </a>
                )}
                
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="secondary-button text-sm"
                  >
                    View Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
