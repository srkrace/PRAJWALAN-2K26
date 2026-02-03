import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import TeamCard from './TeamCard';
import aakashImg from '../assets/aakash_tech_final.jpg';
import abhiImg from '../assets/abhi_marketing_v3.png';
import mounikaImg from '../assets/mounika_tech.jpg';
import charanImg from '../assets/charan_tech.png';
import madhuImg from '../assets/madhu_design_v4.png';
import prapurnaImg from '../assets/prapurna_design_v2.jpg';
import satyaImg from '../assets/satya_design_v2.png';
import meghanaImg from '../assets/meghana_design_v3.png';
import deepakImg from '../assets/deepak_design_v2.png';
import manasaImg from '../assets/manasa_art.png';
import hasiniImg from '../assets/hasini_art.png';
import ramyaImg from '../assets/ramya_art.png';
import amruthaImg from '../assets/amrutha_marketing.jpg';
import amithImg from '../assets/amith_marketing.png';
import bhargaviImg from '../assets/bhargavi_marketing.png';
import chaitanyaImg from '../assets/chaitanya_marketing.png';
import hemanthImg from '../assets/hemanth_marketing.png';
import niharikaImg from '../assets/niharika_marketing.png';
import ganaImg from '../assets/gana_marketing.png';
import rishikImg from '../assets/rishik_marketing.jpg';
import deepakChiefImg from '../assets/deepak_chief.png';
import venkatChiefImg from '../assets/venkat_chief.png';
import anushaChiefImg from '../assets/anusha_chief.png';
import lokeshChiefImg from '../assets/lokesh_chief.png';

const Team = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // All team members sorted alphabetically by first name
    const allMembers = [
        // A
        {
            id: 5,
            name: "Aakash",
            img: aakashImg,
            socials: { linkedin: "https://www.linkedin.com/in/venkata-aakash-179415288/", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" }
        },
        { id: 'm3', name: "Abhi", img: abhiImg, socials: { linkedin: "https://www.linkedin.com/company/association-of-computer-engineers-ace/", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" } },
        { id: 'm2', name: "Amith", img: amithImg, socials: { linkedin: "https://www.linkedin.com/company/association-of-computer-engineers-ace/", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" } },
        { id: 'm1', name: "Amrutha", img: amruthaImg, socials: { linkedin: "https://www.linkedin.com/company/association-of-computer-engineers-ace/", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" } },
        {
            id: 'c3',
            name: "Anusha",
            img: anushaChiefImg,
            socials: { linkedin: "https://www.linkedin.com/company/association-of-computer-engineers-ace/", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" }
        },
        // B
        { id: 'm4', name: "Bhargavi", img: bhargaviImg, socials: { linkedin: "https://www.linkedin.com/in/bhargavi-alluri-048704295", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" } },
        // C
        { id: 'm5', name: "Chaitanya", img: chaitanyaImg, socials: { linkedin: "https://www.linkedin.com/in/chaitu930?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" } },
        {
            id: 6,
            name: "Charan",
            img: charanImg,
            socials: { linkedin: "https://www.linkedin.com/in/sri-ram-charan-nalla-bb2a5a2b9", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" }
        },
        // D
        {
            id: 'c1',
            name: "Deepak",
            img: deepakChiefImg,
            socials: { linkedin: "https://www.linkedin.com/in/deepak-thota-49004a27b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" }
        },
        { id: 'd5', name: "Deepak Vardhan", img: deepakImg, socials: { linkedin: "https://www.linkedin.com/company/association-of-computer-engineers-ace/", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" } },
        // G
        { id: 'm9', name: "Gana", img: ganaImg, socials: { linkedin: "https://www.linkedin.com/in/sri-sri-gana-kurma-63ab4929b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" } },
        // H
        { id: 'a3', name: "Hasini", img: hasiniImg, socials: { linkedin: "https://www.linkedin.com/company/association-of-computer-engineers-ace/", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" } },
        { id: 'm6', name: "Hemanth", img: hemanthImg, socials: { linkedin: "https://www.linkedin.com/in/bolla-hemanth-7926812b9", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" } },
        // L
        {
            id: 'c4',
            name: "Lokesh Gandhi",
            img: lokeshChiefImg,
            socials: { linkedin: "https://www.linkedin.com/in/lokesh-gandhi-modalavalasa-9a69a5292/", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" }
        },
        // M
        { id: 'd1', name: "Madhu", img: madhuImg, socials: { linkedin: "https://www.linkedin.com/company/association-of-computer-engineers-ace/", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" } },
        { id: 'a2', name: "Manasa", img: manasaImg, socials: { linkedin: "https://www.linkedin.com/in/manasa-kolli-a5743b28a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" } },
        { id: 'd4', name: "Meghana", img: meghanaImg, socials: { linkedin: "https://www.linkedin.com/company/association-of-computer-engineers-ace/", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" } },
        {
            id: 7,
            name: "Mounika",
            img: mounikaImg,
            socials: { linkedin: "https://www.linkedin.com/in/mounika-korrakuti?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" }
        },
        // N
        { id: 'm7', name: "Niharika", img: niharikaImg, socials: { linkedin: "https://www.linkedin.com/company/association-of-computer-engineers-ace/", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" } },
        // P
        { id: 'd2', name: "Prapurna", img: prapurnaImg, socials: { linkedin: "https://www.linkedin.com/in/prapurna-dandakadiyala-7741b52bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" } },
        // R
        { id: 'a4', name: "Ramya", img: ramyaImg, socials: { linkedin: "https://www.linkedin.com/in/ramyamusulla", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" } },
        { id: 'm8', name: "Rishik", img: rishikImg, socials: { linkedin: "https://www.linkedin.com/company/association-of-computer-engineers-ace/", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" } },
        // S
        { id: 'd3', name: "Satya", img: satyaImg, socials: { linkedin: "https://www.linkedin.com/company/association-of-computer-engineers-ace/", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" } },
        { id: 'a1', name: "Suneetha", img: "https://res.cloudinary.com/dtvplbrns/image/upload/v1767783114/Gemini_Generated_Image_td2a3ltd2a3ltd2a_imtlox.png", socials: { linkedin: "https://www.linkedin.com/in/suneetha-vemagiri-8018042ab/", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" } },
        // V
        {
            id: 'c2',
            name: "Venkat Sai",
            img: venkatChiefImg,
            socials: { linkedin: "https://www.linkedin.com/company/association-of-computer-engineers-ace/", instagram: "https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=", email: "mailto:srkraceofficial@gmail.com" }
        },
    ];

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
        <section className="min-h-screen w-full pt-12 pb-32 relative bg-[#050505] overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-40 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/20 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Single unified header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={sectionVariants}
                    className="flex items-center justify-center mb-16 relative z-10 w-full mt-12"
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
                                transition={{ repeat: Infinity, duration: 3, ease: "linear", repeatDelay: 0 }}
                            />
                            <h2 className="relative z-10 text-xl sm:text-2xl md:text-5xl font-medium text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-violet-200 to-violet-500 uppercase tracking-[0.1em] font-orbitron drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
                                EXECUTIVE BODY MEMBERS
                            </h2>
                        </div>

                        <svg width="40" height="80" viewBox="0 0 40 100" className="w-6 h-12 md:w-8 md:h-16 fill-none stroke-violet-400/80 stroke-[16] drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]">
                            <path d="M5 5 L35 50 L5 95" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </motion.div>

                {/* Unified grid with improved mobile responsiveness */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 justify-items-center max-w-[1600px] mx-auto">
                    {allMembers.map((member, index) => (
                        <TeamCard key={member.id} member={member} delay={index * 0.05} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
