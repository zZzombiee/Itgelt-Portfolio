import { motion } from "framer-motion";
import { Database, Server, Code2, Terminal } from "lucide-react";

const techStack = [
  { name: "MongoDB", icon: <Database className="w-6 h-6" /> },
  { name: "Express.js", icon: <Server className="w-6 h-6" /> },
  { name: "React", icon: <Code2 className="w-6 h-6" /> },
  { name: "Node.js", icon: <Terminal className="w-6 h-6" /> },
];

const Merngrid = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="rounded-3xl p-6 bg-white dark:bg-gray-900 text-center shadow-lg backdrop-blur-md rounded-br-none flex flex-col"
    >
      <h3 className="text-2xl font-bold mb-4">MERN Stack Specialist</h3>
      <p className="opacity-90 mb-8 max-w-2xl mx-auto">
        Full-stack development with MongoDB, Express.js, React, and Node.js
      </p>

      <div className="flex flex-wrap justify-center gap-4 ">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.6 + index * 0.1,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center bg-gray-200 dark:bg-gray-800 backdrop-blur-sm rounded-xl px-5 py-2 w-20"
          >
            {tech.icon}
            <span className="font-medium text-sm">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
export default Merngrid;
