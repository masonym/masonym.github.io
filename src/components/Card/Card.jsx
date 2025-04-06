import React, { useState, useEffect, useRef } from 'react';
import styles from './Card.module.css';
import { SiGithub } from 'react-icons/si';
import { ExternalLink } from 'lucide-react';

function Card({ imageSource, name, description, projectLink, gitHubLink, technologies, client }) {
  const [isHovered, setIsHovered] = useState(false);
  const imgRef = useRef(null);

  return (
    <div
      className={`${styles.card} ${isHovered ? styles.hovered : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.imageContainer}>
        <img
          ref={imgRef}
          src={imageSource}
          className={styles.image}
          alt={name}
          loading="lazy"
        />
        <div
          className={styles.imageOverlay}
        >
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.overlayLink}
          >
            <span className={styles.overlayText}>View Project</span>
            <ExternalLink className={styles.overlayIcon} />
          </a>
        </div>
      </div>

      <div className={styles.content}>
        {client && <h2 className={styles.client}>Client: {client}</h2>}
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.technologies}>
          {technologies.map((tech, index) => (
            <span key={index} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <ExternalLink size={20} />
            <span>Live Demo</span>
          </a>
          {gitHubLink && (
            <a
              href={gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <SiGithub size={20} />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
