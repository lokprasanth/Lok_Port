import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const logoWords = ["PRASANTH", "ALAMANDA"];
  const [logoIndex, setLogoIndex] = useState(0);

  const [scrolled, setScrolled] = useState(false);

  // Scroll detect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Logo animation
  useEffect(() => {
    const interval = setInterval(() => {
      setLogoIndex((prev) => (prev + 1) % logoWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
            
           <Link className="hover:text-blue-700 transition" to="/">LOK</Link>


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
              hidden md:flex items-center text-white font-medium transition-all duration-300
              ${scrolled ? "gap-5 text-sm" : "gap-8 text-base"}
            `}
          >
            <Link className="hover:text-orange-400 transition" to="/">Home</Link>
            <Link className="hover:text-orange-400 transition" to="/about">About</Link>
            <Link className="hover:text-slate-100 transition" to="/projects">Projects</Link>
            <Link className="hover:text-green-400 transition" to="/contact">Contact</Link>
            <a href="" download className="hover:text-green-400 transition">Resume</a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-8 h-8 flex flex-col justify-center items-center"
            >
              <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-6 h-[2px] bg-white my-1 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden 
        ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-100"}`}
      >
        <div className="flex flex-col gap-4 px-6 py-6 bg-white/10 backdrop-blur-sm border-t border-white/20 text-center text-white">
          <Link onClick={() => setIsOpen(false)} to="/" className="hover:text-yellow-400">Home</Link>
          <Link onClick={() => setIsOpen(false)} to="/about" className="hover:text-yellow-400">About</Link>
          <Link onClick={() => setIsOpen(false)} to="/projects" className="hover:text-yellow-400">Projects</Link>
          <Link onClick={() => setIsOpen(false)} to="/contact" className="hover:text-yellow-400">Contact</Link>
          <a onClick={() => setIsOpen(false)} href="" download className="hover:text-yellow-400">Resume</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
