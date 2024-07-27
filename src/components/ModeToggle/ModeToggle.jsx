import React from 'react';
import { Moon, Sun } from 'lucide-react';
import styles from './ModeToggle.module.css';

const ModeToggle = ({ isDarkMode, onToggle }) => {
    return (
        <button
            className={`${styles.themeToggle} ${isDarkMode ? styles.light : styles.dark}`}
            onClick={onToggle}
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        >
            <div className={`${styles.toggleIcon} ${isDarkMode ? styles.darkIcon : styles.lightIcon}`}>
                {isDarkMode ? <Moon size={24}/> : <Sun size={24} />}
            </div>
        </button>
    );
};

export default ModeToggle;