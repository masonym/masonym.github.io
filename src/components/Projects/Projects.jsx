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

const clientProjects = [
    {
        id: 1,
        imageSource: projectImageADA,
        name: "Military Contracting Event Management Website",
        description: "A responsive event management website using Next.js and React, utilizing dynamic routing and centralized data files to generate SEO-friendly pages on-demand.",
        projectLink: "https://americandefensealliance.org/",
        gitHubLink: "https://github.com/masonym/ada-website",
        technologies: ["Next.js", "React", "SEO", "Dynamic Routing"],
        category: "Website"
    },
    {
        id: 2,
        imageSource: projectImagePhace,
        name: "Chilliwack Med-spa Website",
        description: "A website built in Wix and customized using the Velo API to create a seamless booking experience for clients.",
        projectLink: "https://www.phace.ca/",
        gitHubLink: "",
        technologies: ["Wix", "Velo API", "JavaScript", "UI/UX Design"],
        category: "Website"
    }
]

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
];

const getEqualSplitClass = (length) => {
    if (length === 2) return styles.equalSplit2;
    if (length === 3) return styles.equalSplit3;
    return '';
};

function Projects() {

    return (
        <div id="projects" className={styles.projectsSection}>
            <ProjectHeader headerText="Client Projects" />

            <div className={`${styles.cardContainerWrapper}`}>
                <div className={`${styles.cardContainer} ${getEqualSplitClass(clientProjects.length)}`}>
                    {clientProjects.map(project => (
                        <Card
                            key={project.id}
                            {...project}
                        />
                    ))}
                </div>
            </div>
            <ProjectHeader headerText="Personal Projects" />

            <div className={`${styles.cardContainerWrapper}`}>
                <div className={`${styles.cardContainer} ${getEqualSplitClass(projects.length)}`}>
                    {projects.map(project => (
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
