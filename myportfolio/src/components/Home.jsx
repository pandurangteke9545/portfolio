import { motion } from "framer-motion";
import profile from "../assets/Shree.jpg"; // your image path

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center max-w-2xl"
      >
        {/* Profile Image */}
        <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-lg border-4 border-blue-500 mb-6">
          <img
            src={profile}
            alt="Pandurang Teke"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name and Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Hi, I'm Pandurang Teke
        </motion.h1>
        <p className="text-lg mt-4">Full Stack Developer | MERN Stack</p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            download
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
