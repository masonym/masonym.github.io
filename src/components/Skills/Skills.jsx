import React from 'react';
import styles from './Skills.module.css';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDatabase, FaPhp, FaAws, FaTools } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql } from 'react-icons/si';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            items: [
                {
                    name: "React & Next.js",
                    icon: <FaReact />,
                    details: [
                        "Next.js 13+ App Router",
                        "Advanced React Patterns & Hooks",
                        "Context Providers & State Management",
                        "Performance Optimization & SSR"
                    ]
                },
                {
                    name: "TypeScript",
                    icon: <SiTypescript />,
                    details: [
                        "Centralized TypeScript Interfaces",
                        "Advanced Type Systems",
                        "Custom Hooks Development",
                        "Type-Safe API Integration"
                    ]
                },
                {
                    name: "UI & Styling",
                    icon: <SiTailwindcss />,
                    details: [
                        "Tailwind CSS Architecture",
                        "Responsive Design Patterns",
                        "Accessible Component Design",
                        "Dynamic UI Components"
                    ]
                }
            ]
        },
        {
            title: "Backend Development",
            items: [
                {
                    name: "Python Development",
                    icon: <FaPython />,
                    details: [
                        "Django Web Applications",
                        "AutoCAD Integration & DXF",
                        "ETL Pipeline Development",
                        "Structural Engineering Tools"
                    ]
                },
                {
                    name: "PHP",
                    icon: <FaPhp />,
                    details: [
                        "Laravel Framework",
                        "Object-Oriented Design",
                        "Technical Tool Development"
                    ]
                },
                {
                    name: "Data Engineering",
                    icon: <FaDatabase />,
                    details: [
                        "AWS DynamoDB Design",
                        "Data Mining Solutions",
                        "Automated Analysis Tools",
                        "Large Dataset Processing"
                    ]
                }
            ]
        },
        {
            title: "Cloud & Infrastructure",
            items: [
                {
                    name: "AWS Services",
                    icon: <FaAws />,
                    details: [
                        "DynamoDB & S3 Integration",
                        "Lambda Functions",
                        "CloudFront CDN",
                        "API Gateway"
                    ]
                },
                {
                    name: "Development Tools",
                    icon: <FaTools />,
                    details: [
                        "Git Version Control",
                        "AutoCAD Integration",
                        "Technical Documentation",
                        "CI/CD Workflows"
                    ]
                }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="skills" className={styles.skillsSection}>
            <h2 className={styles.title}>Technical Expertise</h2>
            <div className={styles.skillsContainer}>
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        className={styles.categoryCard}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <h3 className={styles.categoryTitle}>{category.title}</h3>
                        <div className={styles.skillsList}>
                            {category.items.map((skill, skillIndex) => (
                                <motion.div
                                    key={skillIndex}
                                    className={styles.skillItem}
                                    variants={itemVariants}
                                >
                                    <div className={styles.skillHeader}>
                                        <span className={styles.skillIcon}>{skill.icon}</span>
                                        <h4 className={styles.skillName}>{skill.name}</h4>
                                    </div>
                                    <ul className={styles.skillDetails}>
                                        {skill.details.map((detail, detailIndex) => (
                                            <li key={detailIndex}>{detail}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
