import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onLoadingComplete }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Reduced loading time for faster initial load
        const timer = setTimeout(() => {
            setLoaded(true);
            setTimeout(() => {
                if (onLoadingComplete) onLoadingComplete();
            }, 500);
        }, 1500); // Reduced from 3500ms to 1500ms

        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    // Thunder Bolt Path Generator
    // A sharp, jagged path for the lightning
    const boltPath = "M15 0 L10 15 L25 15 L0 45 L10 25 L-5 25 L15 0";

    return (
        <AnimatePresence>
            {!loaded && (
                <motion.div
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
                    exit={{
                        opacity: 0,
                        filter: "blur(10px)",
                        transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                >
                    {/* 1. Deep Atmospheric Background */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(109,40,217,0.15)_0%,rgba(0,0,0,1)_70%)]"></div>

                    {/* 2. Ambient Particles from Bottom - Optimized */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute bg-violet-500 rounded-full opacity-0"
                                style={{
                                    width: Math.random() * 2 + "px",
                                    height: Math.random() * 2 + "px",
                                    left: Math.random() * 100 + "%",
                                    top: "100%",
                                }}
                                animate={{
                                    y: [0, -window.innerHeight],
                                    opacity: [0, 0.5, 0],
                                }}
                                transition={{
                                    duration: Math.random() * 2 + 3,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                    ease: "linear"
                                }}
                            />
                        ))}
                    </div>

                    {/* 3. Central Energy Core & Lightning */}
                    <div className="relative flex items-center justify-center w-64 h-64">

                        {/* Glow Burst (Pulse) */}
                        <motion.div
                            className="absolute w-32 h-32 bg-violet-600 rounded-full blur-[60px]"
                            animate={{
                                opacity: [0.3, 0.6, 0.3],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        {/* The Lightning Bolt Container */}
                        <div className="relative z-10 w-16 h-28 flex items-center justify-center">
                            <svg
                                viewBox="-10 0 40 45"
                                className="w-full h-full drop-shadow-[0_0_15px_rgba(139,92,246,0.8)]"
                                style={{ overflow: "visible" }}
                            >
                                {/* Glow Layer */}
                                <motion.path
                                    d={boltPath}
                                    fill="none"
                                    stroke="#8b5cf6"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{
                                        pathLength: [0, 1, 1, 0],
                                        opacity: [0, 1, 1, 0],
                                        fillOpacity: [0, 0, 1, 0] // Flash fill at peak
                                    }}
                                    transition={{
                                        duration: 2,
                                        times: [0, 0.1, 0.3, 1], // Fast strike, linger, fade
                                        repeat: Infinity,
                                        repeatDelay: 0.5,
                                        ease: "anticipate"
                                    }}
                                />
                                {/* Core White Hot Layer (The Strike) */}
                                <motion.path
                                    d={boltPath}
                                    fill="#ffffff"
                                    stroke="#ffffff"
                                    strokeWidth="0"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{
                                        duration: 2,
                                        times: [0.08, 0.1, 0.3], // Sharp flash match
                                        repeat: Infinity,
                                        repeatDelay: 0.5
                                    }}
                                />
                            </svg>
                        </div>
                    </div>

                    {/* 4. Text Indicator */}
                    <motion.div
                        className="mt-8 flex flex-col items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <h2 className="text-violet-200 text-sm md:text-base font-light tracking-[0.4em] uppercase font-sans">
                            Loading Power
                        </h2>
                        <motion.div
                            className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-24 mt-4"
                            animate={{ scaleX: [0, 1, 0], opacity: [0, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;