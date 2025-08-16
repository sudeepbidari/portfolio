import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
// import Index from "./components/Index";

function App() {
  return (
    
    <div className="relative min-h-screen overflow-hidden scroll-smooth">
      {/* SVG Gradient Background (positioned behind everything) */}
      <svg
        className="absolute inset-0 w-full h-full -z-20"
        preserveAspectRatio="none"
        viewBox="0 0 1200 800"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="g1" cx="20%" cy="15%">
            <stop offset="0%" stopColor="#fef3ff" />
            <stop offset="100%" stopColor="#f0abfc" stopOpacity="0.35" />
          </radialGradient>
          <radialGradient id="g2" cx="80%" cy="25%">
            <stop offset="0%" stopColor="#eef2ff" />
            <stop offset="100%" stopColor="#c7d2fe" stopOpacity="0.35" />
          </radialGradient>
          <radialGradient id="g3" cx="85%" cy="85%">
            <stop offset="0%" stopColor="#fff1f2" />
            <stop offset="100%" stopColor="#fecaca" stopOpacity="0.30" />
          </radialGradient>
          <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="60" />
          </filter>
        </defs>

        <circle cx="220" cy="140" r="220" fill="url(#g1)" filter="url(#blur)" />
        <circle cx="980" cy="180" r="260" fill="url(#g2)" filter="url(#blur)" />
        <circle cx="1060" cy="660" r="260" fill="url(#g3)" filter="url(#blur)" />
        <circle cx="220" cy="560" r="160" fill="url(#g2)" filter="url(#blur)" />
      </svg>

      {/* Glassmorphism full-screen overlay for subtle whitening + blur */}
      <div className="absolute inset-0 -z-10 bg-white/30 dark:bg-white/10 backdrop-blur-sm" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-24">

        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />

      </div>
      </div>
  );
}

export default App;
