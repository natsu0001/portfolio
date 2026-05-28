"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from '@/data'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className ="w-full px-4 py-4 flex items-center justify-between relative">
      

      

          {/* Logo */}
          <div className="text-xl font-bold">
            ABHISHEK
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button className="hidden md:inline-block px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-900 transition">
            Let's Connect
          </button>

          {/* Hamburger Button */}

          <button 
            className = "md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Navi */}

          {isOpen && (
            <div className="absolute top-full left-0 w-full bg-black flex flex-col items-end gap-6 py-6 md:hidden">
              {NAV_LINKS.map(link => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
              <button className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-900 transition">
                Let's Connect
              </button>
            </div>
            

          )}

      

      
    </nav>
  );
};

export default Navbar;