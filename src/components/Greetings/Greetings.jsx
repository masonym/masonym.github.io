import React, { useState, useEffect, useRef } from 'react';
import styles from './Greetings.module.css';

const greetings = {
    French: "Bonjour",
    Japanese: "こんにちは", // Konnichiwa
    Spanish: "Hola",
    Korean: "안녕하세요", // Annyeonghaseyo
    Italian: "Ciao",
    Persian: "سلام", // Salaam
    Portuguese: "Olá",
    Chinese: "你好", // Nǐ hǎo
    Swahili: "Habari",
    Arabic: "مرحبا", // Marhaban
    Russian: "Здравствуйте", // Zdravstvuyte
    Hindi: "नमस्ते", // Namaste
    Swedish: "Hej",
    Bengali: "হ্যালো", // Hyālō
    Greek: "Γεια σας", // Geia sas
    Turkish: "Merhaba",
    Polish: "Cześć",
    Vietnamese: "Xin chào",
    Thai: "สวัสดี", // Sawatdi
    Hebrew: "שלום", // Shalom
    Finnish: "Hei",
    Czech: "Ahoj",
    German: "Hallo",
    Hungarian: "Szia",
    Romanian: "Salut",
    Indonesian: "Halo",
    Tagalog: "Kamusta",
};

const Greetings = () => {
    const [visibleGreetings, setVisibleGreetings] = useState([]);
    const [positions, setPositions] = useState({});
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const greetingsList = Object.entries(greetings).filter(([lang]) => lang !== 'English');
        let index = 0;

        const interval = setInterval(() => {
            if (index < greetingsList.length) {
                const [lang, greeting] = greetingsList[index];
                const containerWidth = container.offsetWidth;
                const containerHeight = container.offsetHeight;

                setVisibleGreetings(prev => [...prev, { lang, greeting }]);
                setPositions(prev => ({
                    ...prev,
                    [lang]: {
                        left: `${Math.random() * (containerWidth - 50)}px`,
                        top: `${Math.random() * (containerHeight - 50)}px`,
                    }
                }));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div ref={containerRef} style={{ width: '100%', height: '100vh', overflow: 'hidden', position: 'relative' }}>
            <div style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '3.6em',
                fontWeight: 'bold'
            }}>
                Hello!
            </div>
            {visibleGreetings.map(({ lang, greeting }) => (
                <div
                    key={lang}
                    style={{
                        position: 'absolute',
                        left: positions[lang]?.left,
                        top: positions[lang]?.top,
                        transform: 'translate(-50%, -50%)',
                        padding: '10px',
                        opacity: 0,
                        animation: 'fadeIn 3s forwards',
                    }}
                >
                    <div className={styles.greetingsText}>{greeting}!</div>
                </div>
            ))}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default Greetings;
