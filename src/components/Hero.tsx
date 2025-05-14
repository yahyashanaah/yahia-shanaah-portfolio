
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 pb-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* LEFT COLUMN: Intro Text */}
        <div className="max-w-3xl">
          <p className="text-accent mb-4 animate-fade-in">Hi there, I'm</p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in delay-100 text-white">
            Yahia Shanaah
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-slate animate-fade-in delay-200">
            Full-Stack Software Engineer
          </h2>

          <p className="text-slate text-lg max-w-xl mb-8 animate-fade-in delay-300">
            Building scalable, high-performance web applications with expertise
            in C#, ASP.NET Core, Node.js, and modern frontend frameworks.
            Specializing in cloud technologies and AI integration.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in delay-400">
            <Button asChild variant="outline" className="btn-primary text-base">
              <a href="#contact">Get In Touch</a>
            </Button>

            <Button
              asChild
              variant="ghost"
              className="text-slate-light hover:text-accent text-base"
            >
              <a href="#projects">View My Work</a>
            </Button>
          </div>
        </div>

        {/* RIGHT COLUMN: Social Icons */}
        <div className="flex flex-col items-center gap-4 mt-10 md:mt-0 animate-fade-in delay-500">
          <a
            href="https://github.com/yahyashanaah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-accent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/yahya-shanaah/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-accent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          <a
            href="mailto:yahya.shanaah@gmail.com"
            className="text-slate hover:text-accent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>

          <a
            href="/Yayah-shanaah-cv.pdf"
            target="_blank"
            download="Yahya_Shannash_Resume.pdf"
            className="text-slate hover:text-accent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
