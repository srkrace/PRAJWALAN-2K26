import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Team from './components/Team';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { About, Domains, Gallery, Timeline, Modules, PastWinners, Prizes, Sponsors, FAQs } from './components/Sections';
import AceBody from './components/AceBody';
import BrochureViewer from './components/BrochureViewer';
import PosterViewer from './components/PosterViewer';
import ProblemStatements from './components/ProblemStatements';

function App() {
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('home');
  const [introPlayed, setIntroPlayed] = useState(false);

  return (
    <>
      <Preloader onLoadingComplete={() => setLoading(false)} />

      {!loading && (
        <motion.div
          initial={{ opacity: 0, y: 0 }} // Keep y:0 to prevent layout shifts, handled by scale/filter
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative min-h-screen text-white selection:bg-cyan-500 selection:text-black"
        >
          <Background />
          <Navbar setActiveView={setView} />

          <main>
            {view === 'home' && (
              <>
                <Hero introPlayed={introPlayed} setIntroPlayed={setIntroPlayed} setActiveView={setView} />
                <About setActiveView={setView} />
                <Domains />
                <Timeline />
                <Modules />
                <PastWinners />
                <Prizes />
                <Sponsors />
                <AceBody />
                <FAQs />
              </>
            )}

            {/* Gallery section commented out
            {view === 'gallery' && (
              <Gallery />
            )}
            */}

            {view === 'team' && (
              <Team />
            )}

            {view === 'brochure' && (
              <BrochureViewer />
            )}

            {view === 'poster' && (
              <PosterViewer />
            )}

            {view === 'ps' && (
              <ProblemStatements />
            )}
          </main>

          <Footer setActiveView={setView} />
        </motion.div>
      )}
    </>
  );
}

export default App;
