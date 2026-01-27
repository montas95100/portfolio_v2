import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { Moon, Sun, Languages, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const { t, theme, toggleTheme, language, toggleLanguage } = useApp();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 left-0 px-6 py-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-bold text-2xl tracking-tighter"
        >
          <span className="text-primary dark:text-white">M</span>
          <span className="text-yellow-accent">.</span>
        </motion.div>

        {/* Desktop Controls & Menu */}
        <div className="hidden md:flex items-center gap-6 glass-panel px-6 py-3 rounded-full">
          <div className="flex items-center gap-6 border-r border-gray-400/20 pr-6 mr-2">
            {['about', 'work', 'skills', 'projects'].map((key) => (
              <a 
                key={key}
                href={`#${key}`} 
                className="text-sm font-bold hover:text-blue-600 transition-colors uppercase tracking-wider text-black dark:text-gray-300"
              >
                {t.nav[key]}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors"
              title="Switch Language"
            >
              <span className="font-bold text-xs">{language.toUpperCase()}</span>
            </button>
            <button 
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors"
              title="Switch Theme"
            >
              {theme === 'dark' ? <Sun size={18} className="text-yellow-accent" /> : <Moon size={18} className="text-blue-600" />}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden glass-panel p-3 rounded-full pointer-events-auto bg-white/80 dark:bg-black/50"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-24 left-6 right-6 glass-panel p-6 rounded-2xl flex flex-col gap-6 items-center md:hidden pointer-events-auto shadow-2xl"
        >
          {['about', 'work', 'skills', 'projects'].map((key) => (
            <a 
              key={key}
              href={`#${key}`}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium"
            >
              {t.nav[key]}
            </a>
          ))}
          <div className="flex gap-4 mt-4 border-t border-gray-500/20 pt-6 w-full justify-center">
            <button onClick={toggleLanguage} className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-white/5 rounded-lg">
              <Languages size={16} /> {language.toUpperCase()}
            </button>
            <button onClick={toggleTheme} className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-white/5 rounded-lg">
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
