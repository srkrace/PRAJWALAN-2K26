import React, { useState } from 'react';

const ProblemStatements = () => {
    const [expandedItems, setExpandedItems] = useState({});

    const toggleExpand = (level, index) => {
        const key = `${level}-${index}`;
        setExpandedItems(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const allProblems = [
        {
            title: "Smart Portfolio Builder (No-Code Website Generator)",
            description: "Build a web application that allows users to create professional portfolio websites without writing code. Users should be able to choose templates, add and edit sections such as About, Projects, Skills, and Contact. The platform must support live preview of changes and responsive layouts. Finally, users should be able to publish their portfolio with a shareable public link."
        },
        {
            title: "Event Registration + QR Ticketing Website",
            description: "Create a web platform where event organizers can publish and manage events online. Users should be able to register for events through a simple interface. Upon successful registration, a QR based digital ticket must be generated and sent to the user. The system should also provide a QR verification page for secure check-in."
        },
        {
            title: "Personal Expense Categorizer",
            description: "Develop a system that automatically classifies transaction descriptions into categories such as food, travel, shopping, and bills. The solution should allow users to define custom categories as well. It must learn from user corrections over time to improve accuracy. Provide visual spending analytics and summary reports for better financial insights."
        },
        {
            title: "Fitness Goal Tracker",
            description: "Build a mobile application that helps users set and track fitness goals effectively. Users should be able to log workouts, meals, and daily activities. Include features such as streaks, reminders, and achievement badges. Provide exportable weekly and monthly progress summaries."
        },
        {
            title: "Recipe Sharing Platform",
            description: "Develop a social platform where users can share recipes along with images and preparation steps. The system should allow users to rate recipes, save favorites, and follow creators. Include search and tagging functionality for easy discovery. Optionally integrate nutrition information and automatic shopping list generation."
        },
        {
            title: "Smart Plant Watering System",
            description: "Create an IoT-based system that monitors soil moisture levels using sensors. Based on moisture readings, the system should automatically control a water pump. Provide a mobile or web app to view real-time and historical moisture data. Users should receive alerts and be able to manually override watering when needed."
        },
        {
            title: "Password Strength Analyzer",
            description: "Develop a password analysis tool that evaluates password strength using entropy calculations. The system should detect common patterns and known leaked passwords using offline datasets. Provide real-time suggestions to improve password security. Support configurable password policies for organizations."
        },
        {
            title: "Cloud Cost Optimization Dashboard",
            description: "Create a dashboard that analyzes cloud infrastructure usage data. The system should identify idle, underutilized, or overprovisioned resources. Provide actionable recommendations with estimated monthly cost savings. Include alerts, tagging compliance checks, and usage visualizations."
        },
        {
            title: "Contact Center Knowledge Tool",
            description: "Design a web-based knowledge management system for contact center agents. The tool should use decision trees to guide agents through customer issue resolution. It must reduce average handling time and improve consistency of responses. Provide easy content updates and performance tracking."
        },
        {
            title: "Mental Wellness Journal",
            description: "Create a digital journaling application focused on mental well-being. Users should be able to log daily thoughts and track mood patterns over time. Include guided prompts and optional sentiment analysis. Ensure strong privacy controls, secure locking, and wellness reminders."
        },
        {
            title: "Simple Cryptocurrency Wallet",
            description: "Create a basic cryptocurrency wallet that allows users to generate a wallet address, view balance, send and receive tokens. The system should record all transactions on a blockchain ledger. Include transaction history and balance updates in real time."
        },
        {
            title: "AI-Based Resume Analyzer Web App",
            description: "Develop a web application that compares a candidate's resume with a given job description. The system should identify missing skills and keyword gaps. Generate a structured match report with percentage alignment scores. Provide personalized suggestions to improve resume relevance."
        },
        {
            title: "Collaborative Notes Platform with Real-Time Editing",
            description: "Build a collaborative note-taking web application supporting real-time multi-user editing. Users should see live cursor movements and edits instantly. The system must display online participants and maintain version history. Ensure data consistency and conflict resolution."
        },
        {
            title: "Predictive Maintenance System",
            description: "Create a predictive maintenance model using sensor data such as vibration, temperature, and pressure. The system should detect early signs of equipment failure. Provide remaining useful life estimates for assets. Generate maintenance scheduling recommendations to reduce downtime."
        },
        {
            title: "Fake News Detection Platform",
            description: "Develop a platform that evaluates the credibility of news articles. Analyze content for factual inconsistencies, emotional language, and bias indicators. Incorporate source reliability scoring mechanisms. Provide explainable outputs highlighting suspicious signals."
        },
        {
            title: "Sentiment Analysis for Product Reviews",
            description: "Create a sentiment analysis system that labels customer reviews as positive, negative, or neutral. The tool should also extract key aspects such as delivery, product quality, and pricing. Aggregate review sentiments to identify overall customer satisfaction trends. The system should help businesses make data-driven improvement decisions."
        },
        {
            title: "AR Navigation Application",
            description: "Build an augmented reality navigation application using a mobile device camera. Overlay directional arrows and contextual location labels on the real-world view. Support basic route guidance and points of interest. Include indoor and outdoor navigation modes as a prototype."
        },
        {
            title: "Collaborative Task Management System",
            description: "Develop a project and task management platform for teams. Support real-time collaboration, task dependencies, and role-based access. Include dashboards to visualize progress and workload distribution. Maintain activity logs, comments, and notifications."
        },
        {
            title: "Industrial Equipment Predictive Maintenance",
            description: "Create an IoT system that collects vibration and temperature data from industrial machines. Detect anomalies and predict maintenance requirements. Generate alerts before failures occur. Provide optimized maintenance scheduling suggestions."
        },
        {
            title: "Supply Chain Traceability Platform",
            description: "Develop a blockchain-based system to track product movement across the supply chain. Log checkpoints from origin to consumer in an immutable ledger. Allow consumers to scan QR codes to verify authenticity. Improve transparency and trust in supply chains."
        },
        {
            title: "Phishing Email Detector",
            description: "Build a browser extension or email plugin to detect phishing attempts. Analyze sender behavior, URLs, and email language patterns. Provide explainable warnings highlighting suspicious elements. Enable one-click reporting of malicious emails."
        },
        {
            title: "Auto-Scaling Web Application",
            description: "Develop a web application that automatically scales based on traffic demand. Use load balancing and auto-scaling groups to manage resources. Monitor performance metrics and scaling events. Display dashboards showing cost and performance impact."
        },
        {
            title: "AI Career Guidance Platform",
            description: "Create an AI-driven platform that provides personalized career recommendations. Analyze user skills, interests, and academic background. Incorporate real-time market trends and job demand data. Suggest learning paths and career opportunities."
        },
        {
            title: "Digital Certificate Verification System",
            description: "Build a blockchain-based platform for issuing tamper-proof educational certificates. Authorized institutions should be able to issue and revoke certificates securely. Each certificate must support QR-based public verification. The system should ensure transparency, authenticity, and long-term trust."
        },
        {
            title: "Multi-Tenant SaaS Admin Platform (Role-Based Access)",
            description: "Build a multi-tenant SaaS platform supporting multiple organizations. Each organization should have isolated data and role-based access control. Support roles such as Admin, Manager, and User. Ensure secure onboarding, auditing, and scalability."
        },
        {
            title: "Federated Learning Healthcare Network",
            description: "Develop a federated learning system for collaborative healthcare AI models. Hospitals should train models locally without sharing raw patient data. Implement secure aggregation and privacy-preserving updates. Support model versioning and performance tracking."
        },
        {
            title: "Self-Improving Agent Ecosystem",
            description: "Design an intelligent agent framework capable of self-evaluation. Agents should use feedback loops to improve their own performance. Enable automated tool creation and prompt optimization. Include safeguards to prevent unsafe or degrading behavior."
        },
        {
            title: "Cross-Platform Healthcare Ecosystem",
            description: "Build an integrated healthcare super-app combining multiple services. Include electronic health records, telemedicine, and e-prescriptions. Provide AI-powered symptom checking. Ensure secure access, audit logs, and role-based permissions."
        },
        {
            title: "Smart City Infrastructure Platform",
            description: "Develop a unified platform to manage smart city systems. Integrate lighting, traffic control, waste management, and emergency services. Provide centralized monitoring and analytics dashboards. Support alerts and role-based administrative access."
        },
        {
            title: "Cross-Chain Interoperability Bridge",
            description: "Create a secure prototype for transferring assets across blockchains. Implement validation, fraud detection, and replay protection. Include rate limiting and monitoring mechanisms. Ensure reliability and security of cross-chain transactions."
        },
        {
            title: "VQE for Drug Discovery",
            description: "Implement Variational Quantum Eigensolver workflows for molecular simulations. Estimate molecular ground state energies relevant to drug discovery. Integrate parameterized quantum circuits with classical optimizers. Provide evaluation pipelines for result analysis."
        },
        {
            title: "Mixed Reality Surgical Training Simulator",
            description: "Develop a mixed reality system for surgical training. Simulate realistic medical procedures and emergency scenarios. Provide performance scoring and feedback. Optionally integrate haptic feedback for realism."
        },
        {
            title: "Advanced Malware Analysis and Digital Forensics Platform",
            description: "Build an integrated malware analysis environment with sandbox execution. Monitor behavioral indicators and system changes. Provide reverse engineering and memory forensics tools. Generate automated threat intelligence reports."
        },
        {
            title: "Multi-Modal AI System for Accessibility",
            description: "Create an AI assistant for visually impaired users. Combine camera-based scene understanding with OCR and speech output. Detect obstacles and read printed text aloud. Enable real-time voice-based interaction."
        },
        {
            title: "Indigenous Cryptocurrency Investigation Tool",
            description: "Develop a forensic platform for tracing cryptocurrency transactions. Visualize fund flow graphs across multiple blockchains. Identify mixing patterns and suspicious activity clusters. Assist law enforcement with entity tagging and analysis."
        },
        {
            title: "Cloud-Native Digital Twin Platform",
            description: "Build a cloud-native digital twin system for industrial assets. Integrate real-time IoT data with physics-based simulations. Provide anomaly detection and predictive maintenance insights. Support optimization recommendations and dashboards."
        }
    ];

    const ProblemCard = ({ problem, level, index }) => {
        const key = `${level}-${index}`;
        const isExpanded = expandedItems[key];

        return (
            <div className="relative">
                <div className="relative border border-violet-500/20 bg-gradient-to-br from-violet-900/10 via-black/40 to-purple-900/10 backdrop-blur-sm overflow-hidden rounded-lg">
                    <button
                        onClick={() => toggleExpand(level, index)}
                        className="relative w-full px-6 py-5 flex items-center justify-between text-left"
                    >
                        <div className="flex items-center gap-4 flex-1">
                            <span className="text-violet-400 font-orbitron font-bold text-sm min-w-[2rem]">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <h4 className="text-gray-200 font-rajdhani text-lg font-medium">
                                {problem.title}
                            </h4>
                        </div>
                        <div className={`text-violet-400 flex-shrink-0 ml-4 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </button>

                    {isExpanded && (
                        <div className="overflow-hidden">
                            <div className="px-6 pb-5 pl-16 border-t border-violet-500/10">
                                <p className="text-gray-300 font-rajdhani leading-relaxed pt-4 text-base">
                                    {problem.description}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <section className="relative w-full min-h-screen bg-[#050505] pt-32 pb-20 px-4 md:px-12">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }}></div>

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

            <div className="container mx-auto relative z-10 max-w-6xl">
                {/* Enhanced Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 md:gap-4 mb-8">
                        {/* Left Bracket */}
                        <svg
                            width="40"
                            height="80"
                            viewBox="0 0 40 100"
                            className="w-6 h-12 md:w-8 md:h-16 fill-none stroke-violet-400/80 stroke-[16] drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]"
                        >
                            <path d="M35 5 L5 50 L35 95" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <div className="relative overflow-hidden pl-4 pr-2 md:pl-6 md:pr-4 py-2 border-x-2 border-violet-400/80 bg-transparent rounded-xl">
                            <h2 className="relative z-10 text-2xl md:text-5xl font-medium text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-violet-200 to-violet-500 uppercase tracking-[0.1em] font-orbitron drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
                                PROBLEM STATEMENTS
                            </h2>
                        </div>

                        {/* Right Bracket */}
                        <svg
                            width="40"
                            height="80"
                            viewBox="0 0 40 100"
                            className="w-6 h-12 md:w-8 md:h-16 fill-none stroke-violet-400/80 stroke-[16] drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]"
                        >
                            <path d="M5 5 L35 50 L5 95" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <p className="text-gray-300 text-lg font-rajdhani max-w-3xl mx-auto mb-8">
                        Explore our curated problem statements across three difficulty levels. Click on any problem to view its full description.
                    </p>
                </div>

                {/* All Problem Statements */}
                <div className="space-y-3">
                    {allProblems.map((problem, index) => (
                        <ProblemCard key={index} problem={problem} level="all" index={index} />
                    ))}
                </div>

                {/* Enhanced Google Drive Section */}
                <div className="mt-20 text-center">
                    <div className="relative glass-panel p-10 border border-violet-500/30 backdrop-blur-md bg-gradient-to-br from-violet-900/20 via-black/40 to-purple-900/20 overflow-hidden group">
                        <div className="relative z-10">
                            <h3 className="text-3xl font-orbitron font-bold text-violet-300 mb-4 tracking-wider drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                                NEED MORE DETAILS?
                            </h3>
                            <p className="text-gray-300 font-rajdhani text-lg mb-8 max-w-2xl mx-auto">
                                Access our complete problem statement repository with detailed specifications and requirements.
                            </p>
                            <a
                                href="https://drive.google.com/drive/folders/1qyrg7dWT4re_-w9_7yxb_agOk_zq0TND?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-orbitron text-sm tracking-wider shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_50px_rgba(139,92,246,0.6)] relative overflow-hidden"
                            >
                                <span className="relative text-2xl">📁</span>
                                <span className="relative">VIEW GOOGLE DRIVE</span>
                                <svg
                                    className="relative w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Note Section */}
                <div className="mt-10 text-center">
                    <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-900/30 via-purple-900/40 to-violet-900/30 border border-violet-500/20 backdrop-blur-sm">
                        <span className="text-2xl">💡</span>
                        <p className="text-violet-300 font-orbitron text-base tracking-wider">
                            <span className="font-bold">NOTE:</span> Own problem statements are also accepted! You can propose your innovative ideas.
                        </p>
                        <span className="text-xl">✨</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemStatements;
