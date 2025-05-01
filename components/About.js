// components/About.js
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-900">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-semibold text-primary mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          Driven by technology from an early age, I have dedicated my career to creating innovative digital solutions. I blend creative design with clean, efficient code to build products that not only look good but also perform flawlessly. Whether it’s architecting scalable web applications or pioneering engaging interactive experiences, I thrive on transforming complex challenges into elegant solutions.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
