
import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const About = () => {
  const techList = [
    "Flutter & Dart",
    "React.js",
    "Node.js & Express",
    "Tailwind CSS",
    "Firebase & MongoDB",
    "Python & AI/ML"
  ];

  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="flex items-center text-2xl md:text-3xl font-bold mb-12">
            <span className="heading-highlight mr-2">01.</span>
            <span>About Me</span>
            <span className="h-px bg-slate-dark/60 flex-grow ml-4"></span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-4">
            <AnimatedSection delay={0.1}>
              <p>
                I'm a passionate final-year Computer Science student (CGPA 3.51) at Daffodil International University. 
                My journey into development started with a curiosity about how digital systems work, which quickly evolved into a love for 
                building clean, scalable applications across web and mobile platforms.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <p>
                With experience in both academic leadership and entrepreneurship, I've had the opportunity to work on diverse 
                projects from startup platforms to food-tech businesses. I believe in creating technology that not only functions 
                flawlessly but also delivers delightful user experiences.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <p>
                Currently, I'm expanding my skills in AI/ML and blockchain technologies to create more intelligent and secure applications. 
                When I'm not coding, you can find me exploring new tech trends, mentoring junior developers, or working on my 
                entrepreneurial ventures.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="mt-6">
                <h3 className="text-slate-light font-medium mb-2">Technologies I've been working with recently:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {techList.map((tech, index) => (
                    <motion.div 
                      key={tech}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.1 + 0.5,
                        type: "spring", 
                        stiffness: 100 
                      }}
                    >
                      <motion.span 
                        className="text-highlight mr-2"
                        whileHover={{ scale: 1.2 }}
                      >
                        ▹
                      </motion.span>
                      <span>{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.5}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-highlight/50 rounded-lg blur opacity-30 group-hover:opacity-80 transition duration-500"></div>
              <div className="relative">
                <div className="overflow-hidden rounded-lg">
                  <motion.div 
                    className="aspect-square bg-slate-dark/70 relative rounded-lg overflow-hidden"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-navy/30 hover:bg-navy/0 transition-colors z-10"></div>
                    <img
                      src="/assets/profile.png"
                      alt="Md. Mynul Islam"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
