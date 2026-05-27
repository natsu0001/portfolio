
import { NAV_LINKS } from '@/data'

const Navbar = () => {
  return (
    <nav className ="w-full px-4 flex items-center justify-between">
      

      

          {/* Logo */}
          <div>
            ABHISHEK
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
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
          <button >
            Let's Connect
          </button>

      

      
    </nav>
  );
};

export default Navbar;