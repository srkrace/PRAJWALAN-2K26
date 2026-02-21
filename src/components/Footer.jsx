import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Footer = ({ setActiveView }) => {
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

    return (
        <footer className="w-full bg-[#050505] pt-12 pb-6 px-4 md:px-8 font-sans relative overflow-hidden">
            {/* Background Glow Effects */}
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-violet-900/20 blur-[120px] rounded-full pointer-events-none"></div>

            {/* Main Rounded Card Container */}
            <div className="relative z-10 bg-[#0a0a0a] w-full max-w-7xl mx-auto rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-14 border border-white/5 shadow-2xl overflow-hidden">

                {/* Inner Subtle Glow */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-50"></div>
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl"></div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">

                    {/* Brand Column (Span 4) */}
                    <div className="md:col-span-5 flex flex-col justify-between">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                                Prajwalan<span className="text-violet-500">.</span>
                            </h2>
                            <div className="space-y-4 text-gray-400 text-sm md:text-base font-light">
                                <a href="mailto:srkraceofficial@gmail.com" className="block hover:text-white transition-colors cursor-pointer">
                                    srkraceofficial@gmail.com
                                </a>
                                <p className="hover:text-white transition-colors cursor-pointer">+91 90309 06520</p>
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=SRKR+Engineering+College+Bhimavaram+AP"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block max-w-xs leading-relaxed mt-4 hover:text-white transition-colors"
                                >
                                    SRKR Engineering College,<br />
                                    Bhimavaram, AP
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links (Span 3) */}
                    <div className="md:col-span-3">
                        <h3 className="text-white font-medium text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-gray-500 text-sm font-medium">
                            <li>
                                <a href="#home" className="hover:text-violet-400 transition-colors duration-300 block transform hover:translate-x-1">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="hover:text-violet-400 transition-colors duration-300 block transform hover:translate-x-1">
                                    About
                                </a>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        setActiveView('team');
                                        window.scrollTo(0, 0);
                                    }}
                                    className="hover:text-violet-400 transition-colors duration-300 block transform hover:translate-x-1 text-left w-full"
                                >
                                    Team
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* CTA Join Us (Span 4) */}
                    <div className="md:col-span-4 flex flex-col">
                        <h3 className="text-white font-medium text-lg mb-4">Join Us!</h3>
                        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                            Be a part of the biggest tech fest. We are excited to see you there!
                        </p>

                        <div
                            className="group relative inline-flex items-center justify-between bg-gray-800 text-gray-400 pl-5 pr-1 py-1 rounded-full w-full max-w-[240px] shadow-[0_0_10px_rgba(255,255,255,0.05)] transition-all duration-300 overflow-visible cursor-not-allowed opacity-80"
                        >
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-red-900/90 border border-red-500/50 text-red-200 text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
                                Registrations Closed
                            </div>
                            <span className="font-semibold text-sm">Register Now</span>
                            <div className="bg-gray-900 text-gray-500 p-2.5 rounded-full relative z-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Separator */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent my-10"></div>

                {/* Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs md:text-sm">
                    <p>&copy; 2026 Prajwalan. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="https://www.instagram.com/srkr_ace?igsh=YmNlZGxhbnJicDg=" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-violet-600 hover:text-white transition-all duration-300 text-gray-400">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/association-of-computer-engineers-ace/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-violet-600 hover:text-white transition-all duration-300 text-gray-400">
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a href="mailto:srkraceofficial@gmail.com" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-violet-600 hover:text-white transition-all duration-300 text-gray-400">
                            <i className="bi bi-envelope-fill"></i>
                        </a>
                    </div>
                </div>
            </div>



        </footer>
    );
};

export default Footer;
