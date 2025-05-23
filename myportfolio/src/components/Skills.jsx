// components/Skills.jsx
import { motion } from "framer-motion";

// Replace these with actual image paths or URLs
const skillIcons = {
  HTML5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Responsive Design": "https://img.icons8.com/ios-filled/50/monitor--v1.png",

  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",

  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  SQL: "https://img.icons8.com/ios-filled/50/sql.png",

  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  Kafka: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
};

const skills = Object.entries({
  Frontend: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design"],
  Backend: ["Node.js", "Express.js", "Python"],
  Database: ["MongoDB", "PostgreSQL", "SQL"],
  Tools: ["Git", "GitHub", "VS Code", "AWS", "Kafka"],
}).flatMap(([category, skills]) =>
  skills.map((skill) => ({
    name: skill,
    icon: skillIcons[skill],
    category,
  }))
);

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
            <span className="border-b-4 border-blue-500 pb-1">Skills</span>
          </h2>

          <div className="overflow-hidden relative">
            <motion.div
              className="flex gap-8 animate-scroll"
              style={{ width: 'max-content' }}
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {[...skills, ...skills].map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center bg-white dark:bg-gray-800 p-4 rounded-xl shadow w-36 flex-shrink-0"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-12 w-12 object-contain mb-2"
                  />
                  <span className="text-sm text-center text-blue-800 dark:text-blue-100">
                    {skill.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
