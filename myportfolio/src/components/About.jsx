// components/About.jsx
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-8"
        >
          {/* Section Title */}
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6 relative inline-block">
            <span className="border-b-4 border-blue-500 pb-1">About Me</span>
          </h2>

          {/* About Text */}
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-justify">
            I'm a passionate Full Stack Developer skilled in the MERN stack.
            I enjoy building responsive, user-friendly web applications with a focus on performance and design. With a strong foundation in React.js, Node.js, and Express, I also have experience working on secure and scalable backends using PostgreSQL and AWS.
            <br /><br />
            At QICPIC Innovation, I contributed to real-time data dashboards, integrated Kafka messaging, and implemented secure image encryption. My journey began in Mechanical Engineering, but my curiosity for technology led me into web development. I thrive in collaborative environments and love using AI tools to accelerate and polish my work.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
