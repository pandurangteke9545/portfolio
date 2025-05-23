// components/Contact.jsx
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 px-4 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start"
      >
        {/* Left Side: Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-600">Contact Info</h2>
          <ul className="space-y-4 text-lg">
            <li>
              <strong>📍 Location:</strong> Pandharpur, Maharashtra, India
            </li>
            <li>
              <strong>📧 Email:</strong>{" "}
              <a
                href="mailto:pandurangteke95@gmail.com"
                className="text-blue-600 hover:underline"
              >
                pandurangteke95@gmail.com
              </a>
            </li>
            <li>
              <strong>📞 Phone:</strong> +91 7350850955
            </li>
          </ul>
        </div>

        {/* Right Side: CTA & Links */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-4 text-blue-500">Let’s Collaborate</h3>
          <p className="mb-6">
            I’m always open to discussing new projects, ideas, or opportunities to work
            together. Feel free to reach out!
          </p>
          <div className="space-x-4">
            <a
              href="mailto:pandurangteke95@gmail.com"
              className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
            >
              mail Me
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
      </motion.div>
    </section>
  );
};

export default Contact;
