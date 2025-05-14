import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  image?: string;
}

const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  return (
    <Card className="project-card overflow-hidden h-full flex flex-col bg-navy border border-navy-light">
      {/* <div className="h-48 bg-navy-light flex items-center justify-center">
        <span className="text-slate">Project Image Placeholder</span>
      </div> */}

      <CardContent className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>

        <p className="text-slate mb-4 flex-grow">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded bg-navy-light text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          <Button
            asChild
            variant="ghost"
            className="text-slate hover:text-accent p-2 h-auto"
            aria-label={`View ${project.title} on GitHub`}
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
          </Button>

          {project.demoUrl && (
            <Button
              asChild
              variant="ghost"
              className="text-slate hover:text-accent p-2 h-auto"
              aria-label={`View live demo of ${project.title}`}
            >
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={20} />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Walks & Regions Management API",
      description:
        "A secure and scalable RESTful API built with ASP.NET Core for managing regions and walking trails. Features full CRUD operations, JWT authentication with role-based access, advanced filtering, sorting, pagination, and integrated validation. Implements repository pattern, AutoMapper, and ASP.NET Core Identity.",
      tags: [
        "C#",
        "ASP.NET Core",
        "EF Core",
        "SQL Server",
        "JWT",
        "AutoMapper",
        "API",
      ],
      githubUrl: "https://github.com/yahyashanaah/NZWalks-master",
    },
    {
      title: "Expense Tracker API and TTS Service",
      description:
        "A dual-purpose backend system built with FastAPI and SQLite, featuring an Expense Tracker and a Text-to-Speech (TTS) service. The Expense Tracker allows users to categorize, add, edit, and manage financial records, while the TTS service converts text into speech using gTTS. Designed with modular routing, input validation, and RESTful principles for clean and scalable development.",
      tags: [
        "Python",
        "FastAPI",
        "SQLite",
        "gTTS",
        "REST API",
        "CRUD",
        "middleware",
      ],
      githubUrl: "https://github.com/yahyashanaah/Manage",
    },
    {
      title: "Frontend for Expense Tracker and TTS",
      description:
        "A modern full-stack portfolio app built with Next.js, showcasing multiple integrated services including an Expense Tracker, Text-to-Speech system, CRUD via Node.js and MongoDB APIs. Features responsive UI, authentication with Google OAuth, API proxying, and reusable UI components with full CRUD capabilities.",
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
      title: "Gym Online Booking API",
      description:
        "A backend API for managing gym session bookings, built with ASP.NET Core. Features include user registration, role-based access, session scheduling, and booking management. Designed with a clean architecture, separation of concerns, and scalable business logic.",
      tags: [
        "C#",
        "ASP.NET Core",
        "Entity Framework Core",
        "SQL Server",
        "JWT",
        "REST API",
        "Logging",
        "Data annotations",
        "Repository pattern",
        "AutoMapper",
      ],
      githubUrl: "https://github.com/yahyashanaah/GymBookingOnline",
    },
    {
      title: "E-Commerce Platform (Angular)",
      description:
        "Developed a feature-rich e-commerce application using Angular. Implemented components, services, routing, environment configs, directives, DI, lifecycle hooks, modules, pipes, lazy loading, and observables. Enhanced UX with a loading spinner.",
      tags: ["Angular", "TypeScript", "Git", "GitHub", "RxJS"],
      githubUrl: "https://github.com/yahyashanaah/Market-Web-Angular",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="section-heading">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="btn-primary">
            <a
              href="https://github.com/yahyashanaah"
              target="_blank"
              rel="noopener noreferrer"
            >
              See More on GitHub
              <Github className="ml-2" size={18} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
