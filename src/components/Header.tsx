
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy/90 backdrop-blur-md shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="text-highlight text-2xl font-mono font-medium">
          &lt;dev /&gt;
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 items-center">
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-slate-light hover:text-highlight transition-colors font-mono"
                >
                  <span className="text-highlight mr-1">0{index + 1}.</span>
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <Button variant="outline" className="border-highlight text-highlight hover:bg-highlight/10">
                Resume
              </Button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-highlight"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-[72px] bg-navy-dark/95 backdrop-blur-md p-6 flex flex-col justify-center items-center md:hidden animate-fade-in">
            <nav>
              <ul className="flex flex-col space-y-8 items-center">
                {navLinks.map((link, index) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xl text-slate-light hover:text-highlight transition-colors font-mono"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="text-highlight mr-1">0{index + 1}.</span>
                      {link.name}
                    </a>
                  </li>
                ))}
                <li>
                  <Button variant="outline" className="border-highlight text-highlight hover:bg-highlight/10 mt-4">
                    Resume
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
