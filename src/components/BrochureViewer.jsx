import React from 'react';
import { motion } from 'framer-motion';

const BrochureViewer = () => {
    return (
        <section className="min-h-screen pt-24 pb-12 px-4 md:px-8">
            <div className="container mx-auto max-w-5xl">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white font-orbitron mb-4">
                        Prajwalan <span className="text-violet-400">2K26</span>
                    </h1>
                    <p className="text-gray-400 font-rajdhani text-lg">Event Brochure</p>
                </motion.div>

                {/* Brochure Images - Stacked Vertically */}
                <div className="space-y-8">
                    {/* Front Page */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.3)] border border-violet-500/20"
                    >
                        <img
                            src="https://res.cloudinary.com/domogztsv/image/upload/v1769364346/PRAJWALAN_---2K26_front.jpg_rr7062.jpg"
                            alt="Prajwalan 2K26 Brochure - Front"
                            className="w-full h-auto"
                            loading="lazy"
                        />
                        <div className="absolute top-4 left-4 bg-violet-600/90 backdrop-blur-sm px-4 py-2 rounded-full text-white font-orbitron text-sm font-bold">
                            Front
                        </div>
                    </motion.div>

                    {/* Back Page */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.3)] border border-violet-500/20"
                    >
                        <img
                            src="https://res.cloudinary.com/domogztsv/image/upload/v1769364401/PRAJWALAN_--2K26_final_back.jpg_gqiddj.jpg"
                            alt="Prajwalan 2K26 Brochure - Back"
                            className="w-full h-auto"
                            loading="lazy"
                        />
                        <div className="absolute top-4 left-4 bg-purple-600/90 backdrop-blur-sm px-4 py-2 rounded-full text-white font-orbitron text-sm font-bold">
                            Back
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BrochureViewer;
