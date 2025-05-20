
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Github, 
  Code,
  Figma,
  Database,
  Smartphone
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = {
    frontend: [
      { name: "Flutter & Dart", level: 92 },
      { name: "React.js", level: 88 },
      { name: "JavaScript/TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Responsive Design", level: 95 },
      { name: "UI/UX Design", level: 85 },
      { name: "React Native", level: 80 },
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "Firebase", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "REST APIs", level: 88 },
      { name: "Python", level: 75 },
      { name: "GraphQL", level: 70 },
    ],
    other: [
      { name: "Git & GitHub", level: 90 },
      { name: "AI/ML Basics", level: 75 },
      { name: "Blockchain Basics", level: 70 },
      { name: "Figma", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 88 },
      { name: "Problem Solving", level: 85 },
    ],
  };

  const technologies = [
    { name: "Flutter", icon: Smartphone },
    { name: "React", icon: Code },
    { name: "Node.js", icon: Database },
    { name: "Firebase", icon: Database },
    { name: "MongoDB", icon: Database },
    { name: "Tailwind CSS", icon: Code },
    { name: "Express.js", icon: Database },
    { name: "TypeScript", icon: Code },
    { name: "Git", icon: Github },
    { name: "Python", icon: Code },
  ];

  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="flex items-center text-2xl md:text-3xl font-bold mb-12">
            <span className="heading-highlight mr-2">03.</span>
            <span>My Skillset</span>
            <span className="h-px bg-slate-dark/60 flex-grow ml-4"></span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Tabs defaultValue="frontend" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 mb-8 w-full max-w-md mx-auto bg-navy-light">
              <motion.div whileTap={{ scale: 0.95 }}>
                <TabsTrigger value="frontend" className="data-[state=active]:bg-highlight data-[state=active]:text-navy">
                  <Smartphone size={18} className="mr-2" />
                  Front-end
                </TabsTrigger>
              </motion.div>
              <motion.div whileTap={{ scale: 0.95 }}>
                <TabsTrigger value="backend" className="data-[state=active]:bg-highlight data-[state=active]:text-navy">
                  <Database size={18} className="mr-2" />
                  Back-end
                </TabsTrigger>
              </motion.div>
              <motion.div whileTap={{ scale: 0.95 }}>
                <TabsTrigger value="other" className="data-[state=active]:bg-highlight data-[state=active]:text-navy">
                  <Code size={18} className="mr-2" />
                  Other
                </TabsTrigger>
              </motion.div>
            </TabsList>
            
            {Object.entries(skills).map(([category, categorySkills]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid gap-6">
                  {categorySkills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <motion.span 
                          className="text-slate-light"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: category === activeTab ? 1 : 0, x: category === activeTab ? 0 : -20 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          {skill.name}
                        </motion.span>
                        <motion.span 
                          className="text-highlight text-sm font-mono"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: category === activeTab ? 1 : 0, x: category === activeTab ? 0 : 20 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="h-2 bg-navy-light rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-highlight rounded-full"
                          initial={{ width: 0, opacity: 0.3 }}
                          animate={{ 
                            width: category === activeTab ? `${skill.level}%` : 0,
                            opacity: 0.8
                          }}
                          transition={{ 
                            duration: 0.6, 
                            delay: index * 0.05 + 0.2,
                            ease: "easeOut"
                          }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="mt-16">
            <h3 className="text-xl text-slate-light font-medium mb-6 text-center">Technologies I work with</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {technologies.map((tech, index) => (
                <motion.div 
                  key={tech.name}
                  whileHover={{ y: -5, scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 + 0.5 }}
                >
                  <Card className="bg-navy-light border-slate-dark/30 hover:border-highlight/50 transition-colors group h-full">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <tech.icon className="w-12 h-12 mb-3 text-highlight opacity-80 group-hover:opacity-100 transition-opacity" />
                      <span className="text-center font-medium text-slate-light">{tech.name}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;
