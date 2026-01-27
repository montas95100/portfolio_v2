import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import Scene3D from './Scene3D';

const Hero = () => {
  const { t } = useApp();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } }
  };

  return (
    <section id="about" className="min-h-[90vh] flex items-center justify-between relative">
      <div className="w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10"
        >
          <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 font-medium text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            {t.hero.available}
          </motion.div>

          <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            {t.hero.greeting} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-yellow-400">
              Montacir.
            </span>
          </motion.h1>

          <motion.p variants={item} className="text-xl text-secondary dark:text-gray-400 max-w-lg mb-10 leading-relaxed">
            <span className="font-bold text-primary dark:text-white block mb-2">{t.hero.role}</span>
            {t.hero.description}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary group inline-flex items-center gap-2">
              {t.hero.cta1} 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button className="px-6 py-3 rounded-full font-bold border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors flex items-center gap-2">
              <Download size={18} /> Resume
            </button>
          </motion.div>

          <motion.div variants={item} className="mt-12 flex items-center gap-6 text-gray-400">
            <a href="https://github.com/montas95100" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-white transition-colors transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/montacir-akchouch-8624a81a5/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-white transition-colors transform hover:scale-110">
              <Linkedin size={24} />
            </a>
             <a href="mailto:montacir@live.fr" className="hover:text-blue-600 dark:hover:text-white transition-colors transform hover:scale-110">
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Visual Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative hidden lg:block h-[500px]"
        >
          <Scene3D />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
