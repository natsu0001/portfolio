"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data";
import Container from "./Container";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 w-full">
      <Container>
    

        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <div className="text-lg sm:text-xl lg:text-2xl font-bold tracking-wider">
            ABHISHEK
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-4 xl:gap-7">
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
              hidden lg:inline-flex
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
            className="
              lg:hidden
              p-2
              rounded-md
            "
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className="
              lg:hidden
              fixed
              inset-0
              top-16
              bg-black/95
              backdrop-blur-lg
              border-t
              border-white/10
            "
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 px-6">

              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    text-base
                    uppercase
                    tracking-[0.15em]
                    py-2
                  "
                >
                  {link.label}
                </a>
              ))}

              <button
                className="
                  mt-4
                  w-full
                  max-w-xs
                  h-12
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
     
      </Container>
    </nav>
  );
};

export default Navbar;