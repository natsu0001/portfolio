"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 w-full">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10 xl:px-16">

        <div className="flex items-center justify-between h-15">

          {/* Logo */}
          <div className="text-xl lg:text-2xl font-bold tracking-wider">
            ABHISHEK
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-3 xl:gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="
                    text-sm
                    uppercase
                    tracking-[0.15em]
                    transition-opacity
                    hover:opacity-60
                  "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <button
            className="
              hidden md:inline-flex
              items-center
              justify-center
              h-12
              px-6
              rounded-md
              bg-amber-600
              text-white
              uppercase
              tracking-[0.12em]
              transition-all
              hover:bg-amber-700
            "
          >
            Let's Connect
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className="
              md:hidden
              absolute
              top-full
              left-0
              w-full
              bg-black
              border-t
              border-white/10
              backdrop-blur-md
            "
          >
            <div className="flex flex-col items-center gap-8 py-10">

              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    text-sm
                    uppercase
                    tracking-[0.15em]
                  "
                >
                  {link.label}
                </a>
              ))}

              <button
                className="
                  h-12
                  px-8
                  rounded-md
                  bg-amber-600
                  text-white
                  uppercase
                  tracking-[0.12em]
                "
              >
                Let's Connect
              </button>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;