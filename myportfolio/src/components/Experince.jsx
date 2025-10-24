// components/Experience.jsx
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
            <span className="border-b-4 border-blue-500 pb-1">Experience</span>
          </h2>

          <div className="space-y-8">
            {/* Experience 1 */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-500">
                Full Stack Developer – QICPIC Innovation
              </h3>
              <p className="text-sm text-gray-500">Dec 2024 – May 2025</p>
              <ul className="mt-3 list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>
                  Built scalable backend APIs for the CAP platform using Node.js, Express.js, and PostgreSQL.
                </li>
                <li>
                  Integrated payments, WebSocket-based real-time updates, and Kafka for inter-service messaging.
                </li>
                <li>
                  Developed interactive dashboards (DAP, Trainer Panel) with React.js and Context API.
                </li>
                <li>
                  Deployed services on AWS and implemented secure image handling with encryption/decryption.
                </li>
                <li>
                  Collaborated with frontend developers, designers, and product managers to ensure seamless user experience.
                </li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-500">
                VQA Engineer, LAYAM Flexi Solution Pvt. Ltd
              </h3>
              <p className="text-sm text-gray-500">June 2023 – June 2024</p>
              <ul className="mt-3 list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>Conducted defect investigations on assembly line issues, reducing repeat complaints by 15%.</li>
                <li>Coordinated with vendors for returns and segregation, accelerating resolution
times and improving supplier accountability.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
