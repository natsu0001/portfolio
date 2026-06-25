"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data";
import Container from "./Container";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed
        mx-auto w-full max-w-7xl
        top-0
        left-0
        right-0
        z-50
        transition-all
        duration-300
        md:px-5
        md:py-2
        card-pattern-gold
        ${
          scrolled
            ? "bg-bg/90 backdrop-blur-md border-b border-border"
            : "bg-bg/70 backdrop-blur-sm"
        }
      `}
    >
      
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className="
              text-lg
              font-bold
              tracking-wider
            "
          >
            ABHISHEK
            <span className="text-accent">.</span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden text-gold font-extrabold lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="
                    text-sm
                    font-medium
                    text-text-2
                    transition-colors
                    hover:text-accent
                  "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="
                hidden
                lg:inline-flex
                items-center
                px-6
                py-2
                rounded-md
                border
                border-accent
                text-accent
                hover:bg-accent
                hover:text-bg
               
                font-medium
                transition-all
                hover:opacity-90
              "
            >
              Let's Connect
            </a>

            {/* Mobile Toggle */}
            <button
              className="
                lg:hidden
                p-2
                rounded-md
                hover:bg-white/10
              "
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            lg:hidden
            overflow-hidden
            transition-all
            duration-300
            ${
              isOpen
                ? "max-h-[500px] opacity-100 pb-4"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div
            className="
              mt-2
              rounded-xl
              border
              border-border
              bg-bg/100
              card-patern-gold
              backdrop-blur-md
              p-3
            "
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="
                      block
                      px-4
                      py-3
                      rounded-lg
                      text-gold
                      font-extrabold
                      text-text-2
                      hover:bg-accent/10
                      hover:text-accent
                      transition-colors
                    "
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="
                flex
                items-center
                justify-center
                mt-3
                w-full
                rounded-lg
                bg-accent
                px-4
                py-3
                text-bg
                font-medium
              "
            >
              Let's Connect
            </a>
          </div>
        </div>
      
    </nav>
  );
};

export default Navbar;