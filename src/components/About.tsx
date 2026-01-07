import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 text-white border-t border-slate-700/50"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h2>

        {/* Text Content Only */}
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p>
            I’m a Full-Stack Software Engineer based in Dubai, experienced in
            building scalable, high-performance web applications across backend
            and frontend systems. My core expertise includes .NET (C#, ASP.NET
            Core) and modern JavaScript frameworks such as Angular, React,
            Next.js, and Node.js, with additional experience using Python
            (Django, FastAPI) for backend and AI-driven services.
          </p>
          <p>
            I have strong hands-on experience with cloud-native development,
            leveraging Azure, Docker, Kubernetes, and CI/CD pipelines to design
            systems that are resilient, scalable, and production-ready. I focus
            on clean architecture, performance optimization, and building
            solutions that reliably scale under real-world workloads.
          </p>
          <p>
            I’m particularly interested in AI and LLM-powered systems, with
            experience integrating AI-driven features and RAG
            (Retrieval-Augmented Generation) pipelines into applications to
            enhance automation, personalization, and decision-making. I aim to
            bridge solid software engineering with practical AI to deliver
            intelligent, business-focused products.
          </p>
          <p>
            I value continuous learning, clear communication, and collaboration,
            and I enjoy turning complex requirements into efficient,
            maintainable solutions that create real impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
