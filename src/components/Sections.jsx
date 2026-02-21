import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import aboutBg from '../assets/about-bg.png';
import faqBg from '../assets/hero_bg_purple.jpg';
import quantumIcon from '../assets/quantum_domain.png';
import modulesFinalV2 from '../assets/modules_final_v2.png';

// Import Module Detail Images
import imgWebDev from '../assets/generated/module_web_dev_1767207732136.png';
import imgCyberSec from '../assets/generated/module_cyber_security_1767207752536.png';
import imgML from '../assets/generated/module_machine_learning_1767207769069.png';
import imgIoT from '../assets/generated/module_iot_1767207786926.png';
import imgWeb3 from '../assets/generated/module_web3_1767207806213.png';
import imgAppDev from '../assets/generated/module_app_dev_1767207823039.png';
import imgAgenticAI from '../assets/agentic_ai.png';

// --- Shared Animation Variants ---
const sectionVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

// --- Components ---

const Section = ({ id, title, children, className = "", ...props }) => (
    <section id={id} className={`w-full py-8 relative z-10 flex flex-col justify-center ${className} bg-bg-dark`} {...props}>
        <div className="container mx-auto px-6">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={sectionVariants}
            >
                <motion.div variants={itemVariants} className="flex items-center justify-center mb-16 relative">
                    <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-20">
                        <div className="w-64 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent blur-sm"></div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400 uppercase tracking-[0.1em] font-orbitron drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]">
                        {title}
                    </h2>
                </motion.div>
                {children}
            </motion.div>
        </div>
    </section>
);

