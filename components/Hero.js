// components/Hero.js
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold text-primary mb-4">
          Hello, I'm Sai!
        </h1>
        <p className="text-xl">
          A Passionate Software Engineer turning ideas into reality.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
