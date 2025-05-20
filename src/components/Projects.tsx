
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Flutter Smart Home UI",
    description: "Real-time mobile interface with animations and intuitive UX. Designed for controlling smart home devices with a focus on user experience and responsiveness.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=700",
    tags: ["Flutter", "Dart", "Animations", "UI/UX"],
    github: "https://github.com/mynul56",
    demo: "#",
    featured: true,
    category: "mobile",
  },
  {
    title: "Bachelor's Home Management App",
    description: "Platform for shared house management. Features include expense tracking, chore scheduling, grocery management, and roommate communication tools.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=700",
    tags: ["React.js", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/mynul56",
    demo: "#",
    featured: true,
    category: "web",
  },
  {
    title: "GooseUp Platform",
    description: "Co-founded startup platform for youth collaboration and productivity. Built with scalability in mind, featuring real-time collaboration tools and project management features.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=700",
    tags: ["React", "Node.js", "Firebase", "Socket.io"],
    github: "https://github.com/mynul56",
    demo: "#",
    featured: true,
    category: "web",
  },
  {
    title: "Blend and Bite Foodcart",
    description: "Tech-driven food business highlighting digital transformation. Implemented digital ordering, inventory management, and analytics dashboard for business insights.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=700",
    tags: ["React Native", "Firebase", "Analytics", "UI/UX"],
    github: "https://github.com/mynul56",
    demo: "#",
    featured: false,
    category: "mobile",
  },
  {
    title: "EduBuddy LMS UI",
    description: "Fully responsive e-learning platform prototype built with Flutter Web. Features include course management, progress tracking, and interactive learning materials.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=700",
    tags: ["Flutter Web", "Dart", "Responsive Design", "Firebase"],
    github: "https://github.com/mynul56",
    demo: "#",
    featured: true,
    category: "web",
  },
  {
    title: "CryptoTrack Dashboard",
    description: "Real-time crypto portfolio tracking app using React and REST APIs. Monitor cryptocurrency prices, portfolio performance, and market trends with interactive charts.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=700",
    tags: ["React.js", "REST APIs", "Chart.js", "Tailwind CSS"],
    github: "https://github.com/mynul56",
    demo: "#",
    featured: true,
    category: "web",
  },
  {
    title: "AI Resume Analyzer Tool",
    description: "Python + NLP tool with UI for resume scoring and improvement suggestions. Helps job seekers optimize their resumes for specific job descriptions and ATS systems.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=700",
    tags: ["Python", "NLP", "Machine Learning", "Flask"],
    github: "https://github.com/mynul56",
    demo: "#",
    featured: true,
    category: "web",
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <AnimatedSection delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
      >
        <Card className="overflow-hidden bg-navy-light border border-slate-dark/30 h-full">
          <motion.div 
            className="aspect-video overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-slate-light mb-2">{project.title}</h3>
            <p className="text-slate mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="outline" className="text-highlight border-highlight/30 bg-highlight/5">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex space-x-4 mt-4">
              <motion.a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-light hover:text-highlight transition-colors"
                aria-label="GitHub Repository"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={22} />
              </motion.a>
              <motion.a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-light hover:text-highlight transition-colors"
                aria-label="Live Demo"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink size={22} />
              </motion.a>
            </div>
          </div>
        </Card>
      </motion.div>
    </AnimatedSection>
  );
}

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [selectedId, setSelectedId] = useState(null);

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="flex items-center text-2xl md:text-3xl font-bold mb-12">
            <span className="heading-highlight mr-2">02.</span>
            <span>Some Things I've Built</span>
            <span className="h-px bg-slate-dark/60 flex-grow ml-4"></span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-md border border-slate-dark/30 p-1">
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button 
                  variant={filter === "all" ? "default" : "ghost"} 
                  onClick={() => setFilter("all")}
                  className={filter === "all" ? "bg-highlight text-navy hover:bg-highlight/90" : ""}
                >
                  All
                </Button>
              </motion.div>
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button 
                  variant={filter === "web" ? "default" : "ghost"} 
                  onClick={() => setFilter("web")}
                  className={filter === "web" ? "bg-highlight text-navy hover:bg-highlight/90" : ""}
                >
                  Web
                </Button>
              </motion.div>
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button 
                  variant={filter === "mobile" ? "default" : "ghost"} 
                  onClick={() => setFilter("mobile")}
                  className={filter === "mobile" ? "bg-highlight text-navy hover:bg-highlight/90" : ""}
                >
                  Mobile
                </Button>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
