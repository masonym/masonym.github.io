import React, { useState } from 'react';
import styles from './Contact.module.css';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
    const [copied, setCopied] = useState(false);
    const email = "nosamleitch@gmail.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const socialLinks = [
        {
            name: 'GitHub',
            icon: <FaGithub size={24} />,
            url: 'https://github.com/masonym',
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin size={24} />,
            url: 'https://www.linkedin.com/in/mason-leitch-78b90a206/',
            color: '#0077B5'
        },
        {
            name: 'Email',
            icon: <FaEnvelope size={24} />,
            action: handleCopyEmail,
            color: '#EA4335'
        }
    ];

    return (
        <section id="contact" className={styles.contactSection}>
            <motion.div 
                className={styles.contactContent}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className={styles.contactHeader}>
                    <h2 className={styles.title}>Get in Touch</h2>
                    <p className={styles.subtitle}>
                        Let's collaborate on your next project or discuss opportunities
                    </p>
                </div>

                <div className={styles.contactCards}>
                    <motion.div 
                        className={styles.contactCard}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <h3>Ready to Start?</h3>
                        <p>
                            I'm currently open to new opportunities and interesting projects.
                            Whether you have a question or just want to say hi, I'll try my
                            best to get back to you!
                        </p>
                        <div className={styles.emailContainer}>
                            <button 
                                className={styles.emailButton}
                                onClick={handleCopyEmail}
                            >
                                {email}
                                <span className={styles.copyHint}>
                                    {copied ? 'Copied!' : 'Click to copy'}
                                </span>
                            </button>
                        </div>
                    </motion.div>

                    <motion.div 
                        className={styles.contactCard}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <h3>Connect with Me</h3>
                        <p>
                            Follow me on social media to stay updated with my latest projects
                            and tech adventures.
                        </p>
                        <div className={styles.socialLinks}>
                            {socialLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.url}
                                    onClick={link.action}
                                    className={styles.socialLink}
                                    whileHover={{ scale: 1.1, color: link.color }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={link.name}
                                >
                                    {link.icon}
                                    <span>{link.name}</span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className={styles.contactFooter}>
                    <p>Based in British Columbia, Canada 🇨🇦</p>
                    <p>Available for remote opportunities worldwide</p>
                </div>
            </motion.div>
        </section>
    );
}

export default Contact;