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
      className="rounded-3xl p-6 bg-slate-100 dark:bg-gray-900 text-center shadow-lg backdrop-blur-md rounded-br-none flex flex-col"
    >
      <h3 className="text-3xl font-semibold mb-4 dark:text-gray-300 text-gray-800">
        MERN Stack Specialist
      </h3>
      <p className="opacity-90 mb-8 max-w-2xl mx-auto dark:text-gray-400 text-gray-700">
        Building full-stack applications using MongoDB, Express.js, React, and
        Node.js
      </p>

      <div className="flex flex-wrap justify-center gap-4 ">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.3 + index * 0.1,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{ scale: 1.15 }}
            className="flex flex-col items-center bg-gray-200 dark:bg-gray-800 backdrop-blur-sm rounded-xl px-5 py-2 w-20 shadow-lg hover:shadow-cyan-500/50 transition-shadow text-gray-700 dark:text-gray-300 cursor-pointer"
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
