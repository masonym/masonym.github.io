import React, { useState, useEffect, useRef } from 'react';
import styles from './Greetings.module.css';

const greetings = {
    French: "Bonjour",
    Japanese: "こんにちは",
    Spanish: "Hola",
    Korean: "안녕하세요",
    Italian: "Ciao",
    Persian: "سلام",
    Portuguese: "Olá",
    Chinese: "你好",
    Swahili: "Habari",
    Arabic: "مرحبا",
    Russian: "Здравствуйте",
    Hindi: "नमस्ते",
    Swedish: "Hej",
    Bengali: "হ্যালো",
    Greek: "Γεια σας",
    Turkish: "Merhaba",
    Polish: "Cześć",
    Vietnamese: "Xin chào",
    Thai: "สวัสดี",
    Hebrew: "שלום",
    Finnish: "Hei",
    Czech: "Ahoj",
    German: "Hallo",
    Hungarian: "Szia",
    Romanian: "Salut",
    Indonesian: "Halo",
    Tagalog: "Kamusta",
};

const roles = [
    "Software Engineer",
    "Full Stack Developer",
    "Problem Solver",
    "Tech Enthusiast"
];

const Greetings = () => {
    const [visibleGreetings, setVisibleGreetings] = useState([]);
    const containerRef = useRef(null);
    const [currentRole, setCurrentRole] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;

    // Typing effect
    useEffect(() => {
        const currentText = roles[currentRole];
        let timer;

        if (!isDeleting && text.length === currentText.length) {
            // Wait before starting to delete
            timer = setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && text.length === 0) {
            // When done deleting, move to next role
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
        } else {
            // Handle typing/deleting
            timer = setTimeout(() => {
                setText(prev => {
                    if (!isDeleting) {
                        return currentText.slice(0, prev.length + 1);
                    }
                    return currentText.slice(0, prev.length - 1);
                });
            }, isDeleting ? deletingSpeed : typingSpeed);
        }

        return () => clearTimeout(timer);
    }, [text, isDeleting, currentRole]);

    // Floating greetings effect
    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const greetingsList = Object.entries(greetings).filter(([lang]) => lang !== 'English');
        let timeouts = [];

        const addGreeting = (index) => {
            if (index >= greetingsList.length) return;

            const [lang, greeting] = greetingsList[index];
            const containerWidth = container.offsetWidth;
            const containerHeight = container.offsetHeight;
            const padding = 100; // Increased padding from edges

            // Calculate position relative to center
            const centerX = containerWidth / 2;
            const centerY = containerHeight / 2;
            
            // Generate random angle and distance from center
            const angle = Math.random() * Math.PI * 2;
            const minDistance = 200; // Minimum distance from center
            const maxDistance = Math.min(centerX, centerY) - padding;
            const distance = minDistance + Math.random() * (maxDistance - minDistance);
            
            // Calculate final position
            const randomX = centerX + Math.cos(angle) * distance;
            const randomY = centerY + Math.sin(angle) * distance;

            const newGreeting = {
                id: `${lang}-${Date.now()}`,
                lang,
                greeting,
                style: {
                    left: `${randomX}px`,
                    top: `${randomY}px`,
                    opacity: Math.random() * 0.3 + 0.7
                }
            };

            setVisibleGreetings(prev => [...prev, newGreeting]);

            // Schedule next greeting
            if (index < greetingsList.length - 1) {
                const timeout = setTimeout(() => {
                    addGreeting(index + 1);
                }, Math.random() * 300 + 200); // Slightly longer delays
                timeouts.push(timeout);
            }
        };

        // Start adding greetings
        addGreeting(0);

        // Cleanup function
        return () => {
            timeouts.forEach(timeout => clearTimeout(timeout));
            setVisibleGreetings([]);
        };
    }, []);

    return (
        <section className={styles.heroSection}>
            <div className={styles.content}>
                <h1 className={styles.mainTitle}>
                    Hi, I'm Mason<span className={styles.cursor}>|</span>
                </h1>
                <div className={styles.roleText}>
                    {text}<span className={styles.cursor}>|</span>
                </div>
                <div ref={containerRef} className={styles.greetingsContainer}>
                    {visibleGreetings.map((item) => (
                        <div
                            key={item.id}
                            className={styles.greetingItem}
                            style={item.style}
                        >
                            {item.greeting}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Greetings;
