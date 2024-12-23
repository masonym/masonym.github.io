import { useState, useEffect } from 'react';
import ProjectHeader from '../ProjectHeader/ProjectHeader.jsx';
import Card from '../Card/Card.jsx';
import styles from './Projects.module.css';

import projectImageCS from '../../assets/upcoming-sales.png';
import projectImagePhace from '../../assets/phace.png';
import projectImageGB from '../../assets/chatbot_sampleImage.png';
import projectImageDotNet from '../../assets/dotnetAPI_sampleImage.png';
import projectImageMapleTools from '../../assets/maplestory-tools.png';
import projectImageADA from '../../assets/ada.png';

const projects = [
    {
        id: 1,
        imageSource: projectImageMapleTools,
        name: "MapleStory Tools Project",
        description: "A scalable, React-based web application serving as a repository for various tools for an online game, designed with modular architecture to easily accommodate future game-related calculators and utilities.",
        projectLink: "https://masonym.dev",
        gitHubLink: "https://github.com/masonym/masonym.dev",
        technologies: ["React", "JavaScript", "CSS Modules", "Responsive Design"],
        category: "Web App"
    },
    {
        id: 2,
        imageSource: projectImageCS,
        name: "MapleStory Upcoming Sales Viewer",
        description: "A React website built in conjunction with Python XML parsing to display upcoming cash shop sales for the MMORPG MapleStory.",
        projectLink: "https://masonym.dev/ms-upcoming-sales",
        gitHubLink: "https://github.com/masonym/maple-cs-parser",
        technologies: ["React", "Python", "XML", "API Integration"],
        category: "Web App"
    },
    {
        id: 3,
        imageSource: projectImageADA,
        name: "Military Contracting Event Management Website",
        description: "A responsive event management website using Next.js and React, utilizing dynamic routing and centralized data files to generate SEO-friendly pages on-demand.",
        projectLink: "https://americandefensealliance.org/",
        gitHubLink: "https://github.com/masonym/ada-website",
        technologies: ["Next.js", "React", "SEO", "Dynamic Routing"],
        category: "Website"
    },
    {
        id: 4,
        imageSource: projectImagePhace,
        name: "Chilliwack Med-spa Website",
        description: "A website built in Wix and customized using the Velo API to create a seamless booking experience for clients.",
        projectLink: "https://www.phace.ca/",
        gitHubLink: "",
        technologies: ["Wix", "Velo API", "JavaScript", "UI/UX Design"],
        category: "Website"
    }
];

const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))];
const categories = [...new Set(projects.map(project => project.category))];

function Projects() {
    const [selectedTech, setSelectedTech] = useState('All');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const filtered = projects.filter(project => {
            const techMatch = selectedTech === 'All' || project.technologies.includes(selectedTech);
            const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
            return techMatch && categoryMatch;
        });
        
        setTimeout(() => {
            setFilteredProjects(filtered);
            setIsLoading(false);
        }, 300);
    }, [selectedTech, selectedCategory]);

    return (
        <div id="projects" className={styles.projectsSection}>
            <ProjectHeader />
            
            {/* <div className={styles.filters}>
                <div className={styles.filterGroup}>
                    <h3>Filter by Technology</h3>
                    <div className={styles.filterButtons}>
                        <button 
                            className={`${styles.filterButton} ${selectedTech === 'All' ? styles.active : ''}`}
                            onClick={() => setSelectedTech('All')}
                        >
                            All
                        </button>
                        {allTechnologies.map(tech => (
                            <button
                                key={tech}
                                className={`${styles.filterButton} ${selectedTech === tech ? styles.active : ''}`}
                                onClick={() => setSelectedTech(tech)}
                            >
                                {tech}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.filterGroup}>
                    <h3>Filter by Category</h3>
                    <div className={styles.filterButtons}>
                        <button 
                            className={`${styles.filterButton} ${selectedCategory === 'All' ? styles.active : ''}`}
                            onClick={() => setSelectedCategory('All')}
                        >
                            All
                        </button>
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`${styles.filterButton} ${selectedCategory === category ? styles.active : ''}`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div> */}

            <div className={`${styles.cardContainerWrapper} ${isLoading ? styles.loading : ''}`}>
                <div className={styles.cardContainer}>
                    {filteredProjects.map(project => (
                        <Card
                            key={project.id}
                            {...project}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;