import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Loader from './components/Loader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import WorkProcess from './components/WorkProcess';
import Skills from './components/Skills';
import EducationAchievements from './components/EducationAchievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    if (loading) {
      lenis.stop();
    } else {
      lenis.start();
    }

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [loading]);

  return (
    <div className="bg-dark-bg min-h-screen text-white font-sans selection:bg-scarlet selection:text-white">
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <WorkProcess />
        <Skills />
        <EducationAchievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
