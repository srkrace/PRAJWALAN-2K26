import React, { useState } from 'react';

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

    const navLinks = [
        { name: 'Team', href: '#team' },
        { name: 'Timeline', href: '#timeline' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'FAQ', href: '#faqs' },
    ];

    const handleNavClick = (link) => {
        setIsOpen(false);
        if (link.name === 'Gallery') {
            setActiveView('gallery');
            window.scrollTo(0, 0);
        } else if (link.name === 'Team') {
            setActiveView('team');
            window.scrollTo(0, 0);
        } else {
            setActiveView('home');
            // Allow time for view to switch before scrolling
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
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 shadow-[0_0_10px_#8b5cf6] transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
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
