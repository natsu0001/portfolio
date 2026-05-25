import Container from "./Container";
import { NAV_LINKS } from '@/data'

const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-800">
      <Container>

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            ABHISHEK
          </div>

          {/* Desktop Navigation */}
          <ul className="flex gap-6">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button className="px-4 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-colors">
            Let's Connect
          </button>

        </div>

      </Container>
    </nav>
  );
};

export default Navbar;