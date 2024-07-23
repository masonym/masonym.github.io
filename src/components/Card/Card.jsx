import styles from './Card.module.css'

function Card(props) {

    return(
        <div className={styles.card}>
            <a href={props.projectLink}><img src={props.imageSource} className={styles.image}></img></a>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <a href={props.gitHubLink} className={styles.link}>{props.gitHubLink ? "(GitHub)" : ""}</a>
        </div>
    );
}

export default Card