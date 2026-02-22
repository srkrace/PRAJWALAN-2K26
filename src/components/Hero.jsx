import React, { useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';

// Hero background - purple galaxy landscape
const heroBg = '/hero_bg_galaxy.jpg';

// --- Golden Sparkle Particle Component ---
const GoldenParticle = ({ delay, index }) => {
    const randomX = Math.random() * 100;
    const randomDuration = 2 + Math.random() * 3;
    const randomSize = 4 + Math.random() * 8;
    const randomDelay = delay + Math.random() * 1.5;

    return (
        <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
                left: `${randomX}%`,
                width: randomSize,
                height: randomSize,
                background: index % 3 === 0
                    ? 'radial-gradient(circle, #ffd700, #ffaa00)'
                    : index % 3 === 1
                        ? 'radial-gradient(circle, #fff4cc, #ffd700)'
                        : 'radial-gradient(circle, #ff9900, #cc7700)',
                boxShadow: `0 0 ${randomSize * 2}px ${index % 2 === 0 ? '#ffd700' : '#ffaa00'}`,
            }}
            initial={{ y: '100%', opacity: 0, scale: 0 }}
            animate={{
                y: '-100vh',
                opacity: [0, 1, 1, 0],
                scale: [0, 1.2, 0.8, 0],
                rotate: [0, 180, 360],
            }}
            transition={{
                duration: randomDuration,
                delay: randomDelay,
                ease: 'easeOut',
                repeat: Infinity,
                repeatDelay: Math.random() * 2,
            }}
        />
    );
};

