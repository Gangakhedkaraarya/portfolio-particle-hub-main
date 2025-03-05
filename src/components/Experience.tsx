
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section id="experience" className="py-20 md:py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="section-title"
          ref={ref}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Professional Experience
        </motion.h2>
        
        <motion.div 
          className="glass-panel p-8 md:p-10 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="inline-block text-xs font-semibold text-primary bg-blue-50 px-3 py-1 rounded-full mb-6">
            Feb 2025 - March 2025
          </span>
          
          <h3 className="text-2xl md:text-3xl font-semibold mb-3">WeInterns</h3>
          <h4 className="text-lg md:text-xl text-muted-foreground mb-6">Web Development Intern</h4>
          
          <p className="text-muted-foreground mb-6">
            Working on Web Infrastructure and Full-Stack Development.
          </p>
          
          <ul className="space-y-3">
            {[
              'Developing and maintaining scalable web infrastructure.',
              'Implementing front-end and back-end solutions.',
              'Optimizing website performance and security.',
              'Collaborating with teams to enhance user experience.'
            ].map((item, index) => (
              <motion.li 
                key={index} 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
              >
                <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
