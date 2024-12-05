import { useEffect, useState } from 'react';
import styles from './AdventCalendar.module.css';

function AdventCalendar() {
    const [openedDoors, setOpenedDoors] = useState([]);
    const [selectedDay, setSelectedDay] = useState(null);
    const [asciiArt, setAsciiArt] = useState({});
    const [positions, setPositions] = useState([]);
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth();

    // Seeded random function
    const seededRandom = (seed) => {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    };

    // Shuffle array with seed
    const shuffleArray = (array, seed) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(seededRandom(seed + i) * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    useEffect(() => {
        // Initialize random positions with current year as seed
        const days = Array.from({ length: 25 }, (_, i) => i + 1);
        const seed = new Date().getFullYear();
        const shuffled = shuffleArray(days, seed);
        setPositions(shuffled);

        // Load opened doors from localStorage
        const savedDoors = localStorage.getItem('openedDoors');
        if (savedDoors) {
            setOpenedDoors(JSON.parse(savedDoors));
        }
    }, []);

    useEffect(() => {
        // Save opened doors to localStorage whenever they change
        if (openedDoors.length > 0) {
            localStorage.setItem('openedDoors', JSON.stringify(openedDoors));
        }
    }, [openedDoors]);

    const loadAsciiArt = async (day) => {
        if (!asciiArt[day]) {
            try {
                const response = await fetch(`/ascii/day${day}.txt`);
                if (!response.ok) throw new Error('Failed to load ASCII art');
                const text = await response.text();
                setAsciiArt(prev => ({ ...prev, [day]: text }));
            } catch (error) {
                console.error('Error loading ASCII art:', error);
                return 'ASCII art not found';
            }
        }
    };

    const handleDoorClick = async (day) => {
        if (currentMonth === 11 && day <= currentDay) {
            await loadAsciiArt(day);
            if (!openedDoors.includes(day)) {
                setOpenedDoors([...openedDoors, day]);
            }
            // Delay modal opening by 600ms (matching the door flip animation duration)
            setTimeout(() => {
                setSelectedDay(day);
            }, 600);
        }
    };

    return (
        <div className={styles.container}>
            <h1>Advent Calendar</h1>
            <div className={styles.calendar}>
                {positions.map(day => (
                    <div
                        key={day}
                        className={`${styles.door} ${openedDoors.includes(day) ? styles.opened : ''} ${
                            currentMonth === 11 && day <= currentDay ? '' : styles.disabled
                        }`}
                        onClick={() => handleDoorClick(day)}
                    >
                        <div className={styles.doorFront}>{day}</div>
                        <div className={styles.doorBack}>{openedDoors.includes(day) ? '🎄' : day}</div>
                    </div>
                ))}
            </div>
            {selectedDay && (
                <div className={styles.modal} onClick={() => setSelectedDay(null)}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <span className={styles.close} onClick={() => setSelectedDay(null)}>&times;</span>
                        <pre>{asciiArt[selectedDay] || 'Loading...'}</pre>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AdventCalendar;
