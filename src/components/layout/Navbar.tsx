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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50

        transition-all
        duration-300

        ${
          scrolled
            ? "bg-bg/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }
      `}
    >
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#hero"
            className="
              text-lg
              sm:text-xl
              lg:text-2xl

              font-bold
              tracking-[0.15em]
            "
          >
            ABHISHEK
            <span className="text-accent">.</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-4 xl:gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="
                    relative

                    text-sm
                    uppercase
                    tracking-[0.15em]

                    text-text-2

                    transition-colors
                    duration-200

                    hover:text-accent

                    after:absolute
                    after:left-0
                    after:-bottom-1

                    after:h-px
                    after:bg-accent

                    after:w-0
                    hover:after:w-full

                    after:transition-all
                    after:duration-300
                  "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="
              hidden
              lg:inline-flex

              items-center
              gap-2

              px-5
              py-2

              border
              border-accent

              text-accent
              text-[0.7rem]

              font-semibold
              uppercase
              tracking-[0.15em]

              transition-all
              duration-200

              hover:bg-accent
              hover:text-bg
            "
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            Let's Connect
          </a>

          {/* Mobile Toggle */}
          <button
            className="
              lg:hidden
              p-2
              text-text-2
            "
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
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

              bg-bg/95
              backdrop-blur-md

              border-t
              border-border
            "
          >
            <div
              className="
                flex
                flex-col
                items-center
                justify-center

                h-full

                gap-8
                px-6
              "
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    text-sm

                    font-semibold

                    uppercase
                    tracking-[0.2em]

                    text-text-2

                    hover:text-accent

                    transition-colors
                  "
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="
                  inline-flex
                  items-center
                  gap-2

                  px-5
                  py-2

                  border
                  border-accent

                  text-accent

                  text-xs
                  font-semibold

                  uppercase
                  tracking-[0.2em]

                  mt-4
                "
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                Let's Connect
              </a>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;