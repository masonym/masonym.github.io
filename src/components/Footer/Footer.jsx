import React from 'react';
import styles from './Footer.module.css';
import { motion } from 'framer-motion';
import { 
    FaGithub, 
    FaLinkedin, 
    FaEnvelope, 
    FaCode, 
    FaLaptopCode,
    FaReact
} from 'react-icons/fa';

function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'GitHub',
            icon: <FaGithub size={20} />,
            url: 'https://github.com/masonym',
            color: '#333'
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin size={20} />,
            url: 'https://www.linkedin.com/in/mason-leitch-78b90a206/',
            color: '#0077B5'
        },
        {
            name: 'Email',
            icon: <FaEnvelope size={20} />,
            url: 'mailto:nosamleitch@gmail.com',
            color: '#EA4335'
        }
    ];

    const quickLinks = [
        { name: 'Projects', href: 'projects' },
        { name: 'Skills', href: 'skills' },
        { name: 'Contact', href: 'contact' }
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerSection}>
                    <h3 className={styles.footerTitle}>Mason Leitch</h3>
                    <p className={styles.footerDescription}>
                        Full Stack Developer passionate about creating innovative web solutions
                    </p>
                    <div className={styles.socialLinks}>
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.url}
                                className={styles.socialLink}
                                whileHover={{ scale: 1.1, color: link.color }}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={link.name}
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>

                <div className={styles.footerSection}>
                    <h3 className={styles.footerTitle}>Quick Links</h3>
                    <ul className={styles.quickLinks}>
                        {quickLinks.map((link) => (
                            <li key={link.name}>
                                <button 
                                    onClick={() => scrollToSection(link.href)}
                                    className={styles.quickLink}
                                >
                                    {link.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h3 className={styles.footerTitle}>Tech Stack</h3>
                    <div className={styles.techStack}>
                        <span className={styles.techItem}>
                            <FaReact /> React
                        </span>
                        <span className={styles.techItem}>
                            <FaCode /> JavaScript
                        </span>
                        <span className={styles.techItem}>
                            <FaLaptopCode /> Full Stack
                        </span>
                    </div>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <div className={styles.footerLine} />
                <div className={styles.footerCopyright}>
                    <p>&copy; {currentYear} Mason Leitch. All rights reserved.</p>
                    <p className={styles.builtWith}>
                        Built with <FaReact className={styles.reactIcon} /> React
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;