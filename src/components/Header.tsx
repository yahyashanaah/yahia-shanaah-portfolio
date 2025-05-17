
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy-dark/90 backdrop-blur-md py-4 shadow-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white">
          Yahia<span className="text-accent">.</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-item"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-accent mr-1">{index + 1}.</span>{" "}
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-accent"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`fixed top-0 right-0 h-screen w-2/3 bg-navy shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } pt-20 px-6 z-40`}
      >
        <div className="flex flex-col space-y-4">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="text-lg py-2 border-b border-navy-light hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-accent mr-2">{index + 1}.</span>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
