// components/Contact.js
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <h2 className="text-4xl font-semibold text-primary mb-6">Contact Me</h2>
      <motion.form
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 mb-4 bg-gray-800 text-white rounded focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 mb-4 bg-gray-800 text-white rounded focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full p-4 mb-4 bg-gray-800 text-white rounded focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="w-full py-4 bg-primary text-background rounded hover:bg-white transition duration-300"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
