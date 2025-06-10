"use client";
import { HeadphonesIcon, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "./customUI/button";
import ButtonIcon from "./customUI/buttonIcon";
import HeaderNav from "./headerNav";

export interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Header = ({ activeSection, onSectionChange }: HeaderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <header>
      <nav className="flex w-screen">
        <div className="bg-gray-800 dark:bg-white w-1/6">
          <div className="flex p-8 bg-white rounded-tr-[48px] h-full dark:bg-slate-900 items-center justify-center">
            <Button title="Itgelt" />
          </div>
        </div>
        <HeaderNav
          activeSection={activeSection}
          onSectionChange={onSectionChange}
        />
        <div className="bg-gray-800 dark:bg-white w-3/6">
          <div className="bg-white p-6 w-full rounded-tl-[48px] dark:bg-slate-900">
            <div className="flex justify-end w-full rounded-tl-[48px] gap-4 p-2 pl-8">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300 dark:border-white dark:hover:bg-white dark:hover:text-black"
              >
                {isDarkMode ? <Moon /> : <Sun />}
              </button>
              <ButtonIcon title={<HeadphonesIcon />} />
              <Button title="Download CV" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
