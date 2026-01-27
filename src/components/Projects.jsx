import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const { t } = useApp();

  const projects = t.projectsData;

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          {t.sections.projects}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => window.open(project.link, '_blank')}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Image & Gradient */}
              <div className="absolute inset-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-blue-900/60 transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-end mb-2">
                    <div>
                      <span className="text-yellow-400 text-sm font-bold tracking-wider uppercase mb-1 block">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white leading-tight">
                        {project.title}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-0 group-hover:scale-100 border border-white/20">
                      <ArrowUpRight />
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75 h-0 group-hover:h-auto overflow-hidden">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] uppercase font-bold px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-white border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
