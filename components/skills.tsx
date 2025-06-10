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
    <section className="w-full h-full pt-10 overflow-hidden dark:bg-gray-900 bg-white flex flex-col justify-between">
      <h2 className="text-center text-3xl font-bold dark:text-white text-gray-800">
        Skills & Technologies
      </h2>
      <div>
        <div className="bg-gray-900 dark:bg-white">
          <div className="rounded-br-3xl dark:bg-gray-900 bg-white">
            <div className="text-center h-10 text-3xl font-bold dark:text-white text-gray-800"></div>
          </div>
        </div>
        <div className="flex justify-between bg-gray-900 dark:bg-white">
          <div className="w-2/3 rounded-br-3xl bg-white dark:bg-gray-900 flex items-center justify-center">
            <div className="relative w-2/3 mx-auto overflow-hidden">
              <div className="animate-scroll flex gap-12 whitespace-nowrap group py-2">
                {[...skills, ...skills].map((skill, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center text-center w-24 transition-transform duration-300 hover:scale-110"
                  >
                    <div className="text-5xl mb-1">{skill.icon}</div>
                    <span className="text-sm dark:text-gray-300 text-gray-700">
                      {skill.name}
                    </span>
                  </div>
                ))}
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
