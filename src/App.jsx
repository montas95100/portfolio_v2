import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen relative selection:bg-yellow-accent/30 selection:text-white">
        {/* Ambient Background */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-[100px] animate-float" />
          <div className="absolute top-[40%] -right-[10%] w-[50%] h-[60%] rounded-full bg-yellow-400/10 dark:bg-yellow-400/5 blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <Navbar />
        
        <main className="container mx-auto px-6 pt-32 pb-20 space-y-32">
          <Hero />
          <Work />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </AppProvider>
  );
}

export default App;
