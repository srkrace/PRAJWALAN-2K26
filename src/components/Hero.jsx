import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

// Hero background - purple galaxy landscape
const heroBg = '/hero_bg_galaxy.jpg';

const Hero = ({ introPlayed, setIntroPlayed, setActiveView }) => {
    // Registration unlock timer (invisible - runs in background)
    const REGISTRATION_UNLOCK_DATE = new Date('2026-01-20T00:00:00+05:30').getTime();
    const [isRegistrationUnlocked, setIsRegistrationUnlocked] = useState(false);

    useEffect(() => {
        // Check if registration should be unlocked
        const checkRegistrationStatus = () => {
            const now = new Date().getTime();
            setIsRegistrationUnlocked(now >= REGISTRATION_UNLOCK_DATE);
        };

        // Initial check
        checkRegistrationStatus();

        // Update every second (timer runs silently in background)
        const interval = setInterval(checkRegistrationStatus, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleRegisterClick = () => {
        if (isRegistrationUnlocked) {
            window.open('https://unstop.com/p/prajwalan-2k26-sagi-rama-krishnam-raju-engineering-college-srkrec-bhimavaram-1619164?lb=', '_blank');
        }
    };

    // Parallax Motion Values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth physics for realistic feel
    const springConfig = { damping: 25, stiffness: 120 }; // Snappier spring
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

    /* --- VIDEO LOGIC DISABLED ---
    const [showVideo, setShowVideo] = React.useState(!introPlayed);

    const handleVideoEnd = () => {
        setShowVideo(false);
        setIntroPlayed(true);
    };
    ------------------------------ */

    return (
        <section
            id="home"
            className="h-screen flex items-center justify-center relative z-10 overflow-hidden bg-bg-dark"
            onMouseMove={handleMouseMove}
        >
            {/* Intro Video Overlay - COMMENTED OUT 
            <motion.div
                className="absolute inset-0 z-[5]"
                initial={{ opacity: 1 }}
                animate={{ opacity: showVideo ? 1 : 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{ pointerEvents: showVideo ? 'auto' : 'none' }}
            >
                {showVideo && (
                    <video
                        autoPlay
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        onEnded={handleVideoEnd}
                    >
                        <source src="https://res.cloudinary.com/dve78jcz0/video/upload/v1767213066/K_Violet_Thunderstorm_Animation_Video_m8m72x.mp4" type="video/mp4" />
                    </video>
                )}
            </motion.div>
            */}

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

                        {/* Buttons similar to Neurathon */}
                        <motion.div
                            variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
                            className="flex flex-col md:flex-row justify-center items-center gap-6"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-4 rounded-full border border-violet-500/50 bg-violet-900/20 backdrop-blur-md hover:bg-violet-900/40 text-violet-200 font-orbitron font-bold tracking-widest uppercase transition-all min-w-[220px] shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                                onClick={() => {
                                    setActiveView('brochure');
                                    window.scrollTo(0, 0);
                                }}
                            >
                                View Brochure
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="px-10 py-4 rounded-full bg-gradient-to-r from-gray-700 to-gray-600 text-gray-400 font-orbitron font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all min-w-[220px] flex items-center justify-center gap-3 cursor-not-allowed opacity-80 group relative"
                                disabled={true}
                            >
                                <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-red-900/80 border border-red-500/50 text-red-200 text-xs font-orbitron rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg backdrop-blur-sm">
                                    Registrations Closed
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                                </svg>
                                Register Now
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
        </section>
    );
};

export default Hero;