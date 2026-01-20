import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Placeholder images for Group/Body photos
// In a real scenario, these would be the group photos from the user
const slides = [
    {
        id: 1,
        img: "https://res.cloudinary.com/dtvplbrns/image/upload/v1767782865/sbm_cv1ul4.jpg",
        title: "Senior  Body  Members"
    },
    {
        id: 2,
        img: "https://res.cloudinary.com/dtvplbrns/image/upload/v1767782560/IMG-20250905-WA0120_hbe9cy.jpg",
        title: "Executive  Body  Members"
    },

];

const AceBody = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = slides.length - 1;
            if (nextIndex >= slides.length) nextIndex = 0;
            return nextIndex;
        });
    };

    // Auto-scroll logic
    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(timer);
    }, [currentIndex]); // Reset timer on user interaction/change

    const sectionVariants = {
        hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 }
        }
    };

    return (
        <section className="relative w-full pb-32 pt-12 bg-[#020005] overflow-hidden flex flex-col items-center justify-center">

            {/* Header */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={sectionVariants}
                className="flex items-center justify-center mb-12 relative z-10 text-center mt-12"
            >
                <div className="flex items-center gap-2 md:gap-4">
                    {/* Left Bracket */}
                    <svg width="40" height="80" viewBox="0 0 40 100" className="w-6 h-12 md:w-8 md:h-16 fill-none stroke-violet-400/80 stroke-[16] drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]">
                        <path d="M35 5 L5 50 L35 95" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <div className="relative overflow-hidden pl-4 pr-2 md:pl-6 md:pr-4 py-2 border-x-2 border-violet-400/80 bg-transparent rounded-xl">
                        {/* Shine Effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-400/30 to-transparent skew-x-12"
                            initial={{ x: "-100%" }}
                            animate={{ x: "200%" }}
                            transition={{
                                repeat: Infinity,
                                duration: 3,
                                ease: "linear",
                                repeatDelay: 0
                            }}
                        />

                        <h2 className="relative z-10 text-xl md:text-3xl font-medium text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-violet-200 to-violet-500 uppercase tracking-[0.1em] font-orbitron drop-shadow-[0_0_25px_rgba(139,92,246,0.5)] whitespace-nowrap">
                            ACE BODY MEMBERS
                        </h2>
                    </div>

                    {/* Right Bracket */}
                    <svg width="40" height="80" viewBox="0 0 40 100" className="w-6 h-12 md:w-8 md:h-16 fill-none stroke-violet-400/80 stroke-[16] drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]">
                        <path d="M5 5 L35 50 L5 95" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </motion.div>

            {/* Slider Container */}
            <div className="relative w-full max-w-5xl px-4 md:px-0 aspect-video flex items-center justify-center">

                {/* Navigation Buttons */}
                <button
                    className="absolute left-4 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all hover:scale-110 focus:outline-none"
                    onClick={() => paginate(-1)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6 drop-shadow-md">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>

                <button
                    className="absolute right-4 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all hover:scale-110 focus:outline-none"
                    onClick={() => paginate(1)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6 drop-shadow-md">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>

                {/* Slide Viewport */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-violet-500/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);

                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            className="absolute inset-0 bg-cover bg-center"
                        >
                            <img
                                src={slides[currentIndex].img}
                                alt={slides[currentIndex].title}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>



        </section>
    );
};

export default AceBody;
