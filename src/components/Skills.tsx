import React from "react";
import {
  Code,
  Database,
  Globe,
  Server,
  Cloud,
  Terminal,
  Workflow,
  LayoutDashboard,
} from "lucide-react";

const SkillCategory: React.FC<{
  title: string;
  icon: React.ReactNode;
  skills: string[];
}> = ({ title, icon, skills }) => {
  return (
    <div className="group relative bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-slate-800/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.01] overflow-hidden">
      {/* Glow border effect */}
      <div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-slate-700/50 group-hover:border-cyan-400/50 transition-colors" aria-hidden />
      {/* Header */}
      <div className="flex items-center mb-4 sm:mb-6 relative z-10">
        <div className="text-cyan-400 mr-2 sm:mr-3 flex-shrink-0" aria-label="category-icon">
          {icon}
        </div>
        <h3 className="text-sm sm:text-xl font-semibold text-white line-clamp-1">
          {title}
        </h3>
      </div>

      {/* Skills list */}
      <ul className="space-y-1.5 sm:space-y-2 relative z-10">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex items-start text-xs sm:text-sm text-slate-300 group-hover:text-slate-100 transition-colors"
          >
            <span className="text-cyan-400 mr-2 flex-shrink-0">▹</span>
            <span className="leading-relaxed">{skill}</span>
          </li>
        ))}
      </ul>

      {/* Hover/Active gradient overlay (mobile-safe) */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden />
    </div>
  );
};

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code size={24} />,
      skills: [
        "C#",
        "TypeScript",
        "JavaScript (ES6+)",
        "Python",
        "SQL",
        "Prisma ORM",
        "Vector Databases",
      ],
    },
    {
      title: "Frontend",
      icon: <LayoutDashboard size={24} />,
      skills: [
        "React.js",
        "Next.js",
        "Angular",
        "Tailwind CSS",
        "Blazor",
        "Responsive UI & SEO Optimization",
      ],
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      skills: [
        "ASP.NET Core",
        "Node.js",
        "FastAPI",
        "Django",
        "RESTful APIs",
        "Authentication & Authorization (JWT, OAuth2)",
      ],
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: [
        "SQL Server",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "Database Design & Optimization",
      ],
    },
    {
      title: "DevOps & CI/CD",
      icon: <Workflow size={24} />,
      skills: [
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "CI/CD Pipelines",
        "Load Balancing",
        "Monitoring & Logging",
      ],
    },
    {
      title: "Cloud",
      icon: <Cloud size={24} />,
      skills: [
        "Microsoft Azure",
        "Azure App Services",
        "Azure Blob Storage",
        "Cloud Architecture",
        "Scalable & High-Availability Systems",
      ],
    },
    {
      title: "AI & Data",
      icon: <Globe size={24} />,
      skills: [
        "LLM Integration",
        "RAG (Retrieval-Augmented Generation)",
        "AI-Powered Automation",
        "Python for Data Processing",
        "Pandas & NumPy",
      ],
    },
    {
      title: "Architecture & Tools",
      icon: <Terminal size={24} />,
      skills: [
        "Clean Architecture",
        "SOLID Principles",
        "Design Patterns",
        "Microservices",
        "RabbitMQ",
        "Git, Postman, Swagger, Jira",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 md:py-24 text-white border-t border-slate-700/50"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Skills
        </h2>

        {/* Responsive grid: 1 on mobile, 2 on sm, 3 on lg+, with gaps adjusted for readability */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
