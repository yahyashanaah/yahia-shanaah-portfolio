
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
    <div className="skill-card group">
      <div className="flex items-center mb-4">
        <div className="text-accent mr-3">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <span className="text-accent mr-2">▹</span>
            <span className="text-slate">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code size={24} />,
      skills: ["C#", "JavaScript", "TypeScript", "Python", "HTML/CSS"],
    },
    {
      title: "Frontend",
      icon: <LayoutDashboard size={24} />,
      skills: ["React.js", "Next.js", "Angular", "Tailwind CSS", "Responsive UI Design"],
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      skills: ["ASP.NET Core", "Node.js", "Django", "FastAPI", "Express.js"],
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Redis"],
    },
    {
      title: "DevOps & CI/CD",
      icon: <Workflow size={24} />,
      skills: ["Docker", "Kubernetes", "GitHub Actions", "CI/CD Pipelines", "Load Balancing"],
    },
    {
      title: "Cloud",
      icon: <Cloud size={24} />,
      skills: ["AWS", "EC2 + S3", "CDN + Lambda", "API Gateway", "Jenkins"],
    },
    {
      title: "Tools",
      icon: <Terminal size={24} />,
      skills: ["Git", "Postman", "Swagger", "Figma", "Jira"],
    },
    {
      title: "Other Skills",
      icon: <Globe size={24} />,
      skills: ["Design Patterns", "Microservices", "Clean Architecture", "SOLID Principles", "RabbitMQ"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-navy-dark bg-opacity-60">
      <div className="container">
        <h2 className="section-heading">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
