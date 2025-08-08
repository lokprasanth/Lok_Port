import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Only changing part (last names)
  const logoWords = ["PRASANTH", "ALAMANDA"];
  const [logoIndex, setLogoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogoIndex((prev) => (prev + 1) % logoWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 text-white backdrop-blur border-b border-white/10"
      style={{ background: "#000000" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo: Static "LOK" + Animated Last Name */}
          <div
            className="flex items-center gap-2 text-2xl font-bold uppercase tracking-wider text-white"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            <span>LOK</span>
            <div className="h-[1.5rem] overflow-hidden">
              <div
                className="flex flex-col transition-transform duration-500 ease-in-out"
                style={{ transform: `translateY(-${logoIndex * 1.5}rem)` }}
              >
                {logoWords.map((word, i) => (
                  <span key={i} className="h-[1.5rem] leading-[1.5rem] whitespace-nowrap">
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white">
            <Link className="hover:text-yellow-400 transition" to="/">Home</Link>
            <Link className="hover:text-yellow-400 transition" to="/about">About</Link>
            <Link className="hover:text-yellow-400 transition" to="/projects">Projects</Link>
            <Link className="hover:text-yellow-400 transition" to="/contact">Contact</Link>
            <a className="hover:text-yellow-400 transition" href="/resume.pdf" download>Resume</a>
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-8 h-8 flex flex-col justify-center items-center group"
              aria-label="Toggle Menu"
            >
              <span
                className={`w-6 h-[2px] bg-white rounded transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-[6px]' : ''
                }`}
              />
              <span
                className={`w-6 h-[2px] bg-white rounded my-[6px] transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-6 h-[2px] bg-white rounded transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-[6px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: "#000000" }}
      >
        <div className="flex flex-col gap-4 px-6 py-6 text-sm font-medium text-white text-center border-t border-white/10">
          <Link onClick={() => setIsOpen(false)} to="/" className="hover:text-yellow-400">Home</Link>
          <Link onClick={() => setIsOpen(false)} to="/about" className="hover:text-yellow-400">About</Link>
          <Link onClick={() => setIsOpen(false)} to="/projects" className="hover:text-yellow-400">Projects</Link>
          <Link onClick={() => setIsOpen(false)} to="/contact" className="hover:text-yellow-400">Contact</Link>
          <a onClick={() => setIsOpen(false)} href="/resume.pdf" download className="hover:text-yellow-400">Resume</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
