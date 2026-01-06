import React from "react";
import { 
  Code, Database, Globe, Server, Cloud, 
  Terminal, Workflow, LayoutDashboard 
} from "lucide-react";

const SkillCategory: React.FC<{
  title: string;
  icon: React.ReactNode;
  skills: string[];
}> = ({ title, icon, skills }) => {
  return (
    <div className="group relative bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-slate-800/80 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
      {/* Glow border effect */}
      <div className="absolute inset-0 rounded-2xl border border-slate-700/50 group-hover:border-cyan-400/50 transition-colors"></div>
      
      {/* Header */}
      <div className="flex items-center mb-6 relative z-10">
        <div className="text-cyan-400 mr-3">{icon}</div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>

      {/* Skills list */}
      <ul className="space-y-2 relative z-10">
        {skills.map((skill, index) => (
          <li 
            key={index} 
            className="flex items-center text-slate-300 group-hover:text-slate-100 transition-colors"
          >
            <span className="text-cyan-400 mr-2">▹</span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>

      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
        "Responsive UI & SEO Optimization"
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
        "Authentication & Authorization (JWT, OAuth2)"
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
        "Database Design & Optimization"
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
        "Monitoring & Logging"
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
        "Scalable & High-Availability Systems"
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
        "Pandas & NumPy"
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
        "Git, Postman, Swagger, Jira"
      ],
    },
  ];

  return (
    <section 
      id="skills" 
      className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white"
    >
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
