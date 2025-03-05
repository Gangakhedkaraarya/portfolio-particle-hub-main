
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'C++', level: 95 },
    { name: 'React.js', level: 88 },
    { name: 'Node.js', level: 82 },
    { name: 'MongoDB', level: 78 },
    { name: 'SQL', level: 80 },
    { name: 'Django', level: 75 },
  ];
  
  return (
    <section id="skills" className="py-20 md:py-32 px-6 bg-gradient-to-b from-white to-blue-50 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="section-title"
          ref={ref}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Technical Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="w-16 h-16 flex items-center justify-center mb-4 text-primary">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M12 2L2 7L12 12L22 7L12 2Z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M2 17L12 22L22 17" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M2 12L12 17L22 12" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1">
                <div 
                  className="bg-primary h-1.5 rounded-full" 
                  style={{ 
                    width: `${skill.level}%`,
                    transition: "width 1s ease-in-out",
                  }}
                ></div>
              </div>
              <span className="text-xs text-muted-foreground">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
