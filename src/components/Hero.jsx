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

// --- Missed Chance Popup Component ---
const MissedChancePopup = ({ isOpen, onClose }) => {
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
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Golden Sparkle Particles */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {Array.from({ length: 30 }).map((_, i) => (
                            <GoldenParticle key={i} delay={0} index={i} />
                        ))}
                    </div>

                    {/* Popup Card */}
                    <motion.div
                        className="relative z-10 w-[90%] max-w-md mx-4 rounded-3xl overflow-hidden"
                        initial={{ scale: 0.5, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 30 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25, delay: 0.1 }}
                    >
                        {/* Card Background with Glassmorphism */}
                        <div className="relative bg-gradient-to-b from-[#1a0a2e]/95 via-[#0d0520]/95 to-[#0a0118]/95 backdrop-blur-xl border border-violet-500/30 rounded-3xl p-8 md:p-10 shadow-[0_0_60px_rgba(139,92,246,0.3),0_0_120px_rgba(255,215,0,0.1)]">

                            {/* Inner glow */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none" />
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-violet-600/10 rounded-full blur-[60px] pointer-events-none" />

                            {/* Trophy/Emoji Section */}
                            <motion.div
                                className="flex flex-col items-center mb-6"
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                {/* Animated Emoji */}
                                <motion.div
                                    className="text-7xl md:text-8xl mb-4 select-none"
                                    animate={{
                                        y: [0, -12, 0],
                                        rotate: [0, -5, 5, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    🔒
                                </motion.div>

                                {/* Decorative line */}
                                <motion.div
                                    className="h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"
                                    initial={{ width: 0 }}
                                    animate={{ width: '80%' }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                />
                            </motion.div>

                            {/* Main Text */}
                            <motion.div
                                className="text-center mb-6"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            >
                                <h3 className="text-2xl md:text-3xl font-black font-orbitron tracking-wider mb-3">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]">
                                        You Missed a
                                    </span>
                                    <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 drop-shadow-[0_0_25px_rgba(255,165,0,0.6)]">
                                        Golden Chance!
                                    </span>
                                </h3>

                                <motion.div
                                    className="flex items-center justify-center gap-2 my-4"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
                                >
                                    <span className="text-xl">✨</span>
                                    <span className="text-amber-400/80 text-xs font-orbitron tracking-[0.3em] uppercase">
                                        Registrations Closed
                                    </span>
                                    <span className="text-xl">✨</span>
                                </motion.div>

                                <p className="text-gray-400 font-rajdhani text-base md:text-lg leading-relaxed max-w-sm mx-auto">
                                    Registrations for <span className="text-violet-300 font-semibold">PRAJWALAN 2K26</span> are now closed.
                                    Stay tuned for future events and don't miss the next opportunity!
                                </p>
                            </motion.div>

                            {/* Close Button */}
                            <motion.div
                                className="flex justify-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={onClose}
                                    className="px-8 py-3 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-orbitron font-bold tracking-widest uppercase text-sm shadow-[0_0_20px_rgba(139,92,246,0.4)] border border-violet-400/30 transition-all duration-300"
                                >
                                    Got It
                                </motion.button>
                            </motion.div>
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

    const handleFinaleClick = () => {
        window.open('https://finale.prajwalan.com', '_blank');
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
                            {/* ⚡ FINALE BUTTON — Navbar-style with Thunder Bolts */}
                            <motion.div
                                whileHover={{ scale: 1.08 }}
                                className="relative px-10 py-4 rounded-full border border-violet-500/50 bg-violet-900/20 backdrop-blur-md hover:bg-violet-900/40 font-orbitron font-bold tracking-widest uppercase transition-all min-w-[220px] shadow-[0_0_15px_rgba(139,92,246,0.2)] group overflow-visible cursor-not-allowed"
                            >
                                {/* Tooltip */}
                                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-widest text-violet-300 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap bg-black/80 px-2 py-1 rounded border border-violet-500/30 backdrop-blur-sm z-30 pointer-events-none">
                                    COMING SOON
                                </span>

                                {/* Glowing gradient text — same as navbar */}
                                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-white via-violet-200 to-violet-400 font-black tracking-widest uppercase drop-shadow-[0_0_15px_rgba(167,139,250,0.8)] filter brightness-125 animate-pulse">
                                    Finale
                                </span>

                                {/* Thunder Bolts SVG — same as navbar */}
                                <svg className="absolute -top-6 -left-2 h-[180%] w-[140%] pointer-events-none z-20 overflow-visible" xmlns="http://www.w3.org/2000/svg">
                                    <filter id="hero-glow" x="-20%" y="-20%" width="140%" height="140%">
                                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                    <path d="M10,0 L15,15 L5,15 L20,35" className="stroke-violet-300 fill-none opacity-0" strokeWidth="2" filter="url(#hero-glow)" style={{ animation: 'hero-lightning-1 2s infinite' }} />
                                    <path d="M35,-5 L30,12 L40,12 L25,30" className="stroke-white fill-none opacity-0" strokeWidth="2" filter="url(#hero-glow)" style={{ animation: 'hero-lightning-2 3s infinite 0.5s' }} />
                                    <path d="M50,5 L45,18 L55,18 L40,40" className="stroke-violet-400 fill-none opacity-0" strokeWidth="2" filter="url(#hero-glow)" style={{ animation: 'hero-lightning-3 2.5s infinite 1.2s' }} />
                                </svg>

                                <style>{`
                                    @keyframes hero-lightning-1 {
                                        0%, 90% { opacity: 0; stroke-dasharray: 0 100; }
                                        92% { opacity: 1; stroke-dasharray: 100 0; }
                                        94% { opacity: 0; }
                                        96% { opacity: 1; }
                                        100% { opacity: 0; }
                                    }
                                    @keyframes hero-lightning-2 {
                                        0%, 85% { opacity: 0; stroke-dasharray: 0 100; }
                                        87% { opacity: 1; stroke-dasharray: 100 0; }
                                        89% { opacity: 0; }
                                        91% { opacity: 1; }
                                        100% { opacity: 0; }
                                    }
                                    @keyframes hero-lightning-3 {
                                        0%, 92% { opacity: 0; stroke-dasharray: 0 100; }
                                        94% { opacity: 1; stroke-dasharray: 100 0; }
                                        96% { opacity: 0; }
                                        98% { opacity: 1; }
                                        100% { opacity: 0; }
                                    }
                                `}</style>
                            </motion.div>

                            {/* 🔓 REGISTER NOW BUTTON (Activated - Shows Popup) */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleRegisterClick}
                                className="px-10 py-4 rounded-full bg-gradient-to-r from-violet-700 to-purple-600 hover:from-violet-600 hover:to-purple-500 text-white font-orbitron font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all min-w-[220px] flex items-center justify-center gap-3 cursor-pointer group relative border border-violet-400/30"
                            >
                                Register Now
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}

            {/* Missed Chance Popup */}
            <MissedChancePopup
                isOpen={showMissedPopup}
                onClose={() => setShowMissedPopup(false)}
            />
        </section>
    );
};

export default Hero;