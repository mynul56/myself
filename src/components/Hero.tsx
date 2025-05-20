
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center section-padding pt-32"
    >
      <motion.div
        className="max-w-4xl"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <span className="heading-highlight">Hi, my name is</span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mt-4 text-slate-light"
        >
          Md. Mynul Islam.
        </motion.h1>
        
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-5xl lg:text-6xl font-bold mt-2 text-slate"
        >
          I build exceptional digital experiences.
        </motion.h2>
        
        <motion.p 
          variants={itemVariants}
          className="mt-6 text-slate max-w-xl text-lg"
        >
          I'm a full-stack developer specializing in creating high-quality web and mobile applications
          using Flutter, React, and modern backend technologies. Currently exploring AI/ML and blockchain
          to craft secure, intelligent applications.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="border-highlight text-highlight hover:bg-highlight/10 text-lg group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Check out my work
              <ArrowRight className="ml-2 inline-block group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
