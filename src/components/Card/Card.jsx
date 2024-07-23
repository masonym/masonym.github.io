import styles from './Card.module.css'

import gitHubLogo from '../../assets/github-mark-white.png'

function Card(props) {
  return (
    <div className={styles.card}>
      <a href={props.projectLink} target="_blank" className={styles.imageContainer}>
        <img src={props.imageSource} className={styles.image} alt={props.name} />
      </a>
      <h2 className={styles.projectTitle}>{props.name}</h2>
      <p>{props.description}</p>
      <span className={styles.gitHubSection}><a href={props.gitHubLink} target="_blank" className={styles.link}>{props.gitHubLink ? <img src={gitHubLogo} className={styles.gitHubLogo}></img> : ""}</a></span>
    </div>
  );
}

export default Card;
