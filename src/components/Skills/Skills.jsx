import React from 'react';
import styles from './Skills.module.css';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql } from 'react-icons/si';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            items: [
                { name: "React", icon: <FaReact />, details: ["Component-based architecture", "State management (Redux, Context)", "React Router", "Custom Hooks"] },
                { name: "JavaScript/TypeScript", icon: <SiJavascript />, details: ["ES6+", "Async/Await", "DOM Manipulation", "Type Safety"] },
                { name: "CSS & Styling", icon: <SiTailwindcss />, details: ["Tailwind CSS", "CSS Modules", "Responsive Design", "Animations"] }
            ]
        },
        {
            title: "Backend Development",
            items: [
                { name: "Node.js", icon: <FaNodeJs />, details: ["Express.js", "REST APIs", "Authentication", "Middleware"] },
                { name: "Python", icon: <FaPython />, details: ["FastAPI", "Django", "Data Processing", "Automation"] },
                { name: "Databases", icon: <FaDatabase />, details: ["MongoDB", "PostgreSQL", "Database Design", "ORM"] }
            ]
        },
        {
            title: "Development Tools",
            items: [
                { name: "Version Control", icon: <FaGitAlt />, details: ["Git", "GitHub", "Branching Strategies", "CI/CD"] },
                { name: "Database Tools", icon: <SiMongodb />, details: ["MongoDB Atlas", "pgAdmin", "Data Modeling", "Optimization"] },
                { name: "Development", icon: <SiTypescript />, details: ["VS Code", "Testing", "Documentation", "Debugging"] }
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
