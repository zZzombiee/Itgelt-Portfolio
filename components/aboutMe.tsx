import { ChevronRight } from "lucide-react";
import Button from "./customUI/button";
import ButtonIcon from "./customUI/buttonIcon";

const About = ({
  onSectionChange,
}: {
  onSectionChange: (section: string) => void;
}) => {
  return (
    <section id="about" className="px-6 py-16 max-w-3xl mx-auto ">
      <h2 className="text-md font-semibold mb-6 dark:text-gray-400">
        Hi, my name is
      </h2>
      <h1 className="text-7xl font-bold mb-4 dark:text-gray-300">Itgelt.G</h1>
      <h1 className="text-5xl font-bold mb-4 dark:text-gray-400">
        I build things for the web.
      </h1>
      <h3 className="text-3xl font-bold mb-4 dark:text-gray-600 ">
        Full-Stack Software Engineer
      </h3>
      <p className="text-lg dark:text-gray-700  mb-8">
        Dedicated to building fast, accessible, and beautifully crafted digital
        products that deliver exceptional user experiences across the modern
        web.
      </p>
      <div className="flex items-start gap-8">
        <div onClick={() => onSectionChange("contact")}>
          <Button title="Contact Me" />
        </div>
        <div onClick={() => onSectionChange("skills")}>
          <ButtonIcon title={<ChevronRight />} />
        </div>
      </div>
    </section>
  );
};
export default About;
