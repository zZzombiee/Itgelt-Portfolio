"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiGraphql,
  SiMongodb,
  SiApollographql,
  SiJest,
} from "react-icons/si";
import Merngrid from "./mernGrid";
import { motion } from "framer-motion";

import { Database, Server, Code2, Terminal } from "lucide-react";

const techStack = [
  { name: "MongoDB", icon: <Database className="w-6 h-6" /> },
  { name: "Express.js", icon: <Server className="w-6 h-6" /> },
  { name: "React", icon: <Code2 className="w-6 h-6" /> },
  { name: "Node.js", icon: <Terminal className="w-6 h-6" /> },
];

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-gray-800 dark:text-white" />,
  },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "Apollo", icon: <SiApollographql className="text-indigo-500" /> },
  { name: "Jest", icon: <SiJest className="text-rose-500" /> },
  { name: "Git", icon: <FaGit className="text-orange-600" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-gray-800 dark:text-white" />,
  },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "Apollo", icon: <SiApollographql className="text-indigo-500" /> },
  { name: "Jest", icon: <SiJest className="text-rose-500" /> },
  { name: "Git", icon: <FaGit className="text-orange-600" /> },
];

export default function ScrollingSkills() {
  return (
    <section className="w-full h-full pt-16 overflow-hidden dark:bg-gray-900 bg-white flex flex-col justify-between">
      <h2 className="text-center text-3xl font-bold dark:text-gray-300 text-gray-800 pb-0 mb-0">
        MERN Stack Developer
      </h2>

      <p className="text-center text-xl dark:text-gray-400 text-gray-800 pt-0 max-w-3xl mx-auto">
        A MERN Stack Software Engineer with both theoretical and practical
        knowledge gained from completing the Pinecone Academy program.
      </p>
      <p className="text-center text-xl dark:text-gray-600 pt-0 max-w-3xl mx-auto">
        Proficient in writing unit and integration tests with Jest to ensure
        code quality and system reliability
      </p>

      <div>
        <div className="bg-gray-900 dark:bg-white">
          <div className="rounded-br-3xl dark:bg-gray-900 bg-white">
            <div className="text-center h-10 text-3xl font-bold dark:text-white text-gray-800"></div>
          </div>
        </div>
        <div className="flex justify-between bg-gray-900 dark:bg-white">
          <div className="w-2/3 rounded-br-3xl bg-white dark:bg-gray-900 flex items-center justify-center">
            <div className="relative w-2/3 mx-auto overflow-hidden">
              <h2 className="text-2xl font-semibold mx-auto w-fit py-6 dark:text-gray-400">
                Skills & Technology
              </h2>
              <div className="relative w-full overflow-hidden py-2">
                {/* Fading edges (left) */}
                <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none z-10"></div>

                {/* Fading edges (right) */}
                <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none z-10"></div>

                {/* Scrolling content */}
                <div className="animate-scroll flex gap-12 whitespace-nowrap">
                  {[...skills, ...skills].map((skill, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center text-center w-24 transition-transform duration-300 hover:scale-110"
                    >
                      <div
                        className="group flex flex-col items-center"
                        style={{ perspective: "500px" }}
                      >
                        <div className="text-5xl mb-1">{skill.icon}</div>
                        <span className="text-sm dark:text-gray-300 text-gray-700 opacity-0 transform scale-75 -rotate-x-90 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-x-0 transition-all duration-700">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-1/3 bg-white dark:bg-gray-900">
            <div className="pl-4 pt-4 bg-gray-900 self-end rounded-tl-3xl dark:bg-white">
              <Merngrid />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
