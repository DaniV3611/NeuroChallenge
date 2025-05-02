import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to md+
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 backdrop-blur-md ${
        scrolled ? "bg-white/70 shadow-lg backdrop-blur-xl" : "bg-white/0"
      }`}
      style={{
        WebkitBackdropFilter: "blur(12px)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-extrabold text-xl text-purple-700 tracking-tight animate-hero-fade-in">
          NeuroChallenge
        </span>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`block w-6 h-0.5 bg-purple-700 mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-purple-700 mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-purple-700 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a
            href="#features"
            className="hover:text-purple-600 transition-colors"
          >
            Features
          </a>
          <a href="#about" className="hover:text-purple-600 transition-colors">
            About
          </a>
          <a
            href="#testimonials"
            className="hover:text-purple-600 transition-colors"
          >
            Testimonials
          </a>
          <a href="#cta" className="hover:text-purple-600 transition-colors">
            Get Started
          </a>
        </nav>
      </div>
      {/* Mobile nav */}
      <nav
        className={`md:hidden flex flex-col bg-white/90 backdrop-blur-xl shadow-lg rounded-b-lg px-6 pt-2 pb-4 absolute w-full left-0 top-full transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          WebkitBackdropFilter: "blur(12px)",
          backdropFilter: "blur(12px)",
        }}
      >
        <a
          href="#features"
          className="py-2 text-gray-700 font-medium hover:text-purple-600 transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Features
        </a>
        <a
          href="#about"
          className="py-2 text-gray-700 font-medium hover:text-purple-600 transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>
        <a
          href="#testimonials"
          className="py-2 text-gray-700 font-medium hover:text-purple-600 transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Testimonials
        </a>
        <a
          href="#cta"
          className="py-2 text-gray-700 font-medium hover:text-purple-600 transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}
