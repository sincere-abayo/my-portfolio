import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" }
  ];
  const name = "Abayo Sincere";

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-gray-900/70 backdrop-blur-lg border-b border-white/10 z-50"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.a 
              href="/"
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
            >
              {name}
            </motion.a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.path}
                  href={item.path}
                  whileHover={{ y: -2 }}
                  className={`${
                    location.pathname === item.path 
                      ? "text-blue-500" 
                      : "text-gray-300"
                  } hover:text-blue-500 transition-colors`}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-blue-500"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? "0%" : "100%" }}
        transition={{ type: "tween" }}
        className="fixed top-16 right-0 bottom-0 w-64 bg-gray-900/95 backdrop-blur-lg md:hidden z-40"
      >
        <div className="flex flex-col p-4">
          {navItems.map((item) => (
            <motion.a
              key={item.path}
              href={item.path}
              whileHover={{ x: 10 }}
              className={`${
                location.pathname === item.path 
                  ? "text-blue-500" 
                  : "text-gray-300"
              } py-3 px-4 hover:text-blue-500 transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  );
}
