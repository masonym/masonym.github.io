import React, { useState, useEffect, useRef } from 'react';
import styles from './Greetings.module.css'

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

    const checkOverlap = (newPos, newSize, existingPositions) => {
        for (const pos of Object.values(existingPositions)) {
            if (
                newPos.left < pos.left + pos.width &&
                newPos.left + newSize.width > pos.left &&
                newPos.top < pos.top + pos.height &&
                newPos.top + newSize.height > pos.top
            ) {
                return true; // Overlap detected
            }
        }
        return false; // No overlap
    };

    const getRandomPosition = (containerSize, greetingSize, existingPositions) => {
        let newPos;
        do {
            newPos = {
                left: Math.random() * (containerSize.width - greetingSize.width),
                top: Math.random() * (containerSize.height - greetingSize.height),
                width: greetingSize.width,
                height: greetingSize.height
            };
        } while (checkOverlap(newPos, greetingSize, existingPositions));
        return newPos;
    };

    useEffect(() => {
        const greetingsList = Object.entries(greetings).filter(([lang]) => lang !== 'English');
        let index = 0;

        const addGreeting = () => {
            if (index < greetingsList.length && containerRef.current) {
                const [lang, greeting] = greetingsList[index];
                const containerRect = containerRef.current.getBoundingClientRect();
                const greetingSize = { width: 150, height: 50 };

                const newPos = getRandomPosition(
                    { width: containerRect.width, height: containerRect.height },
                    greetingSize,
                    positions
                );

                setVisibleGreetings(prev => [...prev, { lang, greeting }]);
                setPositions(prev => ({
                    ...prev,
                    [lang]: { left: newPos.left, top: newPos.top }
                }));

                index++;
                setTimeout(addGreeting, 2000);
            }
        };

        addGreeting();
    }, []);

    return (
        <div ref={containerRef} style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
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