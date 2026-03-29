import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: '首页', path: '/首页' },
    { name: '关于我', path: '/#关于我' },
    { name: '作品', path: '/作品' },
    { name: '联系', path: '/#联系' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#FDFCFB]/95 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="px-8 md:px-16 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <svg viewBox="0 0 60 40" fill="none" className="w-16 h-10">
              <path d="M10 5 L50 5 L50 35 L10 35 Z" stroke="#1A1A1A" strokeWidth="2" fill="none"/>
              <circle cx="30" cy="20" r="8" fill="#1A1A1A"/>
            </svg>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path || (location.pathname.startsWith('/works') && item.path === '/works')
                    ? 'text-[#1A1A1A]'
                    : 'text-[#888888] hover:text-[#1A1A1A]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#1A1A1A]"
          >
            <div className="w-6 h-0.5 bg-[#1A1A1A] mb-2"></div>
            <div className="w-6 h-0.5 bg-[#1A1A1A] mb-2"></div>
            <div className="w-6 h-0.5 bg-[#1A1A1A]"></div>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#FDFCFB] mt-4 rounded-lg shadow-lg"
          >
            <div className="py-4 flex flex-col gap-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium px-6 py-2 transition-colors ${
                    location.pathname === item.path || (location.pathname.startsWith('/works') && item.path === '/works')
                      ? 'text-[#1A1A1A] bg-[#F8F6F5]'
                      : 'text-[#888888] hover:text-[#1A1A1A]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;