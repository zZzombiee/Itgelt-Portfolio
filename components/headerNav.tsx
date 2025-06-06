import { HeaderProps } from "./header";

const sections = ["about", "skills", "projects", "contact"];

const HeaderNav = ({ activeSection, onSectionChange }: HeaderProps) => {
  return (
    <div className="bg-gray-800 dark:bg-white w-2/6 p-6 rounded-b-[48px]">
      <div className="bg-white w-full rounded-full p-4 dark:bg-slate-900">
        <ul className="flex gap-4 justify-center items-center">
          {sections.map((text, i) => (
            <li key={i}>
              <a
                href={`#${text}`}
                onClick={() => onSectionChange(text)}
                className={`transition-colors duration-300 rounded-full px-4 py-2
                  ${
                    activeSection === text
                      ? "bg-gray-800 text-white dark:bg-white dark:text-black"
                      : "hover:bg-gray-800 hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black"
                  }`}
              >
                {text.charAt(0).toUpperCase() + text.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default HeaderNav;
