import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/yahyashanaah",
      icon: (
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
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/yahya-shanaah/",
      icon: (
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
      ),
    },
    {
      name: "Email",
      href: "mailto:yahya.shanaah@gmail.com",
      icon: (
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
      ),
    },
    {
      name: "Resume",
      href: "/Yayah-shanaah-Resume.pdf",
      download: "Yayah-Shanaah-Resume.pdf",
      icon: (
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
      ),
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
          {/* LEFT: Main Content */}
          <div
            className={`flex-1 max-w-3xl transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{
              transform: `perspective(1000px) rotateX(${
                mousePosition.y * 0.05
              }deg) rotateY(${mousePosition.x * 0.05}deg)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            {/* Greeting */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-sm font-medium backdrop-blur-sm">
                👋 Hi there, I'm
              </span>
            </div>

            {/* Name with 3D effect */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 relative">
              <span
                className="block bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent"
                style={{
                  textShadow: "0 0 80px rgba(34, 211, 238, 0.5)",
                }}
              >
                Yahia Shanaah
              </span>
              <div className="absolute inset-0 blur-2xl opacity-50 bg-gradient-to-r from-cyan-400 to-purple-400 -z-10"></div>
            </h1>

            {/* Title */}
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-8 text-slate-300">
              Full-Stack Software Engineer
            </h2>

            {/* Description */}
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Full-Stack Software Engineer with strong expertise in .NET (C#,
              ASP.NET Core) and modern JavaScript frameworks (Angular, React,
              Next.js, Node.js). Experienced in building scalable,
              production-ready systems and integrating cloud, DevOps, and
              AI-driven solutions, including RAG (Retrieval-Augmented
              Generation) pipelines. Proven ability to deliver clean,
              high-performance software aligned with real business needs.
            </p>

            {/* CTA Button */}
            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <button className="group relative px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 overflow-hidden">
                  <span className="relative z-10">Get In Touch</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </a>
            </div>
          </div>

          {/* RIGHT: Enhanced 3D Social Card */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div
              className="relative"
              style={{
                transform: `perspective(1500px) rotateX(${
                  -mousePosition.y * 0.1
                }deg) rotateY(${-mousePosition.x * 0.1}deg)`,
                transformStyle: "preserve-3d",
                transition: "transform 0.1s ease-out",
              }}
            >
              {/* Main Glowing Card */}
              <div className="relative">
                {/* Outer glow rings */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-3xl animate-pulse"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 blur-2xl rounded-3xl"></div>

                {/* Card container */}
                <div className="relative bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-slate-800/80 backdrop-blur-2xl rounded-3xl p-1 shadow-2xl">
                  {/* Animated border gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 rounded-3xl opacity-50 animate-gradient"></div>

                  {/* Inner card */}
                  <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 rounded-3xl p-8 backdrop-blur-xl">
                    {/* Header with icon */}
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 mb-4 shadow-lg shadow-cyan-500/50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </div>
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent mb-2">
                        Let's Connect
                      </h3>
                      <p className="text-slate-400 text-sm">
                        Feel free to reach out through any platform
                      </p>
                    </div>

                    {/* Social Links Grid */}
                    <div className="space-y-3">
                      {socialLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.href}
                          target={link.name !== "Email" ? "_blank" : undefined}
                          rel={
                            link.name !== "Email"
                              ? "noopener noreferrer"
                              : undefined
                          }
                          download={link.download}
                          className="group relative flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-slate-800/50 to-slate-700/50 hover:from-slate-700/70 hover:to-slate-600/70 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-[1.02] overflow-hidden"
                          style={{
                            transform: `translateZ(${30 * (index + 1)}px)`,
                          }}
                        >
                          {/* Hover gradient effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                          {/* Icon container */}
                          <div className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 group-hover:from-cyan-500 group-hover:to-purple-500 text-slate-300 group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-cyan-500/50">
                            {link.icon}
                          </div>

                          {/* Text */}
                          <div className="relative flex-1">
                            <span className="text-white group-hover:text-cyan-300 font-semibold text-lg transition-colors block">
                              {link.name}
                            </span>
                            <span className="text-slate-500 group-hover:text-slate-400 text-xs transition-colors">
                              Click to{" "}
                              {link.name === "Email"
                                ? "send email"
                                : link.name === "Resume"
                                ? "download"
                                : "visit"}
                            </span>
                          </div>

                          {/* Arrow indicator */}
                          <div className="relative text-slate-600 group-hover:text-cyan-400 transition-all duration-300 group-hover:translate-x-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </div>
                        </a>
                      ))}
                    </div>

                    {/* Bottom decoration */}
                    <div className="mt-6 pt-6 border-t border-slate-700/50">
                      <p className="text-center text-slate-500 text-sm">
                        Available for new opportunities
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating particles - Enhanced */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-400/30 rounded-full blur-2xl animate-pulse"></div>
              <div
                className="absolute -bottom-6 -left-6 w-40 h-40 bg-purple-400/30 rounded-full blur-2xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 -right-8 w-24 h-24 bg-pink-400/20 rounded-full blur-xl animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
      </div>
    </section>
  );
};

export default Hero;
