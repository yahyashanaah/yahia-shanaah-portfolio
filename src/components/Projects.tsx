import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    title: "Walks & Regions Management API",
    description:
      "A secure and scalable RESTful API built with ASP.NET Core for managing regions and walking trails. Features full CRUD operations, JWT authentication with role-based access, advanced filtering, sorting, pagination, and integrated validation.",
    tags: ["C#", "ASP.NET Core", "EF Core", "SQL Server", "JWT", "AutoMapper", "API"],
    githubUrl: "https://github.com/yahyashanaah/NZWalks-master",
  },
  {
    title: "Expense Tracker API and TTS Service",
    description:
      "A dual-purpose backend system built with FastAPI and SQLite, featuring an Expense Tracker and a Text-to-Speech (TTS) service. Designed with modular routing, input validation, and RESTful principles.",
    tags: ["Python", "FastAPI", "SQLite", "gTTS", "REST API", "CRUD", "middleware"],
    githubUrl: "https://github.com/yahyashanaah/Manage",
  },
  {
    title: "Frontend for Expense Tracker and TTS",
    description:
      "A modern full-stack portfolio app built with Next.js, showcasing multiple integrated services including an Expense Tracker, Text-to-Speech system, CRUD via Node.js and MongoDB APIs.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "Node.js",
      "express.js",
      "MongoDB",
      "NextAuth.js",
      "OAuth",
      "gTTS",
      "Docker",
    ],
    githubUrl: "https://github.com/yahyashanaah/ExpensesTracker",
  },
  {
    title: "E-Commerce Platform (Angular)",
    description:
      "Developed a feature-rich e-commerce application using Angular. Implemented components, services, routing, directives, DI, lifecycle hooks, modules, pipes, lazy loading, and observables.",
    tags: ["Angular", "TypeScript", "Git", "GitHub", "RxJS"],
    githubUrl: "https://github.com/yahyashanaah/Market-Web-Angular",
  },
  {
  title: "DataPatrolTask",
  description:
    "A simple admin tool for managing users, user groups, policies, and policy assignments. Provides a Blazor UI with MudBlazor dialogs and backend services for integration. Features centralized management of users and groups, policy definition and assignments, and repository-based REST API.",
  tags: [
    "C#",
    "ASP.NET Core",
    "Blazor",
    "MudBlazor",
    "EF Core",
    "SQL Server",
    "REST API",
    "Repository pattern",
    ".NET 8",
  ],
  githubUrl: "https://github.com/yahyashanaah/DataPatrolTask",
},
{
  title: "RAG Frontend",
  description:
    "A modern web application for interacting with documents using Retrieval Augmented Generation (RAG). Users can upload, browse, and manage files, then query their content with natural language questions. Built with Next.js and TypeScript for a fast, responsive experience, featuring dark mode and reusable components.",
  tags: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "React",
    "Custom Hooks",
    "RAG",
    "Frontend",
    "pnpm",
  ],
  githubUrl: "https://github.com/yahyashanaah/Rag-Frontend",
},
{
  title: "RAG Backend",
  description:
    "A FastAPI backend that processes documents and answers questions using AI. Supports uploading PDF, Word, Excel, and text files, extracting and splitting text into chunks, searching for relevant information, and answering natural language queries. Integrates with OpenAI embeddings, FAISS vector search, and Supabase for storage.",
  tags: [
    "Python",
    "FastAPI",
    "OpenAI",
    "FAISS",
    "Supabase",
    "PyPDF2",
    "python-docx",
    "pandas",
    "NLTK",
    "REST API",
    "pytest",
  ],
  githubUrl: "https://github.com/yahyashanaah/RAG-Retrieval-Augmented-Generation",
},
{
  title: "E-commerce Microservices",
  description:
    "An E-commerce platform built using a microservices architecture, where each service handles a specific business domain such as user management, product catalog, orders, payments, analytics, and notifications. Services communicate via Apache Kafka for real-time event-driven processing. Includes a modern Next.js frontend and Dockerized setup for easy local development.",
  tags: [
    "Node.js",
    "Express",
    "KafkaJS",
    "Apache Kafka",
    "Next.js",
    "React",
    "Docker",
    "Docker Compose",
    "Microservices",
    "Event-driven architecture",
  ],
  githubUrl: "https://github.com/yahyashanaah/E-commerce-microservices-Kafka",
},
{
  title: "Expense Tracker – Frontend (React.js)",
  description:
    "A modern, responsive Expense Tracker frontend built with React.js, TypeScript, and Tailwind CSS, integrated with a .NET 8 Web API backend. Helps users track daily expenses, manage categories, and analyze spending habits through a clean UI. Features expense CRUD, search and filtering, pagination, budget overview, and JWT-ready authentication.",
  tags: [
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Axios",
    "Lucide React",
    "ShadCN UI",
    "Material Icons",
    "ASP.NET Core Web API",
    "SQL Server",
    "JWT",
    ".NET 8",
  ],
  githubUrl: "https://github.com/yahyashanaah/ExpenseHub-UI",
},
{
  title: "Expense Tracker (Full-Stack)",
  description:
    "A full-stack Expense Tracker application built with ASP.NET Core 8, Entity Framework Core, SQL Server, and React. Enables users to manage expenses, categories, and budgets with full CRUD operations, search and filtering, reporting with charts, and JWT-based multi-user authentication. Designed with SOLID principles, Repository Pattern, DTOs, and clean architecture for scalability and maintainability.",
  tags: [
    "ASP.NET Core 8",
    "Entity Framework Core",
    "SQL Server",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "React Query",
    "JWT",
    "SOLID",
    "Repository Pattern",
    "DTOs",
    "Clean Architecture",
  ],
  githubUrl: "https://github.com/yahyashanaah/ExpenseTracker.API",
},

];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isAnimating]);

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    const absIndex = ((diff % projects.length) + projects.length) % projects.length;
    
    let position = absIndex;
    if (absIndex > projects.length / 2) {
      position = absIndex - projects.length;
    }

    const isActive = position === 0;
    const isNext = position === 1;
    const isPrev = position === -1;
    const isSecondNext = position === 2;
    const isSecondPrev = position === -2;

    if (isActive) {
      return {
        transform: "translateX(-50%) translateZ(0px) rotateY(0deg) scale(1)",
        opacity: 1,
        zIndex: 50,
        filter: "brightness(1.2)",
      };
    } else if (isNext) {
      return {
        transform: "translateX(20%) translateZ(-200px) rotateY(-25deg) scale(0.8)",
        opacity: 0.7,
        zIndex: 40,
        filter: "brightness(0.7)",
      };
    } else if (isPrev) {
      return {
        transform: "translateX(-120%) translateZ(-200px) rotateY(25deg) scale(0.8)",
        opacity: 0.7,
        zIndex: 40,
        filter: "brightness(0.7)",
      };
    } else if (isSecondNext) {
      return {
        transform: "translateX(70%) translateZ(-400px) rotateY(-35deg) scale(0.6)",
        opacity: 0.4,
        zIndex: 30,
        filter: "brightness(0.5)",
      };
    } else if (isSecondPrev) {
      return {
        transform: "translateX(-170%) translateZ(-400px) rotateY(35deg) scale(0.6)",
        opacity: 0.4,
        zIndex: 30,
        filter: "brightness(0.5)",
      };
    } else {
      return {
        transform: "translateX(-50%) translateZ(-600px) scale(0.4)",
        opacity: 0,
        zIndex: 20,
        filter: "brightness(0.3)",
      };
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 pt-12 pb-20">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in full-stack development
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative h-[600px] flex items-center justify-center">
          <div
            className="relative w-full h-full"
            style={{
              perspective: "2000px",
              perspectiveOrigin: "center center",
            }}
          >
            {/* Cards */}
            {projects.map((project, index) => {
              const style = getCardStyle(index);
              const isActive = index === currentIndex;

              return (
                <div
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`absolute left-1/2 top-1/2 -translate-y-1/2 w-[450px] h-[500px] 
                    transition-all duration-700 ease-out cursor-pointer
                    ${isActive ? "pointer-events-auto" : "pointer-events-auto"}`}
                  style={{
                    ...style,
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Card */}
                  <div
                    className={`relative w-full h-full rounded-2xl overflow-hidden 
                      bg-gradient-to-br from-slate-800 to-slate-900
                      border-2 shadow-2xl
                      ${isActive 
                        ? "border-cyan-400 shadow-cyan-500/50" 
                        : "border-slate-700 shadow-slate-900/50"
                      }`}
                  >
                    {/* Glow Effect */}
                    {isActive && (
                      <div className="absolute inset-0 bg-cyan-400/10 blur-3xl animate-pulse pointer-events-none z-0" />
                    )}

                    {/* Content */}
                    <div className="relative z-10 p-8 h-full flex flex-col">
                      {/* Title */}
                      <h3 className={`text-2xl font-bold mb-4 transition-colors ${
                        isActive ? "text-cyan-400" : "text-white"
                      }`}>
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.slice(0, 6).map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1 rounded-full bg-slate-700/50 text-slate-300 border border-slate-600"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 6 && (
                          <span className="text-xs px-3 py-1 rounded-full bg-slate-700/50 text-slate-300 border border-slate-600">
                            +{project.tags.length - 6}
                          </span>
                        )}
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <button className="w-full py-3 px-4 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-medium transition-colors">
                            View Code
                          </button>
                        </a>
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <button className="w-full py-3 px-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-medium transition-colors">
                              Live Demo
                            </button>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 rounded-full bg-slate-800/80 hover:bg-cyan-500 border-2 border-cyan-400 text-cyan-400 hover:text-slate-900 flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-8 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 rounded-full bg-slate-800/80 hover:bg-cyan-500 border-2 border-cyan-400 text-cyan-400 hover:text-slate-900 flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-12">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-cyan-400 w-8 shadow-lg shadow-cyan-400/50"
                  : "bg-slate-600 hover:bg-slate-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* GitHub Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/yahyashanaah"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-4 rounded-lg bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-medium transition-all text-lg">
              View More Projects on GitHub →
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;