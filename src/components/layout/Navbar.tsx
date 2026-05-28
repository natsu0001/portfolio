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
          <button className="hidden ">
            Let's Connect
          </button>

      

      
    </nav>
  );
};

export default Navbar;