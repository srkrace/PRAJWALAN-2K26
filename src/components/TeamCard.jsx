import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TeamCard = ({ member, delay }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    // Default socials if missing
    const {
        linkedin = "https://linkedin.com",
        instagram = "https://instagram.com",
        email = "mailto:example@gmail.com"
    } = member.socials || {};

    // Handle flip logic
    const handleMouseEnter = () => setIsFlipped(true);
    const handleMouseLeave = () => setIsFlipped(false);
    const handleClick = () => setIsFlipped(!isFlipped);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-[350px] h-[400px] cursor-pointer perspective-1000"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            {/* Flip Inner Container */}
            <div
                className="relative w-full h-full transition-transform duration-700 transform-style-3d"
                style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
            >

                {/* --- FRONT SIDE --- */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                    {/* Frame with Rounded Corners */}
                    <div className="relative w-full h-full bg-[#111] border border-white/10 shadow-[0_0_20px_rgba(139,92,246,0.1)] overflow-hidden rounded-2xl">

                        {/* Image */}
                        <div className="w-full h-[85%] relative">
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-full h-full object-cover filter grayscale-[0.2]"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-80"></div>

                            {/* Neon Accents - Subtle */}
                            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-60"></div>
                            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-60"></div>
                        </div>

                        {/* Name Section */}
                        <div className="h-[15%] flex items-center justify-center bg-[#0a0a0a] border-t border-white/5 relative z-10">
                            <h3 className="text-xl md:text-2xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 tracking-wider">
                                {member.name}
                            </h3>
                        </div>

                        {/* Tech Details - Softened/Removed corner markers to match rounded style */}
                    </div>
                </div>

                {/* --- BACK SIDE --- */}
                <div
                    className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-black border border-violet-500/30 shadow-[0_0_30px_rgba(139,92,246,0.3)] flex flex-col items-center justify-center rounded-2xl"
                >
                    {/* Background Texture */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>

                    {/* Only Social Icons as requested */}
                    {/* Only Social Icons as requested */}
                    <div className="flex flex-col gap-8 relative z-10">
                        {/* Email */}
                        <motion.a
                            href={email}
                            whileHover={{ scale: 1.3, color: "rgba(139,92,246,1)" }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center text-white/80 transition-colors duration-300 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <i className="bi bi-envelope text-4xl"></i>
                        </motion.a>

                        {/* Instagram */}
                        <motion.a
                            href={instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.3, color: "rgba(236,72,153,1)" }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center text-white/80 transition-colors duration-300 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <i className="bi bi-instagram text-4xl"></i>
                        </motion.a>

                        {/* LinkedIn */}
                        <motion.a
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.3, color: "rgba(56,189,248,1)" }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center text-white/80 transition-colors duration-300 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <i className="bi bi-linkedin text-4xl"></i>
                        </motion.a>
                    </div>
                </div>

            </div>

            <style jsx>{`
                .perspective-1000 { perspective: 1000px; }
                .transform-style-3d { transform-style: preserve-3d; }
                .backface-hidden { backface-visibility: hidden; }
                .rotate-y-180 { transform: rotateY(180deg); }
                .rotate-y-0 { transform: rotateY(0deg); }

            `}</style>
        </motion.div>
    );
};

export default TeamCard;
