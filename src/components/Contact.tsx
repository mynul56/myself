
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  Send
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    // Reset form here
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  const contactLinks = [
    { 
      icon: Mail, 
      text: "mynulislam56@gmail.com", 
      href: "mailto:mynulislam56@gmail.com" 
    },
    { 
      icon: Phone, 
      text: "+8801735968803", 
      href: "tel:+8801735968803" 
    },
    { 
      icon: Linkedin, 
      text: "linkedin.com/in/mynulislam56", 
      href: "https://linkedin.com/in/mynulislam56" 
    },
    { 
      icon: Github, 
      text: "github.com/mynul56", 
      href: "https://github.com/mynul56" 
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="flex items-center text-2xl md:text-3xl font-bold mb-12">
            <span className="heading-highlight mr-2">04.</span>
            <span>Get In Touch</span>
            <span className="h-px bg-slate-dark/60 flex-grow ml-4"></span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection delay={0.1}>
            <h3 className="text-2xl text-slate-light font-medium mb-4">Let's talk</h3>
            <p className="text-slate mb-6">
              I'm currently open to new opportunities and collaborations. Whether you have a project in mind, 
              a question about development, or just want to say hi, feel free to reach out!
            </p>
            
            <div className="space-y-4 mt-8">
              {contactLinks.map((link, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                  whileHover={{ x: 5 }}
                >
                  <link.icon className="text-highlight mr-3" size={20} />
                  <a 
                    href={link.href} 
                    target={link.href.startsWith('http') ? "_blank" : undefined} 
                    rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined} 
                    className="text-slate-light hover:text-highlight transition-colors link-hover"
                  >
                    {link.text}
                  </a>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Input 
                  placeholder="Name" 
                  className="bg-navy-light border-slate-dark focus:border-highlight" 
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-navy-light border-slate-dark focus:border-highlight" 
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <Textarea 
                  placeholder="Message" 
                  className="bg-navy-light border-slate-dark focus:border-highlight min-h-[150px]" 
                  required
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button 
                  type="submit" 
                  className="w-full bg-highlight text-navy hover:bg-highlight/90 mt-2 group"
                >
                  Send Message
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </motion.div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
