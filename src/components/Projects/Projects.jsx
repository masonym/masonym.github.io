import ProjectHeader from '../ProjectHeader/ProjectHeader.jsx';
import Card from '../Card/Card.jsx';
import styles from './Projects.module.css';

import projectImageCS from '../../assets/upcoming-sales.png';
import projectImagePhace from '../../assets/phace.png';
import projectImageGB from '../../assets/chatbot_sampleImage.png';
import projectImageDotNet from '../../assets/dotnetAPI_sampleImage.png';
import projectImageMapleTools from '../../assets/maplestory-tools.png'
import projectImageADA from '../../assets/ada.png'

function Projects() {
    return (
        <div>
            <ProjectHeader />
            <div className={styles.cardContainerWrapper}>
                <div className={styles.cardContainer}>
                    <Card
                        imageSource={projectImageMapleTools}
                        name="MapleStory Tools Project"
                        description="A scalable, React-based web application serving as a repository for various tools for an online game, designed with modular architecture to easily accommodate future game-related calculators and utilities."
                        projectLink="https://masonym.dev"
                        gitHubLink="https://github.com/masonym/masonym.dev"
                    />
                    <Card
                        imageSource={projectImageCS}
                        name="MapleStory Upcoming Sales Viewer"
                        description="A React website built in conjunction with Python XML parsing to display upcoming cash shop sales for the MMORPG MapleStory."
                        projectLink="https://masonym.dev/ms-upcoming-sales"
                        gitHubLink="https://github.com/masonym/maple-cs-parser"
                    />
                    <Card
                        imageSource={projectImageADA}
                        name="Military Contracting Event Management Website"
                        description="A responsive event management website using Next.js and React, utilizing dynamic routing and centralized data files to generate SEO-friendly pages on-demand."
                        projectLink="https://americandefensealliance.org/"
                        gitHubLink="https://github.com/masonym/ada-website"
                    />
                    <Card
                        imageSource={projectImagePhace}
                        name="Chilliwack Med-spa Website"
                        description="A website built in Wix and customized using the Velo API for advanced features such as booking addons."
                        projectLink="https://phace.ca/"
                    />
                    <Card
                        imageSource={projectImageGB}
                        name="Gigabyte Motherboard Chat Bot"
                        description="A customer support chat bot using a fine-tuned large language model for Gigabyte motherboards."
                        projectLink="https://github.com/BrianAtkinson93/COMP_482_NLP_Group_Project"
                        gitHubLink="https://github.com/BrianAtkinson93/COMP_482_NLP_Group_Project"
                    />
                    <Card
                        imageSource={projectImageDotNet}
                        name="Commands for CLI REST API"
                        description="Stores helpful commands in a SQL server DB."
                        projectLink="https://github.com/masonym/.NETCore_MVC_RESTAPI"
                        gitHubLink="https://github.com/masonym/.NETCore_MVC_RESTAPI"
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;