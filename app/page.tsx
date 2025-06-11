"use client";
import { useState } from "react";
import AboutMe from "@/components/aboutMe";
import Header from "@/components/header";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

const sections = ["about", "skills", "projects", "contact"];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<string>("about");

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="dark:bg-slate-900 bg-slate-100">
      <div className="absolute top-0 left-0 w-screen z-10 ">
        <Header
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />
      </div>
      <div className="relative h-screen w-screen pt-20 ">
        {activeSection === "about" ? (
          <AboutMe onSectionChange={handleSectionChange} />
        ) : null}
        {activeSection === "skills" ? <Skills /> : null}
        {activeSection === "projects" ? <Projects /> : null}
        {activeSection === "contact" ? <Contact /> : null}
      </div>
    </div>
  );
}
