import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Simple throttle function to limit scroll handler frequency
function throttle(fn, wait) {
  let lastTime = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastTime >= wait) {
      lastTime = now;
      fn(...args);
    }
  };
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const logoWords = ["PRASANTH", "ALAMANDA"];
  const [logoIndex, setLogoIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detect with throttle
  useEffect(() => {
    const onScroll = throttle(() => setScrolled(window.scrollY > 10), 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Logo animation
  useEffect(() => {
    const interval = setInterval(() => {
      setLogoIndex((prev) => (prev + 1) % logoWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [logoWords.length]);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled
          ? "bg-white/10 backdrop-blur-lg border-b border-white/20"
          : "bg-transparent border-b-0"}
        ${scrolled ? "h-14" : "h-20"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        {/* Split layout */}
        <div className="flex justify-between items-center h-full">
          
          {/* LEFT — Logo */}
          <div
            className={`
              flex items-center font-bold uppercase tracking-wider text-white
              transition-all duration-300
              ${scrolled ? "text-xl" : "text-2xl"}
            `}
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            <Link className="hover:text-blue-500 transition" to="/">LOK</Link>
            <div className="h-[1.5rem] overflow-hidden ml-2">
              <div
                className="flex flex-col transition-transform duration-500 ease-in-out"
                style={{ transform: `translateY(-${logoIndex * 1.5}rem)` }}
              >
                {logoWords.map((word, i) => (
                  <span
                    key={i}
                    className="h-[1.5rem] leading-[1.5rem] whitespace-nowrap"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Desktop Menu */}
          <div
            className={`
              hidden md:flex items-center text-white font-semibold transition-all duration-300
              ${scrolled ? "gap-5 text-sm" : "gap-8 text-base"}
            `}
          >
            <Link className="hover:text-lime-300 transition" to="/">HOME</Link>
            <Link className="hover:text-lime-300 transition" to="/about">ABOUT</Link>
            <Link className="hover:text-lime-300 transition" to="/projects">PROJECTS</Link>
            <Link className="hover:text-lime-300 transition" to="/contact">CONTACT</Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-8 h-8 flex flex-col justify-center items-center"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-6 h-[2px] bg-white my-1 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
     {/* Mobile Menu */}
<div
  className={`md:hidden fixed top-0 left-0 w-full h-screen z-50 transition-all duration-500 
    ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
>
  <div className="flex flex-col justify-center items-center h-full bg-black/70 backdrop-blur-lg text-white gap-8">
    <Link
      onClick={() => setIsOpen(false)}
      to="/"
      className="text-2xl font-bold uppercase tracking-wider hover:text-yellow-400 transition-transform transform hover:scale-110"
    >
      Home
    </Link>
    <Link
      onClick={() => setIsOpen(false)}
      to="/about"
      className="text-2xl font-bold uppercase tracking-wider hover:text-yellow-400 transition-transform transform hover:scale-110"
    >
      About
    </Link>
    <Link
      onClick={() => setIsOpen(false)}
      to="/projects"
      className="text-2xl font-bold uppercase tracking-wider hover:text-yellow-400 transition-transform transform hover:scale-110"
    >
      Projects
    </Link>
    <Link
      onClick={() => setIsOpen(false)}
      to="/contact"
      className="text-2xl font-bold uppercase tracking-wider hover:text-yellow-400 transition-transform transform hover:scale-110"
    >
      Contact
    </Link>
  </div>
</div>

    </nav>
  );
}

export default Navbar;     