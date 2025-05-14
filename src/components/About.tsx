
import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <h2 className="section-heading">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-slate mb-6">
              I'm a Full-Stack Software Engineer based in Dubai with extensive
              experience in building scalable, high-performance web
              applications. My skill set spans a wide array of technologies,
              including C#, ASP.NET Core, Node.js, Next.js, Angular, React.js,
              Python (Django, FastAPI), and Azure. I am proficient in developing
              both the backend and frontend to create seamless, efficient
              systems.
            </p>

            <p className="text-slate mb-6">
              In addition to my full-stack development expertise, I have strong
              experience in cloud technologies. I'm well-versed in using Docker,
              Kubernetes, and implementing load balancing to ensure applications
              are scalable, resilient, and efficient in production environments.
              This enables me to build robust, cloud-native applications that
              can handle high traffic with ease.
            </p>

            <p className="text-slate mb-6">
              I'm also deeply interested in the intersection of AI and machine
              learning, particularly in integrating Large Language Models (LLMs)
              and AI-driven solutions into software applications. By leveraging
              these technologies, I aim to accelerate development, enhance
              automation, and create more intelligent, user-focused products.
            </p>

            <p className="text-slate">
              I believe in the power of continuous learning and collaboration,
              always striving to improve my skills while building innovative and
              efficient solutions.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="/DSC_48944.jpg"
              alt="Yahia Shanaah"
              className="rounded-full shadow-md w-64 h-64 object-cover"
              loading="lazy"
              width={300}
              height={300}
              style={{ maxWidth: "100%", height: "auto" }}  
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
