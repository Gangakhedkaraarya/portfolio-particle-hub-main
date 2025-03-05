
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <section id="about" className="py-20 md:py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="section-title"
          ref={ref}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <motion.div 
            className="md:col-span-2 relative"
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="aspect-square overflow-hidden rounded-2xl shadow-xl">
              <div className="w-full h-full bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center">
              <img 
  src="/placeholder.png" 
  alt="Aarya Gangakhedkar" 
  className="w-full h-full object-cover"
  onError={(e) => {
    e.currentTarget.src = 'https://via.placeholder.com/500x500/f5f9ff/2563eb?text=AG';
  }}
/>

              </div>
            </div>
            
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-2xl border-2 border-primary/20"></div>
          </motion.div>
          
          <motion.div 
            className="md:col-span-3"
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              I'm Aarya Gangakhedkar, a passionate and skilled coder with a strong background in C++.
              I specialize in problem-solving and web development.
            </p>
            
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              Recently, I worked on the Shravasti Aadhar Foundation website, enhancing its functionality and usability.
              I constantly seek challenges and new opportunities to grow in the tech industry.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-10">
              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                Problem Solver
              </div>
              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                Web Developer
              </div>
              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                Quick Learner
              </div>
              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                Team Player
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