export const About = ({ setActiveView }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const [isHovered, setIsHovered] = React.useState(false);

    const mouseX = useTransform(x, [0, window.innerWidth], [-40, 40]);
    const mouseY = useTransform(y, [0, window.innerHeight], [-40, 40]);

    const handleMouseMove = (event) => {
        x.set(event.clientX);
        y.set(event.clientY);
    };

    return (
        <div
            id="about"
            className="w-full py-8 relative z-10 flex flex-col justify-center items-center bg-bg-dark overflow-hidden group/section"
            onMouseMove={handleMouseMove}
        >
            {/* Background Image with Floating Effect and 360 Rotation */}
            <motion.div
                style={{ x: mouseX, y: mouseY }}
                className="absolute inset-0 w-[120%] h-[120%] -left-[10%] -top-[10%] z-0"
                animate={{
                    filter: isHovered ? "brightness(1.4) contrast(1.1)" : "brightness(0.6) contrast(1)",
                    scale: isHovered ? 1.05 : 1
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                {/* Rotating Lighting Overlay - 360 Animation */}
                <div className="absolute inset-0 z-10 opacity-30 mix-blend-overlay">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-[200%] h-[200%] -left-[50%] -top-[50%] bg-gradient-to-tr from-transparent via-violet-500/20 to-transparent"
                    />
                </div>

                {/* Additional Light Burst on Hover */}
                <motion.div
                    className="absolute inset-0 z-20 bg-gradient-to-b from-violet-500/20 via-transparent to-black pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                ></motion.div>

                <motion.div
                    className="w-full h-full"
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <img
                        src={aboutBg}
                        alt="About Background"
                        className="w-full h-full object-cover opacity-50 blur-[1px] transition-all duration-700 group-hover/section:opacity-70 group-hover/section:blur-0"
                    />
                </motion.div>

                {/* Ambient Darken/Lighten Pulse on Hover */}
                <div className="absolute inset-0 bg-black/60 group-hover/section:bg-black/40 transition-colors duration-700"></div>

                {/* Dynamic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-transparent to-bg-dark"></div>
            </motion.div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={sectionVariants}
                    className="flex items-center justify-center mb-24 mt-12"
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

                            <h2 className="relative z-10 text-2xl md:text-4xl font-medium text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-violet-200 to-violet-500 uppercase tracking-[0.1em] font-orbitron drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
                                ABOUT
                            </h2>
                        </div>

                        {/* Right Bracket */}
                        <svg width="40" height="80" viewBox="0 0 40 100" className="w-6 h-12 md:w-8 md:h-16 fill-none stroke-violet-400/80 stroke-[16] drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]">
                            <path d="M5 5 L35 50 L5 95" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </motion.div>

                {/* Main Content Card */}
                <div className="flex justify-center">
                    <motion.div
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full max-w-4xl glass-panel p-10 md:p-16 relative overflow-hidden group border border-violet-500/20 backdrop-blur-md bg-violet-900/5 transition-all duration-500"
                    >
                        {/* Inner circular glow - subtle constant pulse */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-[80px] animate-pulse"></div>

                        <div className="relative z-10 flex flex-col items-center text-center">
                            <h3 className="text-4xl md:text-6xl font-black mb-8 font-orbitron tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white via-violet-100 to-violet-900 drop-shadow-[0_0_25px_rgba(139,92,246,0.3)]">
                                PRAJWALAN
                            </h3>

                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-rajdhani max-w-3xl mb-12 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                Prajwalan is a technology-focused innovation marathon that brings together students and developers to solve real-world problems using modern engineering and artificial intelligence. Participants collaborate in teams to design, build, and prototype impactful solutions across domains such as AI, web development, data science, and emerging technologies. Guided by mentors and evaluated by experts, teams focus on practical, scalable, and user-centric systems rather than theoretical ideas.
                            </p>

                            <button
                                onClick={() => {
                                    setActiveView('poster');
                                    window.scrollTo(0, 0);
                                }}
                                className="relative inline-block px-10 py-3 bg-[#1a1033] border border-violet-500/50 hover:border-violet-400 text-violet-400 hover:text-white transition-all duration-300 font-orbitron tracking-widest text-sm uppercase group/btn overflow-hidden shadow-[0_0_20px_rgba(139,92,246,0.3)] cursor-pointer"
                            >
                                <span className="relative z-10">Know More</span>
                                <div className="absolute inset-0 bg-violet-600/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

// --- DOMAINS (Hidden) ---
export const Domains = () => (
    null
);

// --- GALLERY COMPONENT (UPDATED - 7 ITEMS, NO TEXT) ---
export const Gallery = () => {
    const [selectedId, setSelectedId] = React.useState(null);

    // Mouse Parallax Logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set(clientX / innerWidth - 0.5);
        mouseY.set(clientY / innerHeight - 0.5);
    };

    // Parallax Transforms
    const xHero = useTransform(mouseX, [-0.5, 0.5], [20, -20]);
    const yHero = useTransform(mouseY, [-0.5, 0.5], [20, -20]);

    // --- Image References ---
    // 1. Portrait/Vertical (UPDATED URL)
    const img1 = "https://res.cloudinary.com/dtvplbrns/image/upload/v1767776221/57e6171f-ce86-4bc8-a7df-63914934a78a_xnutui.jpg";
    // 2. Group/Landscape
    const img2 = "https://res.cloudinary.com/dtvplbrns/image/upload/v1767764240/WhatsApp_Image_2026-01-07_at_10.53.14_AM_1_doxayq.jpg";
    // 3. Wide Stage
    const img3 = "https://res.cloudinary.com/dtvplbrns/image/upload/v1767765391/IMG_20250218_094249_ekzplm.jpg";
    // 4. Lamps (Vertical)
    const img4 = "https://res.cloudinary.com/dtvplbrns/image/upload/v1767764330/WhatsApp_Image_2026-01-07_at_11.08.04_AM_jswcmj.jpg";
    // 5. New (Vertical/Crowd)
    const img5 = "https://res.cloudinary.com/dtvplbrns/image/upload/v1767766034/WhatsApp_Image_2026-01-07_at_11.08.03_AM_cdni0r.jpg";
    // 6. New (Vertical/Stage Side)
    const img6 = "https://res.cloudinary.com/dtvplbrns/image/upload/v1767766553/IMG_4422_zr9ge7.jpg";
    // 7. New (Wide/Hall)
    const img7 = "https://res.cloudinary.com/dtvplbrns/image/upload/v1767767510/Screenshot_20260107_115753_wopyzi.jpg";

    // --- Gallery Data (7 Distinct Items) ---
    const items = [
        // 1. Main Feature (Left Side - Big)
        {
            id: '1',
            img: img3,
            colSpan: 'md:col-span-8',
            rowSpan: 'md:row-span-2',
            height: 'h-[400px] md:h-[600px]'
        },
        // 2. Top Right
        {
            id: '2',
            img: img5,
            colSpan: 'md:col-span-4',
            rowSpan: 'md:row-span-1',
            height: 'h-[240px] md:h-[290px]'
        },
        // 3. Bottom Right
        {
            id: '3',
            img: img2,
            colSpan: 'md:col-span-4',
            rowSpan: 'md:row-span-1',
            height: 'h-[240px] md:h-[290px]'
        },
        // 4. Bottom Row 1 (Medium)
        {
            id: '4',
            img: img6,
            colSpan: 'md:col-span-4',
            rowSpan: 'md:row-span-1',
            height: 'h-[300px]'
        },
        // 5. Bottom Row 2 (Medium) - Lamps placed here (New Position)
        {
            id: '5',
            img: img4,
            colSpan: 'md:col-span-4',
            rowSpan: 'md:row-span-1',
            height: 'h-[300px]'
        },
        // 6. Bottom Row 3 (Medium)
        {
            id: '6',
            img: img1,
            colSpan: 'md:col-span-4',
            rowSpan: 'md:row-span-1',
            height: 'h-[300px]'
        },
        // 7. Full Width Feature Bottom
        {
            id: '7',
            img: img7,
            colSpan: 'md:col-span-12',
            rowSpan: 'md:row-span-2',
            height: 'h-[500px] md:h-[600px]'
        },
    ];

    return (
        <section id="gallery" className="relative w-full bg-[#050505] flex flex-col items-center justify-center pt-24 pb-32 px-4 md:px-12">

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16 relative z-10 px-4 mt-12"
            >
                <h2 className="text-4xl md:text-6xl font-dune text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 tracking-[0.1em] mb-4 drop-shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                    GALLERY
                </h2>
                <div className="h-[1px] w-20 bg-violet-600/50 mx-auto mt-6 shadow-[0_0_10px_#7c3aed]"></div>
            </motion.div>

            {/* BENTO GRID LAYOUT */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full max-w-[1400px] mx-auto">
                {items.map((item) => (
                    <motion.div
                        layoutId={`card-container-${item.id}`}
                        key={item.id}
                        onClick={() => setSelectedId(item.id)}
                        className={`relative group cursor-pointer overflow-hidden rounded-xl border border-white/5 bg-[#111] shadow-2xl ${item.colSpan} ${item.rowSpan} ${item.height}`}
                    >
                        <motion.div className="w-full h-full relative overflow-hidden">
                            {/* Image */}
                            <motion.img
                                layoutId={`card-image-${item.id}`}
                                src={item.img}
                                className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-105"
                            />

                            {/* Luxury Gold/Violet Border on Hover */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-violet-400/30 transition-colors duration-500 rounded-xl z-20"></div>

                            {/* Minimal Gradient Overlay (No Text) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Modal Lightbox */}
            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        layoutId={`card-container-${selectedId}`}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-md p-4"
                        onClick={() => setSelectedId(null)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.3 } }}
                    >
                        <button
                            className="absolute top-8 right-8 text-white/60 hover:text-white text-sm font-orbitron tracking-widest uppercase transition-colors z-50 border border-white/20 px-6 py-2 rounded-full bg-black/50"
                            onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                        >
                            Close [X]
                        </button>

                        <div
                            className="relative w-full max-w-6xl aspect-video bg-[#050505] rounded-xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.2)]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.img
                                layoutId={`card-image-${selectedId}`}
                                src={items.find(i => i.id === selectedId).img}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export const PastWinners = () => {
    // Data for winners
    const winners2k25 = [
        {
            place: 2,
            title: "House Stark",
            prize: "Silver",
            img: "/assets/winner_2k25_2nd.jpg",
            gradient: "from-cyan-500/20 to-blue-600/5",
            border: "border-cyan-500/30",
            text: "text-cyan-200"
        },
        {
            place: 1,
            title: "Neurons",
            prize: "Gold",
            img: "/assets/winner_2k25_1st.jpg",
            gradient: "from-amber-500/20 to-orange-600/5",
            border: "border-amber-500/40",
            text: "text-amber-200"
        },
        {
            place: 3,
            title: "Zenith Coder",
            prize: "Bronze",
            img: "/assets/winner_2k25_3rd.jpg",
            gradient: "from-rose-500/20 to-pink-600/5",
            border: "border-rose-500/30",
            text: "text-rose-200"
        }
    ];

    const winners2k24 = [
        {
            place: 2,
            title: "Vision Guardians",
            prize: "Silver",
            img: "/assets/winner_2k24_2nd.jpg",
            gradient: "from-cyan-500/20 to-blue-600/5",
            border: "border-cyan-500/30",
            text: "text-cyan-200"
        },
        {
            place: 1,
            title: "Cage Decoders",
            prize: "Gold",
            img: "/assets/winner_2k24_1st.jpg",
            gradient: "from-amber-500/20 to-orange-600/5",
            border: "border-amber-500/40",
            text: "text-amber-200"
        },
        {
            place: 3,
            title: "Code Bytes",
            prize: "Bronze",
            img: "/assets/winner_2k24_3rd.jpg",
            gradient: "from-rose-500/20 to-pink-600/5",
            border: "border-rose-500/30",
            text: "text-rose-200"
        }
    ];

    const WinnerCard = ({ winner, index }) => (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
            className={`relative rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent hover:from-violet-500/50 hover:to-violet-900/50 transition-all duration-300 w-full max-w-lg group`}
        >
            <div className={`relative h-[320px] w-full bg-[#111] rounded-2xl overflow-hidden flex flex-col border border-white/5 shadow-xl`}>

                {/* Image Section (Top 70%) */}
                <div className="relative h-[70%] w-full overflow-hidden">
                    <img
                        src={winner.img}
                        alt={winner.title}
                        className="w-full h-full object-cover object-[50%_20%] transition-transform duration-700 group-hover:scale-105 filter brightness-[0.9] group-hover:brightness-100"
                    />

                    {/* Gradient Overlay for Text Visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>
                </div>

                {/* Content Section (Bottom 30%) */}
                <div className="relative h-[30%] flex flex-col items-center justify-center px-6 bg-[#0a0a0a] z-10 group-hover:bg-[#111] transition-colors duration-300">
                    {/* Glow Line Top */}
                    <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r ${winner.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                    <h4 className="text-xl md:text-2xl font-bold font-orbitron text-white tracking-wide mb-1 text-center group-hover:text-violet-200 transition-colors truncate w-full">
                        {winner.title}
                    </h4>
                </div>
            </div>
        </motion.div>
    );

    return (
        <section id="past-winners" className="py-20 bg-[#05010d] relative overflow-hidden flex flex-col items-center">
            {/* Background Ambience */}
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] -z-0 pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-0 pointer-events-none"></div>

            {/* Header */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={sectionVariants}
                className="flex items-center justify-center mb-16 relative z-10 w-full"
            >
                <div className="flex items-center gap-2 md:gap-4">
                    <svg width="40" height="80" viewBox="0 0 40 100" className="w-6 h-12 md:w-8 md:h-16 fill-none stroke-violet-400/80 stroke-[16] drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]">
                        <path d="M35 5 L5 50 L35 95" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <div className="relative overflow-hidden pl-4 pr-2 md:pl-6 md:pr-4 py-2 border-x-2 border-violet-400/80 bg-transparent rounded-xl">
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

                        <h2 className="relative z-10 text-2xl md:text-5xl font-medium text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-violet-200 to-violet-500 uppercase tracking-[0.1em] font-orbitron drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
                            HALL OF LEGENDS
                        </h2>
                    </div>

                    <svg width="40" height="80" viewBox="0 0 40 100" className="w-6 h-12 md:w-8 md:h-16 fill-none stroke-violet-400/80 stroke-[16] drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]">
                        <path d="M5 5 L35 50 L5 95" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </motion.div>

            {/* 2K25 Winners Section */}
            <div className="container mx-auto px-6 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h3 className="text-3xl font-orbitron font-bold text-white tracking-widest inline-block border-b-2 border-violet-500/50 pb-2 drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]">
                        2K25 WINNERS
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {/* Render order: 2nd, 1st, 3rd to resemble a podium if 3 items, or just grid */}
                    <WinnerCard winner={winners2k25[1]} index={0} /> {/* Gold */}
                    <WinnerCard winner={winners2k25[0]} index={1} /> {/* Silver */}
                    <WinnerCard winner={winners2k25[2]} index={2} /> {/* Bronze */}
                </div>
            </div>

            {/* 2K24 Legends Section */}
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h3 className="text-3xl font-orbitron font-bold text-gray-300 tracking-widest inline-block border-b-2 border-white/20 pb-2">
                        2K24 LEGENDS
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    <WinnerCard winner={winners2k24[1]} index={0} /> {/* Gold */}
                    <WinnerCard winner={winners2k24[0]} index={1} /> {/* Silver */}
                    <WinnerCard winner={winners2k24[2]} index={2} /> {/* Bronze */}
                </div>
            </div>

        </section >
    );
};

// --- TIMELINE COMPONENT ---
export const Timeline = () => {
    const events = [
        {
            date: "20",
            month: "JAN",
            title: "REGISTRATION",
            subtitle: "INITIATION",
            details: ["Portal Opens", "Team Formation"],
            icon: "bi-person-plus-fill"
        },
        {
            date: "25",
            month: "JAN",
            title: "ROUND 1",
            subtitle: "IDEA SUBMISSION",
            details: ["PPT Upload", "Unstop Submission"],
            icon: "bi-lightbulb-fill"
        },
        {
            date: "01",
            month: "FEB",
            title: "ROUND 2",
            subtitle: "VIDEO PRESENTATION",
            details: ["Video Promotion", "LinkedIn Post"],
            icon: "bi-camera-video-fill"
        },
        {
            date: "16",
            month: "FEB",
            title: "ROUND 3",
            subtitle: "PPT REVIEW",
            details: ["Idea Presentation", "Evaluation"],
            icon: "bi-broadcast"
        },
        {
            date: "27",
            month: "FEB",
            title: "GRAND FINALE",
            subtitle: "HAVOC",
            details: ["24H Marathon", "Final Showdown"],
            icon: "bi-trophy-fill"
        }
    ];

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="timeline" ref={containerRef} className="py-8 relative z-10 overflow-hidden flex flex-col items-center bg-[#05010d]">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>

            {/* Header */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={sectionVariants}
                className="flex items-center justify-center mb-24 mt-12"
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

                        <h2 className="relative z-10 text-2xl md:text-4xl font-medium text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-violet-200 to-violet-500 uppercase tracking-[0.1em] font-orbitron drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
                            TIMELINE
                        </h2>
                    </div>

                    {/* Right Bracket */}
                    <svg width="40" height="80" viewBox="0 0 40 100" className="w-6 h-12 md:w-8 md:h-16 fill-none stroke-violet-400/80 stroke-[16] drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]">
                        <path d="M5 5 L35 50 L5 95" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </motion.div>

            {/* Vertical Rhombus Stack Layout */}
            <div className="w-full max-w-5xl px-4 relative flex flex-col items-center gap-24">

                {/* Scroll-Linked Vertical Line - Enhanced with Glow & Lightning */}
                <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-0">
                    {/* Outer Glow Layer 1 - Wide Soft Glow */}
                    <motion.div
                        className="absolute left-1/2 -translate-x-1/2 w-8 bg-violet-500/10 blur-xl origin-top"
                        style={{ scaleY, height: "100%" }}
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Outer Glow Layer 2 - Medium Glow */}
                    <motion.div
                        className="absolute left-1/2 -translate-x-1/2 w-4 bg-violet-400/20 blur-lg origin-top"
                        style={{ scaleY, height: "100%" }}
                        animate={{
                            opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                        }}
                    />

                    {/* Core Line with Electric Shimmer */}
                    <motion.div
                        className="absolute left-1/2 -translate-x-1/2 w-1 bg-violet-500/60 origin-top shadow-[0_0_30px_#8b5cf6,0_0_60px_#8b5cf6]"
                        style={{ scaleY, height: "100%" }}
                        animate={{
                            boxShadow: [
                                "0 0 30px #8b5cf6, 0 0 60px #8b5cf6",
                                "0 0 40px #a78bfa, 0 0 80px #a78bfa",
                                "0 0 30px #8b5cf6, 0 0 60px #8b5cf6"
                            ],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Lightning Flash Effect - Periodic */}
                    <motion.div
                        className="absolute left-1/2 -translate-x-1/2 w-2 bg-white origin-top"
                        style={{ scaleY, height: "100%" }}
                        animate={{
                            opacity: [0, 0, 0, 0.8, 0, 0, 0, 0],
                            scaleX: [1, 1, 1, 1.5, 1, 1, 1, 1]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            times: [0, 0.45, 0.48, 0.5, 0.52, 0.55, 0.6, 1]
                        }}
                    />
                </div>

                {events.map((event, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                        className={`relative z-10 flex items-center justify-center w-full gap-8 md:gap-20 ${idx % 2 === 0 ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse'}`}
                    >
                        {/* Central Rhombus Node (Date) */}
                        <motion.div
                            className="relative group flex-shrink-0 z-20"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            {/* Line Mask - Creates dark area behind rhombus */}
                            <div className="absolute inset-0 scale-150 bg-[#05010d] rounded-full z-[-1]"></div>

                            {/* Outer Glow Ring */}
                            <div className="absolute inset-0 bg-violet-500 blur-2xl opacity-20 group-hover:opacity-60 transition-opacity duration-500"></div>

                            {/* Rhombus Container */}
                            <div className="w-24 h-24 bg-black/80 backdrop-blur-sm border-2 border-violet-500 rotate-45 flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.2)] group-hover:border-white/50 transition-colors duration-300">
                                {/* Inner Content (Un-rotated) */}
                                <div className="-rotate-45 text-center">
                                    <span className="block text-2xl font-black text-white font-orbitron leading-none drop-shadow-md">{event.date}</span>
                                    <span className="block text-xs font-bold text-violet-400 font-orbitron tracking-widest mt-1">{event.month}</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Connection Line (Hoz) */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className={`hidden md:block absolute top-1/2 ${idx % 2 === 0 ? 'left-1/2 origin-left' : 'right-1/2 origin-right'} w-[calc(50%-5rem)] h-[1px] bg-gradient-to-r from-violet-500 to-transparent z-0`}
                        ></motion.div>

                        {/* Content Card */}
                        <motion.div
                            className={`w-full md:w-[40%] flex flex-col ${idx % 2 === 0 ? 'md:text-left items-center md:items-start' : 'md:text-right items-center md:items-end'}`}
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {/* Line Mask Behind Card */}
                            <div className="absolute inset-0 scale-110 bg-[#05010d] z-[-1] rounded-lg"></div>

                            <div
                                className="group/card relative p-6 bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:bg-violet-900/20 hover:border-violet-400/50 clip-path-polygon w-full shadow-lg"
                                style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)" }}
                            >
                                <h3 className="text-2xl font-black font-orbitron text-white mb-1 uppercase tracking-wider group-hover/card:text-violet-300 transition-colors">
                                    {event.title}
                                </h3>
                                <p className="text-violet-500 font-bold font-orbitron tracking-[0.2em] mb-4 uppercase text-xs">
                                    {event.subtitle}
                                </p>

                                <ul className={`flex flex-col gap-1 text-gray-300 font-orbitron text-sm ${idx % 2 === 0 ? 'items-center md:items-start' : 'items-center md:items-end'}`}>
                                    {event.details.map((detail, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            {idx % 2 !== 0 && <i className="bi bi-caret-left-fill text-violet-500 text-xs"></i>}
                                            {detail}
                                            {idx % 2 === 0 && <i className="bi bi-caret-right-fill text-violet-500 text-xs"></i>}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                    </motion.div>
                ))}
            </div>
        </section>
    );
};

// --- PRIZES COMPONENT ---
export const Prizes = () => {
    const bounties = [
        {
            id: '01',
            rank: 'Runner Up',
            amount: '20,000',
            currency: 'INR',
            color: 'text-cyan-400',
            bg: 'from-cyan-500/20 to-blue-500/5',
            border: 'border-cyan-500/40',
            glow: 'shadow-[0_0_30px_-5px_rgba(34,211,238,0.3)]',
            icon: "bi-shield-check",
            desc: "Outstanding execution and technical prowess."
        },
        {
            id: '00',
            rank: 'Champion',
            amount: '25,000',
            currency: 'INR',
            color: 'text-amber-400',
            bg: 'from-amber-500/20 to-orange-600/5',
            border: 'border-amber-500/50',
            glow: 'shadow-[0_0_50px_-5px_rgba(245,158,11,0.5)]',
            icon: "bi-trophy-fill",
            desc: "The ultimate innovation that redefines boundaries.",
            featured: true
        },
        {
            id: '02',
            rank: '2nd Runner Up',
            amount: '15,000',
            currency: 'INR',
            color: 'text-rose-400',
            bg: 'from-rose-500/20 to-pink-500/5',
            border: 'border-rose-500/40',
            glow: 'shadow-[0_0_30px_-5px_rgba(251,113,133,0.3)]',
            icon: "bi-award",
            desc: "Exceptional creativity and problem solving."
        }
    ];

    return (
        <section id="prizes" className="py-24 bg-bg-dark relative overflow-hidden flex flex-col items-center">

            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05),transparent_70%)] pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-900/10 blur-[100px] rounded-full pointer-events-none"></div>

            {/* Header */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={sectionVariants}
                className="flex items-center justify-center mb-24 relative z-10"
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

                        <h2 className="relative z-10 text-2xl md:text-5xl font-medium text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-violet-200 to-violet-500 uppercase tracking-[0.1em] font-orbitron drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
                            PRIZES
                        </h2>
                    </div>

                    {/* Right Bracket */}
                    <svg width="40" height="80" viewBox="0 0 40 100" className="w-6 h-12 md:w-8 md:h-16 fill-none stroke-violet-400/80 stroke-[16] drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]">
                        <path d="M5 5 L35 50 L5 95" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </motion.div>

            {/* Podium Grid */}
            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col md:flex-row items-center md:items-end justify-center gap-8 md:gap-6 min-h-[500px]">
                {bounties.map((bounty, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2, duration: 0.6, ease: "easeOut" }}
                        className={`
                            relative group w-full md:w-1/3 flex flex-col
                            ${bounty.featured ? 'md:mb-12 z-20 order-first md:order-none' : 'z-10'}
                        `}
                    >
                        {/* The Card */}
                        <div
                            className={`
                                relative overflow-hidden backdrop-blur-2xl transition-all duration-500
                                bg-gradient-to-b ${bounty.bg}
                                border ${bounty.border}
                                ${bounty.glow}
                                ${bounty.featured ? 'h-[420px] md:h-[500px]' : 'h-[350px] md:h-[400px]'}
                                rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-lg rounded-bl-lg
                                hover:scale-[1.02] hover:-translate-y-2
                            `}
                        >
                            {/* Inner Noise Texture */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>

                            {/* Top Light Glint */}
                            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50"></div>

                            {/* Content Wrapper */}
                            <div className="relative h-full flex flex-col items-center justify-between p-8 text-center z-10">

                                {/* Rank Icon/Text */}
                                <div className="flex flex-col items-center">
                                    <div className={`
                                        w-16 h-16 rounded-full flex items-center justify-center mb-4
                                        bg-black/30 border border-white/10 shadow-inner
                                        ${bounty.featured ? 'scale-125' : ''}
                                    `}>
                                        <i className={`${bounty.icon} ${bounty.color} text-2xl`}></i>
                                    </div>
                                    <h3 className={`font-orbitron font-bold uppercase tracking-widest ${bounty.featured ? 'text-2xl' : 'text-xl'} text-white`}>
                                        {bounty.rank}
                                    </h3>
                                </div>

                                {/* Unique Geometric Divider */}
                                <div className="w-full flex items-center gap-2 opacity-30 my-2">
                                    <div className="h-px bg-current flex-1"></div>
                                    <div className="w-2 h-2 rotate-45 border border-current"></div>
                                    <div className="h-px bg-current flex-1"></div>
                                </div>

                                {/* Prize Money */}
                                <div className="flex flex-col items-center">
                                    <span className={`block font-black font-orbitron ${bounty.color} tracking-tighter drop-shadow-lg ${bounty.featured ? 'text-5xl md:text-6xl' : 'text-4xl md:text-5xl'}`}>
                                        {bounty.amount}
                                    </span>
                                    <span className="text-white/40 font-bold tracking-[0.4em] text-[10px] mt-2 font-orbitron uppercase">
                                        {bounty.currency}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-gray-400 font-rajdhani text-sm leading-relaxed max-w-[80%] mt-4">
                                    {bounty.desc}
                                </p>
                            </div>

                            {/* Hover Interactive Glow */}
                            <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>

                        {/* Reflection/Shadow underneath */}
                        <div className={`
                            absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-4 
                            bg-gradient-to-r ${bounty.bg} blur-xl opacity-40 rounded-full
                        `}></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

// --- SPONSORS SECTION ---
export const Sponsors = () => {
    const sponsors = [
        {
            name: "Stikbook",
            url: "https://res.cloudinary.com/domogztsv/image/upload/v1770183307/ChatGPT_Image_Feb_4__2026__11_01_30_AM-removebg-preview_uxbli2.png",
            website: "https://www.stikbook.com/share/?contentId=8175&contentType=user"
        },
        {
            name: "BlackBucks",
            url: "https://res.cloudinary.com/domogztsv/image/upload/v1770183550/ChatGPT_Image_Feb_4_2026_11_03_00_AM_e2ovjc.png",
            website: "https://theblackbucks.com/"
        }
    ];

    return (
        <Section id="sponsors" className="pt-8 pb-16 bg-black relative overflow-hidden" title="">
            {/* Header */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={sectionVariants}
                className="flex items-center justify-center mb-16 relative z-10 w-full mt-12"
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

                        <h2 className="relative z-10 text-2xl md:text-4xl font-medium text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-violet-200 to-violet-500 uppercase tracking-[0.1em] font-orbitron drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
                            SPONSORS
                        </h2>
                    </div>

                    {/* Right Bracket */}
                    <svg width="40" height="80" viewBox="0 0 40 100" className="w-6 h-12 md:w-8 md:h-16 fill-none stroke-violet-400/80 stroke-[16] drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]">
                        <path d="M5 5 L35 50 L5 95" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </motion.div>

            {/* Static Sponsor Logos */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 relative z-10 px-6 py-8">
                {sponsors.map((sponsor, idx) => (
                    <motion.a
                        key={idx}
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                        whileHover={{
                            y: -15,
                            scale: 1.05,
                            transition: { duration: 0.3, ease: "easeOut" }
                        }}
                        className="flex items-center justify-center cursor-pointer group"
                    >
                        <img
                            src={sponsor.url}
                            alt={sponsor.name}
                            className="h-48 md:h-64 w-auto object-contain drop-shadow-[0_0_20px_rgba(139,92,246,0.3)] group-hover:drop-shadow-[0_0_40px_rgba(139,92,246,0.8)] transition-all duration-300 group-hover:brightness-110"
                        />
                    </motion.a>
                ))}
            </div>

            {/* Background elements */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-violet-900/5 to-transparent pointer-events-none"></div>
        </Section>
    );
};

// --- HOLOGRAPHIC TERMINAL FAQ ---
export const FAQs = () => {
    const [openIndex, setOpenIndex] = React.useState(null);

    // Parallax Motion Values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 120 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    const translateX = useTransform(xSpring, [-0.5, 0.5], ["40px", "-40px"]);
    const translateY = useTransform(ySpring, [-0.5, 0.5], ["40px", "-40px"]);

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();

        const xPos = ((clientX - left) / width) - 0.5;
        const yPos = ((clientY - top) / height) - 0.5;

        x.set(xPos);
        y.set(yPos);
    };

    const questions = [
        { q: "WHAT IS PRAJWALAN 2026?", a: "Prajwalan is a national-level technical symposium hosted by SRKR Engineering College." },
        { q: "WHO CAN PARTICIPATE?", a: "Students from any engineering or degree college with a valid ID card." },
        { q: "HOW DO I REGISTER?", a: "Registration is available through our official portal. Early bird offers are live." },
        { q: "IS IT AN INDIVIDUAL OR TEAM EVENT?", a: "Both individual and team events are available depending on the specific challenge." },
        { q: "WILL THERE BE PRIZES?", a: "Yes, cash prizes and certificates will be awarded to top performers in all categories." }
    ];

    return (
        <section
            id="faqs"
            className="w-full flex flex-col justify-start pt-32 pb-32 bg-bg-dark relative overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Parallax Background */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    src={faqBg}
                    alt="FAQ Background"
                    className="w-full h-full object-cover"
                    style={{
                        x: translateX,
                        y: translateY,
                        scale: 1.1
                    }}
                />
                {/* Darker overlay for better text contrast matching reference */}
                <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90"></div>
            </div>

            <motion.div variants={itemVariants} className="text-center mb-12 relative z-10 px-4">
                <h2 className="text-4xl md:text-6xl font-dune text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 tracking-[0.1em] mb-4 drop-shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                    F A Q
                </h2>
                <p className="text-violet-200 font-rajdhani tracking-[0.2em] text-xs md:text-sm max-w-lg mx-auto opacity-80 leading-relaxed">
                    Find answers to the most common questions about Prajwalan 2026.
                </p>
                <div className="h-[1px] w-20 bg-violet-600/50 mx-auto mt-6 shadow-[0_0_10px_#7c3aed]"></div>
            </motion.div>

            <div className="max-w-3xl mx-auto px-6 relative z-10 flex flex-col gap-4">
                {questions.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={false}
                        animate={{ backgroundColor: openIndex === idx ? "rgba(139, 92, 246, 0.08)" : "transparent" }}
                        className="border-b border-violet-500/20 overflow-hidden transition-all duration-300"
                    >
                        {/* Header */}
                        <button
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            className="w-full flex items-center justify-between py-4 text-left group hover:bg-violet-500/5 px-4 rounded-lg transition-colors"
                        >
                            <span className={`font-rajdhani font-bold tracking-wider text-sm md:text-base transition-colors uppercase pr-8 ${openIndex === idx ? 'text-white' : 'text-white/90 group-hover:text-white'}`}>
                                {item.q}
                            </span>
                            <motion.i
                                animate={{ rotate: openIndex === idx ? 180 : 0 }}
                                className={`bi bi-chevron-down text-base flex-shrink-0 transition-colors ${openIndex === idx ? 'text-violet-400' : 'text-violet-500/50 group-hover:text-violet-400'}`}
                            ></motion.i>
                        </button>

                        {/* Expanded Content */}
                        <AnimatePresence initial={false}>
                            {openIndex === idx && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="pb-4 px-4">
                                        <p className="text-gray-300 font-rajdhani text-base tracking-wide leading-relaxed pl-4 border-l-2 border-violet-500/30 ml-2">
                                            {item.a}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
// --- MODULES COMPONENT (Redesigned) ---
export const Modules = () => {
    // Parallax Motion Values (Hero-style)
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 120 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    // Map normalized -0.5 to 0.5 input to pixel movement
    const bgX = useTransform(xSpring, [-0.5, 0.5], ["-40px", "40px"]);
    const bgY = useTransform(ySpring, [-0.5, 0.5], ["-40px", "40px"]);

    // Map input to 3D rotation
    const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
    const rotateX = useTransform(ySpring, [-0.5, 0.5], ["15deg", "-15deg"]);

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { width, height } = currentTarget.getBoundingClientRect();
        const xPos = (clientX / width) - 0.5;
        const yPos = (clientY / height) - 0.5;
        x.set(xPos);
        y.set(yPos);
    };

    // Dotted Ring Component
    const DottedRing = ({ size = 60, color = "#a855f7" }) => (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* The Main Dotted Ring */}
            <circle
                cx="50" cy="50" r="38"
                stroke={color}
                strokeWidth="6"
                strokeDasharray="12 12"
                strokeLinecap="round"
                className="opacity-80"
            />
            {/* The Thin Outer Boundary */}
            <circle
                cx="50" cy="50" r="49"
                stroke={color}
                strokeWidth="0.5"
                className="opacity-50"
            />
        </svg>
    );

    // Modules Data with "Organic" Positioning
    const modules = [
        {
            id: 1,
            title: "Web Development",
            desc: "Challenge yourself to build scalable, responsive, and user-centric web applications that solve real-world problems. Utilize modern frameworks and cloud technologies to create seamless digital experiences that define the future of the internet.",
            top: "calc(15% - 20px)",
            left: "calc(20% + 140px)",
            delay: 0,
            pos: 'bottom',
            img: imgWebDev
        },
        {
            id: 2,
            title: "Cyber Security",
            desc: "Dive into the world of network defense, ethical hacking, and vulnerability assessment to secure critical digital infrastructure. Develop robust solutions that protect user data, prevent cyber threats, and ensure privacy in an increasingly connected world.",
            top: "calc(25% + 140px)",
            left: "calc(65% - 65px)",
            delay: 2,
            pos: 'left',
            img: imgCyberSec
        },
        {
            id: 3,
            title: "Machine Learning",
            desc: "Harness the power of data to build intelligent systems capable of predictive modeling, natural language processing, and computer vision. Create algorithms that learn from experience, automate complex tasks, and uncover hidden patterns to drive innovation.",
            top: "calc(28% + 340px)",
            left: "calc(42% - 70px)",
            delay: 4,
            pos: 'top',
            img: imgML
        },
        {
            id: 4,
            title: "IoT Systems",
            desc: "Bridge the gap between the physical and digital worlds by creating smart, interconnected devices and systems. Design efficient embedded solutions that collect data, automate processes, and improve quality of life through intelligent automation and connectivity.",
            top: "calc(70% - 180px)",
            left: "calc(12% - 170px)",
            delay: 1,
            img: imgIoT
        },
        {
            id: 5,
            title: "Web3 & Blockchain",
            desc: "Explore the frontiers of decentralized technology by building transparent, secure, and immutable applications. Develop smart contracts and decentralized apps (DApps) that redefine trust, finance, and digital ownership in the next generation of the web.",
            top: "calc(80% - 450px)",
            left: "calc(48% + 500px)",
            delay: 3,
            pos: 'bottom',
            img: imgWeb3
        },
        {
            id: 6,
            title: "App Development",
            desc: "Craft intuitive and high-performance mobile applications that deliver exceptional user experiences across various platforms. Focus on mobile-first design, efficient functionality, and seamless integration to solve problems on the go.",
            top: "calc(55% + 108px)",
            left: "calc(82% + 55px)",
            delay: 5,
            pos: 'top',
            img: imgAppDev
        },
        {
            id: 7,
            title: "Quantum Computing",
            desc: "Unlock the ultimate computational power with Quantum technology. Explore qubits, superposition, and entanglement to solve problems complexity beyond the reach of classical computers.",
            top: "calc(45% + 20px)",
            left: "calc(20% - 20px)",
            delay: 6,
            img: quantumIcon
        },
        {
            id: 8,
            title: "Agentic AI",
            desc: "Build autonomous AI agents capable of reasoning, planning, and executing complex multi-step tasks without human intervention. Design intelligent systems that can adapt, learn from feedback, and collaborate with other agents to solve sophisticated real-world challenges.",
            top: "calc(60% + 80px)",
            left: "calc(50% + 120px)",
            delay: 7,
            pos: 'left',
            img: imgAgenticAI
        },
    ];

    return (
        <Section
            id="modules"
            title=""
            className="bg-[#050210] relative overflow-hidden py-8 min-h-[900px]"
            onMouseMove={handleMouseMove}
        >

            {/* Background Image - New Final V2 - Shifted down for Header Space */}
            <div className="absolute top-[220px] left-0 right-0 bottom-0 z-0 overflow-hidden" style={{ perspective: "1000px" }}>
                <motion.div
                    className="absolute inset-x-0 inset-y-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${modulesFinalV2})`,
                        backgroundPosition: 'center -50px',
                        x: bgX,
                        y: bgY,
                        rotateX: rotateX,
                        rotateY: rotateY,
                        scale: 1.15 // Slightly Increased scale to avoid edge clipping during rotation
                    }}
                />
                {/* Minimal Overlay */}
                <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>

                {/* Cinematic Vignette Borders (Reference Match) */}
                <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black via-black/60 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/60 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 left-0 w-40 bg-gradient-to-r from-black via-black/60 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 right-0 w-40 bg-gradient-to-l from-black via-black/60 to-transparent z-10 pointer-events-none"></div>
            </div>

            <div className="flex flex-col items-center w-full max-w-7xl mx-auto px-4 relative z-10 h-full">

                {/* Header: < MODULES > (Neon & Glowing) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={sectionVariants}
                    className="flex items-center justify-center mb-24 mt-12"
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

                            <h2 className="relative z-10 text-2xl md:text-4xl font-medium text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-violet-200 to-violet-500 uppercase tracking-[0.1em] font-orbitron drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
                                DOMAINS
                            </h2>
                        </div>

                        {/* Right Bracket */}
                        <svg width="40" height="80" viewBox="0 0 40 100" className="w-6 h-12 md:w-8 md:h-16 fill-none stroke-violet-400/80 stroke-[16] drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]">
                            <path d="M5 5 L35 50 L5 95" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </motion.div>

                {/* Organic Dotted Map (Desktop Only) */}
                <div className="hidden md:block relative w-full h-[600px] md:h-[700px]">
                    {modules.map((mod) => (
                        <motion.div
                            key={mod.id}
                            className="absolute group"
                            style={{ top: mod.top, left: mod.left }}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: mod.id * 0.1 }}
                        >
                            {/* Interactive Container */}
                            <div className="relative flex flex-col items-center justify-center cursor-pointer">

                                {/* Rotating Dotted Ring */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10 + mod.delay, repeat: Infinity, ease: "linear" }}
                                    className="group-hover:pause-animation" // Pause is complex in framer, simpler to slow down or use CSS
                                    style={{ transformOrigin: "center" }}
                                >
                                    <div className="transition-all duration-500 group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_#22d3ee]">
                                        <DottedRing color="#a855f7" size={55} />
                                    </div>
                                </motion.div>

                                {/* Center Core Hook with Thin Boundary */}
                                <div className="absolute w-4 h-4 rounded-full border border-violet-300/50 z-10"></div>
                                <div className="absolute w-2 h-2 bg-violet-300 rounded-full shadow-[0_0_10px_#a78bfa] z-20 transition-all duration-300 group-hover:bg-white group-hover:scale-150"></div>

                                {/* Domain Name Label - Always Visible */}
                                <div className="absolute top-16 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none z-40">
                                    <motion.div
                                        className="px-3 py-1.5 bg-black/90 border border-violet-500/60 rounded-md backdrop-blur-sm transition-all duration-300 group-hover:border-amber-400 group-hover:bg-black shadow-[0_0_15px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_20px_rgba(251,191,36,0.4)]"
                                        initial={{ opacity: 0, y: -5 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: mod.id * 0.1 + 0.3 }}
                                    >
                                        <p className="text-xs font-orbitron font-bold text-white text-center transition-all duration-300 group-hover:text-amber-400">
                                            {mod.title}
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Styles for CSS Pause */}
                                <style>{`
                                    .group:hover .group-hover\\:pause-animation {
                                        animation-play-state: paused;
                                    }
                                `}</style>

                                {/* --- Domain Card (Glassmorphic Reveal) --- */}
                                <div className={`absolute w-72 opacity-0 invisible transition-all duration-500 ease-out z-50
                                    ${mod.pos === 'bottom'
                                        ? 'top-16 left-1/2 -translate-x-1/2 translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-6'
                                        : mod.pos === 'top'
                                            ? 'bottom-16 left-1/2 -translate-x-1/2 -translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:-translate-y-6'
                                            : mod.pos === 'left'
                                                ? 'right-14 top-1/2 -translate-y-1/2 -translate-x-4 group-hover:opacity-100 group-hover:visible group-hover:-translate-x-6'
                                                : 'left-14 top-1/2 -translate-y-1/2 translate-x-4 group-hover:opacity-100 group-hover:visible group-hover:translate-x-6'
                                    }`}
                                >
                                    <div className="relative bg-[#0F0A1F]/95 backdrop-blur-xl border border-white/10 group-hover:border-violet-500 transition-colors duration-300 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col">

                                        {/* Top Image Section */}
                                        <div className="h-32 w-full relative overflow-hidden group/image">
                                            {/* Domain Image */}
                                            <img
                                                src={mod.img}
                                                alt={mod.title}
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
                                            />
                                            {/* Gradient Overlay for Text Readability/Atmosphere */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0A1F] via-transparent to-transparent opacity-80"></div>

                                            {/* Grid Overlay */}
                                            <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 mixed-blend-overlay"></div>
                                        </div>

                                        {/* Bottom Content Section */}
                                        <div className="p-4 flex flex-col justify-center border-t border-white/5 relative">
                                            {/* Title */}
                                            <h3 className="text-lg font-bold font-orbitron text-amber-400 mb-2 tracking-wide">
                                                {mod.title}
                                            </h3>
                                            <p className="text-xs text-violet-300 font-sans leading-relaxed mb-3 text-left tracking-wide">
                                                {mod.desc}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Connectivity UI Line: Changes based on Position */}
                                    {mod.pos === 'bottom' ? (
                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[1px] h-6 bg-gradient-to-b from-cyan-400 to-transparent"></div>
                                    ) : mod.pos === 'top' ? (
                                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[1px] h-6 bg-gradient-to-t from-cyan-400 to-transparent"></div>
                                    ) : mod.pos === 'left' ? (
                                        <div className="absolute top-1/2 -right-6 w-6 h-[1px] bg-gradient-to-l from-cyan-400 to-transparent"></div>
                                    ) : (
                                        <div className="absolute top-1/2 -left-6 w-6 h-[1px] bg-gradient-to-r from-cyan-400 to-transparent"></div>
                                    )}
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* --- MOBILE LAYOUT (Grid) --- */}
                <div className="grid grid-cols-1 gap-6 md:hidden w-full relative z-20 pb-12 px-4">
                    {modules.map((mod) => (
                        <motion.div
                            key={mod.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: mod.id * 0.1 }}
                            className="w-full"
                        >
                            <div className="relative bg-[#0F0A1F]/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-lg h-full max-h-[420px]">
                                {/* Image Header */}
                                <div className="h-36 w-full relative overflow-hidden flex-shrink-0">
                                    <img
                                        src={mod.img}
                                        alt={mod.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0A1F] to-transparent opacity-90"></div>
                                </div>

                                {/* Content */}
                                <div className="p-5 relative -mt-6 flex flex-col">
                                    <div className="absolute -top-8 right-5 w-12 h-12 bg-black rounded-full border border-violet-500/50 flex items-center justify-center shadow-[0_0_15px_#a78bfa]">
                                        <i className="bi bi-cpu text-violet-300"></i>
                                    </div>

                                    <h3 className="text-lg font-bold font-orbitron text-amber-400 mb-2 tracking-wide">
                                        {mod.title}
                                    </h3>
                                    <p className="text-xs text-violet-300 font-sans leading-relaxed line-clamp-6 tracking-wide overflow-hidden">
                                        {mod.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </Section>
    );
};