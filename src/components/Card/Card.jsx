import React, { useState, useEffect, useRef } from 'react';
import styles from './Card.module.css';
import gitHubLogo from '../../assets/github-mark-white.png';
import { ExternalLink } from 'lucide-react';

function Card(props) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const imgRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (imgRef.current) {
        setDimensions({
          width: imgRef.current.width,
          height: imgRef.current.height
        });
      }
    };

    if (imgRef.current && imgRef.current.complete) {
      updateDimensions();
    } else if (imgRef.current) {
      imgRef.current.addEventListener('load', updateDimensions);
    }

    // Cleanup
    return () => {
      if (imgRef.current) {
        imgRef.current.removeEventListener('load', updateDimensions);
      }
    };
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img 
          ref={imgRef}
          src={props.imageSource} 
          className={styles.image} 
          alt={props.name} 
        />
        <a 
          href={props.projectLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.imageOverlay}
          style={{ width: dimensions.width, height: dimensions.height }}
        >
          <span className={styles.overlayText}>Click me to view website</span>
          <ExternalLink className={styles.overlayIcon} />
        </a>
      </div>
      <h2 className={styles.projectTitle}>{props.name}</h2>
      <p>{props.description}</p>
      <span className={styles.gitHubSection}>
        <a href={props.gitHubLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
          {props.gitHubLink && <img src={gitHubLogo} className={styles.gitHubLogo} alt="GitHub" />}
        </a>
      </span>
    </div>
  );
}

export default Card;