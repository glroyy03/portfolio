// components/Projects.js
import { motion } from "framer-motion";

const projects = [
  {
    title: "eCommerce Platform",
    description: "An innovative platform integrating real-time analytics with intuitive design.",
    technologies: "React, Node.js, Tailwind CSS",
    link: "#"
  },
  {
    title: "Social Networking App",
    description: "A dynamic app emphasizing community engagement with seamless user experience.",
    technologies: "Next.js, Firebase, Framer Motion",
    link: "#"
  },
  // You can add more projects here.
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-4xl font-semibold text-primary mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-800 rounded shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
          >
            <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <p className="mt-2">
              <span className="font-semibold">Technologies:</span> {project.technologies}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-primary border border-primary py-2 px-4 rounded hover:bg-primary hover:text-background transition duration-300"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
