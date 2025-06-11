import { HeaderProps } from "./header";

const sections = ["about", "skills", "projects", "contact"];

const HeaderNav = ({ activeSection, onSectionChange }: HeaderProps) => {
  const activeIndex = sections.indexOf(activeSection);
  return (
    <div className="bg-gray-800 dark:bg-slate-100 p-6 rounded-b-[48px]">
      <div className="bg-slate-100 w-full rounded-full p-4 dark:bg-slate-900 relative overflow-hidden">
        <div
          className="absolute top-[9px] left-4 h-[38px] px-4 py-2 bg-gray-800 dark:bg-slate-100 rounded-full text-white dark:text-black flex items-center justify-center transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(${activeIndex * 96}px)`,
          }}
        >
          <span>
            {sections[activeIndex].charAt(0).toUpperCase() +
              sections[activeIndex].slice(1)}
          </span>
        </div>
        <ul className="flex gap-2 justify-center items-center">
          {sections.map((text, i) => (
            <li key={i} className="w-[88px]">
              <a
                href={`#${text}`}
                onClick={() => onSectionChange(text)}
                className="rounded-full px-4 py-2 h-10 hover:bg-gray-800 hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black"
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
