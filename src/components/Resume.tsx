
import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

const ResumeContent = ({ className }: { className?: string }) => {
  // Education data
  const education = [
    {
      institution: "Daffodil International University",
      location: "Dhaka",
      degree: "Bachelor of Science in Computer Science and Engineering",
      period: "Dec 2021 - Dec 2025",
      description: "The Bachelor of Science in Computer Science and Engineering provides a strong foundation in computer science fundamentals, programming, and system design with emphasis on problem-solving, analytical thinking, and practical experience through projects and internships."
    },
    {
      institution: "Hazera-Taju Degree College",
      location: "Chattogram",
      degree: "Science",
      period: "Jun 2018 - Jun 2020",
      description: "HSC: 5.00"
    },
    {
      institution: "Govt. Muslim High School",
      location: "Chattogram",
      degree: "Science",
      period: "Jan 2016 - Feb 2018",
      description: "SSC: 5.00"
    }
  ];

  // Experience data
  const experience = [
    {
      company: "GooseUp",
      location: "Dhaka",
      position: "Co-Founder",
      period: "Jan 2023 - Current",
      description: "Aiming to provide affordable and accessible menstrual hygiene products and education to women in Bangladesh while breaking down the societal taboo surrounding menstruation through the use of eco-friendly and biodegradable materials."
    },
    {
      company: "AUAP",
      location: "Dhaka",
      position: "Volunteer",
      period: "July 2022 - Aug 2022",
      description: ""
    },
    {
      company: "Blend And Bite",
      location: "Chattogram",
      position: "CEO",
      period: "Apr 2021 - Jan 2023",
      description: ""
    }
  ];

  // Skills data
  const skills = [
    "Leadership", 
    "Problem Solving", 
    "Web Development",
    "Programming Languages", 
    "System Administration",
    "Artificial Intelligence",
    "Adaptability",
    "Technical Proficiency"
  ];

  const technicalSkills = [
    "Adobe Premiere Pro",
    "MS Office (Google Alternatives)",
    "Adobe Lightroom",
    "Figma",
    "Adobe XD",
    "Excel"
  ];

  const languages = [
    { language: "Bengali", level: "Mother Tongue" },
    { language: "English", level: "B2" }
  ];

  const personalInfo = {
    name: "Mynul Islam",
    dob: "25th March, 2001",
    address: "House 33, Rd 09, 512, Uttara, 4230, Dhaka",
    phone: "+880 17359-68803",
    email: "mynulislamtanim@gmail.com",
    bio: "I believe actions speak louder than words, and my work is a testament to that belief. I take pride in consistently delivering results that exceed expectations. Clients and colleagues have expressed satisfaction with the quality of my work. I consider myself a fast learner, adept at adapting to new environments while ensuring a seamless and efficient transition, especially in a friendly and open work atmosphere."
  };

  return (
    <div className={cn("max-w-4xl mx-auto overflow-y-auto", className)}>
      <div className="mb-10 flex justify-between items-start flex-col md:flex-row gap-6">
        <div>
          <h1 className="text-4xl font-bold text-slate-light mb-2">{personalInfo.name}</h1>
          <p className="text-slate mb-4">DOB: {personalInfo.dob}</p>
          <p className="text-slate max-w-2xl mb-6">{personalInfo.bio}</p>
        </div>
        <div className="text-right">
          <p className="text-slate mb-1">{personalInfo.address}</p>
          <p className="text-slate mb-1">{personalInfo.phone}</p>
          <p className="text-highlight">{personalInfo.email}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <div className="mb-10">
            <h3 className="text-xl font-medium text-highlight mb-6">EXPERIENCE</h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="relative pl-6 border-l border-slate-dark"
                >
                  <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-highlight"></div>
                  <h4 className="text-lg font-medium text-slate-light">
                    {exp.company}, {exp.location}<span className="text-highlight ml-2">— {exp.position}</span>
                  </h4>
                  <p className="text-sm text-slate/80 mb-2">{exp.period}</p>
                  {exp.description && <p className="text-slate">{exp.description}</p>}
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-highlight mb-6">EDUCATION</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="relative pl-6 border-l border-slate-dark"
                >
                  <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-highlight"></div>
                  <h4 className="text-lg font-medium text-slate-light">
                    {edu.institution}, {edu.location}
                  </h4>
                  <p className="text-slate-light italic mb-1">{edu.degree}</p>
                  <p className="text-sm text-slate/80 mb-2">{edu.period}</p>
                  {edu.description && <p className="text-slate">{edu.description}</p>}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="mb-10">
            <h3 className="text-xl font-medium text-highlight mb-6">SKILLS</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 bg-navy-light border border-slate-dark/30 rounded-full text-slate-light"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(64, 224, 208, 0.1)" }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-medium text-highlight mb-6">TECHNICAL SKILLS</h3>
            <div className="space-y-2">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="p-3 bg-navy-light border border-slate-dark/30 rounded-md"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-slate-light">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-highlight mb-6">LANGUAGES</h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-slate-light">{lang.language}</span>
                  <span className="text-slate">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="outline"
            size="lg"
            className="border-highlight text-highlight hover:bg-highlight/10 text-lg group"
          >
            Download Full Resume
            <Download className="ml-2 inline-block group-hover:translate-y-1 transition-transform" size={18} />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

const Resume = () => {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  
  const triggerResume = () => {
    setOpen(true);
  };

  if (isDesktop) {
    return (
      <>
        <section id="resume" className="section-padding">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="flex items-center text-2xl md:text-3xl font-bold mb-12">
                <span className="heading-highlight mr-2">04.</span>
                <span>Resume</span>
                <span className="h-px bg-slate-dark/60 flex-grow ml-4"></span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-highlight text-highlight hover:bg-highlight/10 text-lg group"
                    onClick={triggerResume}
                  >
                    View My Resume
                    <ExternalLink className="ml-2 inline-block group-hover:translate-y-[-2px] transition-transform" size={18} />
                  </Button>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-5xl max-h-[80vh] overflow-y-auto bg-navy border-slate-dark">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-highlight">My Resume</DialogTitle>
            </DialogHeader>
            <ResumeContent className="py-4" />
          </DialogContent>
        </Dialog>
      </>
    );
  }

  return (
    <>
      <section id="resume" className="section-padding">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="flex items-center text-2xl md:text-3xl font-bold mb-12">
              <span className="heading-highlight mr-2">04.</span>
              <span>Resume</span>
              <span className="h-px bg-slate-dark/60 flex-grow ml-4"></span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-highlight text-highlight hover:bg-highlight/10 text-lg group"
                  onClick={triggerResume}
                >
                  View My Resume
                  <ExternalLink className="ml-2 inline-block group-hover:translate-y-[-2px] transition-transform" size={18} />
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent className="bg-navy border-t border-slate-dark/30 max-h-[90vh]">
          <DrawerHeader className="border-b border-slate-dark/30">
            <DrawerTitle className="text-2xl font-bold text-highlight">My Resume</DrawerTitle>
          </DrawerHeader>
          <div className="px-4 py-6 overflow-y-auto">
            <ResumeContent />
          </div>
          <DrawerFooter>
            <Button 
              variant="outline" 
              onClick={() => setOpen(false)}
              className="border-highlight text-highlight"
            >
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Resume;
