
import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/mynul56", label: "GitHub Profile" },
    { icon: Linkedin, href: "https://linkedin.com/in/mynulislam56", label: "LinkedIn Profile" },
    { icon: Mail, href: "mailto:mynulislam56@gmail.com", label: "Email Contact" },
    { icon: Phone, href: "tel:+8801735968803", label: "Phone Contact" },
  ];

  return (
    <footer className="py-8 px-6 bg-navy-dark">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-slate text-sm">
              Designed & Built by Md. Mynul Islam © {new Date().getFullYear()}
            </p>
          </motion.div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, i) => (
              <motion.a 
                key={i}
                href={link.href} 
                target={link.href.startsWith('http') ? "_blank" : undefined}
                rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="text-slate hover:text-highlight transition-colors"
                aria-label={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
