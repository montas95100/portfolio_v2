import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Text } from '@react-three/drei';
import { useRef, useMemo } from 'react';

const FloatingIcon = ({ position, color, symbol, speed }) => {
  const ref = useRef();
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += 0.01 * speed;
      ref.current.rotation.y += 0.015 * speed;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5} position={position}>
      <mesh ref={ref}>
        <octahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial color={color} wireframe transparent opacity={0.3} />
      </mesh>
    </Float>
  );
};

const Skills = () => {
  const { t, theme } = useApp();

  const skillCategories = [
    {
      title: "Frontend & Design",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Figma", "Responsive Design", "UI/UX", "Design Systems", "Template Customization", "CRO (Conversion Optimization)"]
    },
    {
      title: "Backend & database",
      skills: ["Node.js", "REST APIs", "Authentication (Basics)", "PowerShell (Automation)", "Hosting / Deployment", "Domain & DNS", "SSL/TLS", "Basic Security Hardening"]
    },
    {
      title: "IT & Helpdesk",
      skills: ["Microsoft 365", "Active Directory", "Windows Server", "Exchange Online", "GPO", "Device Provisioning","Group Policy (GPO)","International Support (FR/EN)","Asset / Inventory Management"]
    },
    {
      title: "Workflow & Tools",
      skills: ["Client Management", "Prospecting / Sales", "Requirements Gathering (Specs)", "Documentation / Runbooks", "Agile", "Meta Ads (Facebook/Instagram)", "Google Ads", "TikTok Ads", "Snapchat Ads", "Tracking (Pixels/Tags)"]
    }
  ];

  const particles = useMemo(() => Array.from({ length: 8 }, () => ({
    position: [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 5
    ],
    speed: 0.5 + Math.random(),
    color: Math.random() > 0.5 ? '#3b82f6' : '#facc15' // Blue or Yellow
  })), []);

  return (
    <section id="skills" className="py-20 relative overflow-hidden min-h-[600px]">
      
      {/* 3D Background */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 1]}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          
          {particles.map((p, i) => (
             <FloatingIcon key={i} {...p} />
          ))}

          {theme === 'dark' && <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />}
        </Canvas>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title backdrop-blur-sm py-2 rounded-xl"
        >
          {t.sections.skills}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-panel p-8 rounded-2xl border-t-4 border-blue-500 hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">{category.title}</h3>
            <motion.div 
              className="flex flex-wrap justify-center gap-3"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05
                  }
                }
              }}
            >
              {category.skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    show: { opacity: 1, scale: 1 }
                  }}
                  className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg shadow-sm border border-blue-200 dark:border-blue-700/30 font-bold text-sm text-blue-900 dark:text-blue-100 flex items-center gap-2 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors cursor-default will-change-transform"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  {skill}
                </motion.span>
              ))}
            </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
