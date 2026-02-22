import React, { useState, useEffect } from 'react';

const Navbar = ({ setActiveView }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const FINALE_URL = 'https://finale.prajwalan-2k26.tech';
    const FINALE_DEADLINE = new Date('2026-02-27T00:00:00+05:30').getTime();

    const getTimeLeft = () => {
        const diff = FINALE_DEADLINE - Date.now();
        if (diff <= 0) return null;
        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff % 86400000) / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        return { d, h, m, s };
    };

    const [timeLeft, setTimeLeft] = useState(getTimeLeft);

    useEffect(() => {
        const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
        return () => clearInterval(interval);
    }, []);

    const finaleUnlocked = timeLeft === null;

    const navLinks = [
        // { name: 'Problem Statements', href: '#ps' },
        { name: 'Team', href: '#team' },
        { name: 'Timeline', href: '#timeline' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Finale', href: null, special: true },
    ];

    const handleNavClick = (link) => {
        setIsOpen(false);
        if (link.name === 'Team') {
            setActiveView('team');
            window.scrollTo(0, 0);
        } else if (link.name === 'Problem Statements') {
            setActiveView('ps');
            window.scrollTo(0, 0);
        } else if (link.name === 'Finale') {
            if (finaleUnlocked) {
                window.open(FINALE_URL, '_blank', 'noopener,noreferrer');
            }
        } else {
            setActiveView('home');
            setTimeout(() => {
                const element = document.querySelector(link.href);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <button
                    onClick={() => setActiveView('home')}
                    className="text-2xl font-black tracking-wider text-white glow-text font-orbitron flex items-center gap-2 focus:outline-none"
                >
                    <img
                        src="https://res.cloudinary.com/dve78jcz0/image/upload/v1767212207/text-1766844263522_xdekd5.png"
                        alt="Prajwalan Logo"
                        className="h-12 w-auto object-contain filter brightness-0 invert"
                    />
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => handleNavClick(link)}
                            className="text-sm uppercase tracking-widest text-gray-300 hover:text-white transition-colors duration-300 relative group font-orbitron font-bold"
                        >
                            {link.special ? (
                                <div className={`relative group ${finaleUnlocked ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                                    <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap bg-black/80 px-2 py-1 rounded border border-violet-500/30 backdrop-blur-sm z-30 pointer-events-none">
                                        {finaleUnlocked ? (
                                            <span className="text-[10px] font-bold tracking-widest text-green-300">VISIT FINALE →</span>
                                        ) : (
                                            <span className="text-[10px] font-bold tracking-widest text-violet-300">
                                                {timeLeft && timeLeft.d > 0 && `${timeLeft.d}d `}{timeLeft && String(timeLeft.h).padStart(2, '0')}:{timeLeft && String(timeLeft.m).padStart(2, '0')}:{timeLeft && String(timeLeft.s).padStart(2, '0')}
                                            </span>
                                        )}
                                    </span>
                                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-white via-violet-200 to-violet-400 font-black tracking-widest uppercase drop-shadow-[0_0_15px_rgba(167,139,250,0.8)] filter brightness-125 animate-pulse">
                                        {link.name}
                                    </span>

                                    {/* Thunder Bolts */}
                                    <svg className="absolute -top-6 -left-4 w-full h-[180%] w-[140%] pointer-events-none z-20 overflow-visible" xmlns="http://www.w3.org/2000/svg">
                                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                            <feMerge>
                                                <feMergeNode in="coloredBlur" />
                                                <feMergeNode in="SourceGraphic" />
                                            </feMerge>
                                        </filter>

                                        <path
                                            d="M10,0 L15,15 L5,15 L20,35"
                                            className="stroke-violet-300 fill-none opacity-0"
                                            strokeWidth="2"
                                            filter="url(#glow)"
                                            style={{ animation: "lightning-1 2s infinite" }}
                                        />
                                        <path
                                            d="M35,-5 L30,12 L40,12 L25,30"
                                            className="stroke-white fill-none opacity-0"
                                            strokeWidth="2"
                                            filter="url(#glow)"
                                            style={{ animation: "lightning-2 3s infinite 0.5s" }}
                                        />
                                        <path
                                            d="M50,5 L45,18 L55,18 L40,40"
                                            className="stroke-violet-400 fill-none opacity-0"
                                            strokeWidth="2"
                                            filter="url(#glow)"
                                            style={{ animation: "lightning-3 2.5s infinite 1.2s" }}
                                        />
                                    </svg>

                                    <style>{`
                                        @keyframes lightning-1 {
                                            0%, 90% { opacity: 0; stroke-dasharray: 0 100; }
                                            92% { opacity: 1; stroke-dasharray: 100 0; }
                                            94% { opacity: 0; }
                                            96% { opacity: 1; }
                                            100% { opacity: 0; }
                                        }
                                        @keyframes lightning-2 {
                                            0%, 85% { opacity: 0; stroke-dasharray: 0 100; }
                                            87% { opacity: 1; stroke-dasharray: 100 0; }
                                            89% { opacity: 0; }
                                            91% { opacity: 1; }
                                            100% { opacity: 0; }
                                        }
                                        @keyframes lightning-3 {
                                            0%, 92% { opacity: 0; stroke-dasharray: 0 100; }
                                            94% { opacity: 1; stroke-dasharray: 100 0; }
                                            96% { opacity: 0; }
                                            98% { opacity: 1; }
                                            100% { opacity: 0; }
                                        }
                                    `}</style>
                                </div>
                            ) : (
                                <>
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 shadow-[0_0_10px_#8b5cf6] transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
                                </>
                            )}
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-violet-500/20 p-4 mobile-nav-dropdown">
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleNavClick(link)}
                                className="text-gray-300 hover:text-white hover:text-violet-400 block px-4 py-2 text-center font-orbitron tracking-widest w-full"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
