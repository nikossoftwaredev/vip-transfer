"use client";
import { headerLinks } from "@/data/config";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <nav>
        <span className="bg-base-300 opacity-80 sticky">
          <ul className="p-2 w-full flex flex-wrap flex-col md:flex-row gap-6 justify-center items-center mr-1">
            <img src="/images/logo.png" className="h-[50px]" />
            {headerLinks.map((linkConfig, idx) => {
              let isActive = pathname === linkConfig.path;
              const isLastEl = idx === headerLinks.length - 1;

              if (linkConfig.path !== "/" && pathname) {
                isActive = pathname === linkConfig.path;
              }

              return (
                <li className="uppercase" key={linkConfig.path}>
                  <a
                    href={linkConfig.path}
                    className={`font-bold hover:text-accent ${
                      isActive ? "text-accent" : "text-primary"
                    }`}
                  >
                    {linkConfig.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </span>
      </nav>
    </header>
  );
};

export default Header;
