import React from 'react';

const Background = () => {
    return (
        <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-black">
            <img
                src="https://res.cloudinary.com/domogztsv/image/upload/v1766956559/20251229_024426_0000_mirmix.png"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* Base Darkening for Contrast */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Top and Bottom Shades for Navbar/Footer Legibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90" />

            {/* Radial Vignette to focus center */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />

            {/* Cyber Grid Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-125"></div>
            <div className="absolute inset-0"
                style={{
                    backgroundImage: 'linear-gradient(rgba(76, 201, 240, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(76, 201, 240, 0.05) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at 50% 50%, black 30%, transparent 80%)'
                }}
            />

            {/* Ambient Glows */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-indigo-900/30 via-transparent to-purple-900/30 pointer-events-none" />
        </div>
    );
};

export default Background;
