import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { Briefcase, Calendar, X, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const Work = () => {
  const { t } = useApp();
  const [selectedId, setSelectedId] = useState(null);
  const wrapperRef = useRef(null);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSelectedId(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => document.body.style.overflow = 'unset';
  }, [selectedId]);

  return (
    <section id="work" className="py-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          {t.sections.experience}
        </motion.h2>

        <div className="space-y-8">
          {t.work.jobs.map((job) => (
            <motion.div
              layoutId={`card-container-${job.id}`}
              onClick={() => setSelectedId(job.id)}
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="cursor-pointer group relative pl-8 border-l-2 border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-colors will-change-transform"
            >
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-500 ring-4 ring-white dark:ring-dark-bg transition-all group-hover:scale-125 group-hover:ring-blue-500/30" />
              
              <div className="glass-panel p-8 rounded-2xl hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative overflow-hidden">
                <motion.div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <motion.h3 layoutId={`title-${job.id}`} className="text-2xl font-bold">{job.role}</motion.h3>
                    <motion.div layoutId={`company-${job.id}`} className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-2 mt-1">
                      <Briefcase size={16} /> {job.company}
                    </motion.div>
                  </div>
                  <motion.div layoutId={`period-${job.id}`} className="text-sm font-medium px-4 py-1 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center gap-2 w-fit">
                    <Calendar size={14} /> {job.period}
                  </motion.div>
                </motion.div>
                
                <motion.p layoutId={`desc-${job.id}`} className="text-secondary dark:text-gray-400 mb-6 leading-relaxed line-clamp-2">
                  {job.description}
                </motion.p>
                
                <motion.div className="flex items-center gap-2 text-sm font-bold text-blue-500 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {t.work.readMore} <ChevronRight size={16} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm z-50"
              />
              
              {/* Modal Container */}
              <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
                {t.work.jobs.filter(item => item.id === selectedId).map(job => (
                  <motion.div
                    layoutId={`card-container-${job.id}`}
                    key={job.id}
                    ref={wrapperRef}
                    className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl pointer-events-auto relative max-h-[80vh] flex flex-col"
                  >
                     <button 
                      onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                      className="absolute top-4 right-4 p-2 bg-gray-100 dark:bg-white/10 rounded-full hover:bg-red-500 hover:text-white transition-colors z-10"
                    >
                      <X size={20} />
                    </button>

                    <div className="p-8 overflow-y-auto custom-scrollbar">
                      <div className="flex flex-col gap-6">
                        <div>
                          <motion.h3 layoutId={`title-${job.id}`} className="text-3xl font-bold mb-2">{job.role}</motion.h3>
                          <div className="flex flex-wrap items-center gap-4">
                            <motion.div layoutId={`company-${job.id}`} className="text-xl text-blue-600 dark:text-blue-400 font-medium flex items-center gap-2">
                              <Briefcase size={20} /> {job.company}
                            </motion.div>
                            <motion.div layoutId={`period-${job.id}`} className="text-sm font-medium px-4 py-1 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center gap-2">
                              <Calendar size={14} /> {job.period}
                            </motion.div>
                          </div>
                        </div>

                        <motion.div 
                          layoutId={`desc-${job.id}`} 
                          className="text-lg text-secondary dark:text-gray-300 leading-relaxed border-l-4 border-blue-500 pl-4 bg-blue-50 dark:bg-blue-900/10 py-4 pr-4 rounded-r-xl"
                        >
                          {job.description}
                        </motion.div>

                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                            Key Achievements
                          </h4>
                          <ul className="space-y-4">
                            {job.details?.map((detail, idx) => (
                              <li key={idx} className="flex gap-3 text-secondary dark:text-gray-400">
                                <CheckCircle2 className="shrink-0 text-green-500 mt-1" size={18} />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>

                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="flex flex-wrap gap-2 pt-6 border-t border-gray-100 dark:border-white/10"
                        >
                          {job.tags.map(tag => (
                            <span key={tag} className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
                              {tag}
                            </span>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Work;
