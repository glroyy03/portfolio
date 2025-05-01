// components/Skills.js
import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Node.js",
  "Express",
  "Python"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-900">
      <h2 className="text-4xl font-semibold text-primary mb-6">Skills &amp; Tools</h2>
      <motion.ul
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <li key={index} className="p-4 bg-gray-800 rounded text-center">
            {skill}
          </li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Skills;
