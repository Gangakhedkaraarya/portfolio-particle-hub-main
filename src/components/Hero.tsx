
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      containerRef.current.style.setProperty('--x', `${x * 10}px`);
      containerRef.current.style.setProperty('--y', `${y * 10}px`);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="grain"></div>
      <div 
        ref={containerRef}
        className="relative max-w-7xl mx-auto pt-32 pb-20 md:pt-40 md:pb-32 z-10"
        style={{ transform: 'translate3d(var(--x, 0), var(--y, 0), 0)' }}
      >
        <motion.div 
          className="mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.span 
            className="inline-block text-sm md:text-base mb-4 px-4 py-1.5 rounded-full bg-blue-50 text-blue-500 font-medium"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Full Stack Developer
          </motion.span>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Hello, I'm <span className="text-primary">Aarya</span> <br />
            <span className="text-3xl md:text-5xl lg:text-6xl opacity-90">
              I build things for the web
            </span>
          </motion.h1>
          
          <motion.p 
            className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A passionate developer with a strong background in C++ and web development.
            I focus on creating clean, user-friendly experiences with modern technologies.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a href="#contact" className="primary-button w-full sm:w-auto">
              Let's Connect
            </a>
            <a href="#projects" className="secondary-button w-full sm:w-auto">
              View My Work
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-40 bg-gradient-to-t from-white opacity-80 z-[-1] pointer-events-none"
          animate={{ 
            opacity: [0.6, 0.8, 0.6],
            scale: [0.98, 1, 0.98],
          }}
          transition={{ 
            duration: 8, 
            ease: "easeInOut",
            repeat: Infinity
          }}
        />
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-muted-foreground opacity-70"
        >
          <path 
            d="M12 5V19M12 19L19 12M12 19L5 12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
