// components/Projects.jsx
import { motion } from "framer-motion";

import weatherAppImg from '../assets/weather.jpeg'

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
            <span className="border-b-4 border-blue-500 pb-1">Projects</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Weather App Project Card */}
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
              {/* Project Image */}
               <img
                src={weatherAppImg}
                alt="Weather App Screenshot"
                className="rounded-lg mb-4 object-cover w-full h-48"
              />

              <h3 className="text-xl font-semibold text-blue-500 mb-2">
                Weather App
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                A modern and responsive weather application built with React and the OpenWeather API. Features include real-time weather updates, location search, and form validation.
              </p>
              <div className="mt-4 space-x-4">
                <a
                  href="https://marvelous-empanada-55fe64.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/pandurangteke9545"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Add more project cards here */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
