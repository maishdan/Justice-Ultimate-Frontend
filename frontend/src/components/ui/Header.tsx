// src/components/Header.tsx
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { Button } from "./button";

export default function Header({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // System preference detection
  useEffect(() => {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(systemPrefersDark);
  }, [setDarkMode]);

  // Navigation links
  const navLinks = [
    { label: "🏠 Home", path: "/" },
    { label: "🧾 Services", path: "/services" },
  { label: "🚘 Showroom", path: "/vehicle-catalogue" },

 // add route if it exists
    { label: "📖 About Us", path: "/about" },
    { label: "✉️ Contact Us", path: "/contact" },
  ];

  const activeLinkClass = darkMode
    ? "bg-green-500 text-black px-3 py-1 rounded"
    : "bg-green-600 text-white px-3 py-1 rounded";

  return (
    <header
      className={`w-full shadow-md z-50 ${
        darkMode
          ? "bg-blue-950 text-white"
          : "bg-white text-black border-b border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-green-600 text-white w-10 h-10 flex items-center justify-center font-bold text-lg">
            J
          </div>
          <span className="text-xl font-bold text-green-400">
            Justice Ultimate Automobiles
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-green-400 ${
                location.pathname === link.path ? activeLinkClass : ""
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Register & Login */}
          <Link
            to="/register"
            className="border border-green-400 px-3 py-1 rounded hover:bg-green-400 hover:text-black"
          >
            📝 Register
          </Link>
          <Link
            to="/login"
            className="bg-green-500 px-3 py-1 rounded text-white hover:bg-green-400"
          >
            🔐 Login
          </Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 hover:text-yellow-400"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </Button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          className={`md:hidden px-4 pb-4 space-y-2 ${
            darkMode ? "bg-blue-900 text-white" : "bg-white text-black"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link to="/register" className="block" onClick={() => setMenuOpen(false)}>
            📝 Register
          </Link>
          <Link to="/login" className="block" onClick={() => setMenuOpen(false)}>
            🔐 Login
          </Link>
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              setMenuOpen(false);
            }}
            className="mt-2 flex items-center gap-2"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            Toggle Theme
          </button>
        </div>
      )}
    </header>
  );
}