// --- Missed Chance Popup (full-screen modal, auto-dismisses in 3s) ---
const MissedChancePopup = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (!isOpen) return;
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[200] flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/75 backdrop-blur-md"
                        onClick={onClose}
                    />

                    {/* Card */}
                    <motion.div
                        className="relative z-10 w-[90%] max-w-sm mx-4"
                        initial={{ scale: 0.7, opacity: 0, y: 40 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.85, opacity: 0, y: 20 }}
                        transition={{ type: 'spring', stiffness: 320, damping: 26, delay: 0.05 }}
                    >
                        <div className="relative bg-gradient-to-b from-[#1a0a2e]/95 via-[#0d0520]/95 to-[#0a0118]/95 backdrop-blur-xl border border-violet-500/30 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(139,92,246,0.35)]">

                            {/* Progress bar */}
                            <motion.div
                                className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-violet-500 to-amber-400"
                                initial={{ width: '100%' }}
                                animate={{ width: '0%' }}
                                transition={{ duration: 3, ease: 'linear' }}
                            />

                            <div className="p-8 flex flex-col items-center gap-5 text-center">
                                {/* Lock Icon */}
                                <div className="w-16 h-16 rounded-full bg-amber-500/15 border border-amber-400/30 flex items-center justify-center shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>

                                <div>
                                    <p className="text-lg font-black font-orbitron tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">Registrations Closed</p>
                                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">PRAJWALAN 2K26 registrations are now closed. Stay tuned for future events!</p>
                                </div>

                                {/* Close X */}
                                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const Hero = ({ introPlayed, setIntroPlayed, setActiveView }) => {
    const [showMissedPopup, setShowMissedPopup] = useState(false);

    // Parallax Motion Values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth physics for realistic feel
    const springConfig = { damping: 25, stiffness: 120 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    // INVERTED Translation: Mouse Right -> Image Left (Natural Depth)
    const translateX = useTransform(xSpring, [-0.5, 0.5], ["40px", "-40px"]);
    const translateY = useTransform(ySpring, [-0.5, 0.5], ["40px", "-40px"]);

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { width, height } = currentTarget.getBoundingClientRect();

        const xPos = (clientX / width) - 0.5;
        const yPos = (clientY / height) - 0.5;

        x.set(xPos);
        y.set(yPos);
    };

    const handleBrochureClick = () => {
        setActiveView('brochure');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleRegisterClick = () => {
        setShowMissedPopup(true);
    };

    return (
        <section
            id="home"
            className="h-screen flex items-center justify-center relative z-10 overflow-hidden bg-bg-dark"
            onMouseMove={handleMouseMove}
        >
            {/* Background Image (Parallax) - Always present underneath */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    src={heroBg}
                    alt="Hero Background"
                    loading="lazy"
                    className="w-full h-full object-cover"
                    style={{
                        scale: 1.1
                    }}
                />
                <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-bg-dark/90"></div>
            </div>

            <div className="container mx-auto px-6 relative z-20 pt-20">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.2 }
                            }
                        }}
                    >
                        {/* Top Tagline */}
                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="flex items-center justify-center gap-4 mb-6"
                        >
                            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-violet-500"></div>
                            <span className="text-violet-200 font-rajdhani tracking-[0.3em] uppercase text-sm md:text-base drop-shadow-md">
                                SRKR Engineering College
                            </span>
                            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-violet-500"></div>
                        </motion.div>

                        {/* Main Title - Neural Style */}
                        <div className="relative mb-8">
                            <motion.h1
                                className="text-[10vw] leading-none font-black font-orbitron tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-violet-100 to-violet-400 drop-shadow-[0_0_30px_rgba(139,92,246,0.3)] select-none"
                                variants={{
                                    hidden: { scale: 0.9, opacity: 0, filter: "blur(20px)" },
                                    visible: {
                                        scale: 1,
                                        opacity: 1,
                                        filter: "blur(0px)",
                                        transition: { duration: 1.5, ease: "circOut" }
                                    }
                                }}
                            >
                                PRAJWALAN
                            </motion.h1>

                            {/* Overlay/Glitch Effect */}
                            <motion.h1
                                className="absolute inset-0 text-[10vw] leading-none font-black font-orbitron tracking-tighter text-violet-500 mix-blend-overlay blur-[2px] opacity-50 select-none"
                                animate={{
                                    opacity: [0.3, 0.6, 0.3],
                                    x: [-2, 2, -2],
                                }}
                                transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
                            >
                                PRAJWALAN
                            </motion.h1>
                        </div>

                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="mb-12"
                        >
                            <span className="text-4xl md:text-5xl font-rajdhani font-bold text-white tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                                2K26
                            </span>
                        </motion.div>

                        {/* Buttons */}
                        <motion.div
                            variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
                            className="flex flex-col md:flex-row justify-center items-center gap-6"
                        >
                            {/* 📄 VIEW BROCHURE BUTTON */}
                            <motion.button
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleBrochureClick}
                                className="relative px-10 py-4 rounded-full border border-violet-500/50 bg-violet-900/20 backdrop-blur-md hover:bg-violet-900/40 font-orbitron font-bold tracking-widest uppercase transition-all min-w-[220px] shadow-[0_0_15px_rgba(139,92,246,0.2)] group overflow-visible cursor-pointer flex items-center justify-center gap-3"
                            >
                                {/* Glowing gradient text */}
                                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-white via-violet-200 to-violet-400 font-black tracking-widest uppercase drop-shadow-[0_0_15px_rgba(167,139,250,0.8)] filter brightness-125">
                                    View Brochure
                                </span>

                                {/* Subtle glow ring on hover */}
                                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_20px_rgba(139,92,246,0.3),0_0_30px_rgba(139,92,246,0.2)]" />
                            </motion.button>


                            {/* 🔓 REGISTER NOW BUTTON (Activated - Shows Popup) */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleRegisterClick}
                                className="px-10 py-4 rounded-full bg-gradient-to-r from-violet-700 to-purple-600 hover:from-violet-600 hover:to-purple-500 text-white font-orbitron font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all min-w-[220px] flex items-center justify-center gap-3 cursor-pointer group relative border border-violet-400/30"
                            >
                                Register Now
                            </motion.button>

                            {/* Missed Chance Popup */}
                            <MissedChancePopup
                                isOpen={showMissedPopup}
                                onClose={() => setShowMissedPopup(false)}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}




        </section>
    );
};

export default Hero;