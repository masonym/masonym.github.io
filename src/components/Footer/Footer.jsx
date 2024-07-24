import styles from './Footer.module.css'

import gitHubLogo from '../../assets/github-mark-white.png'
import linkedInLogo from '../../assets/LI-In-Bug.png'
import emailLogo from '../../assets/email.png'

function Footer() {

    return(
        // this should be column not row
        <footer className={styles.footer}>
            <p className={styles.footerText}>&copy; Mason Leitch {(new Date().getFullYear())}</p>
            <ul className={styles.socialLinks}>
                <li><a href="https://github.com/masonym" target="_blank"><img src={gitHubLogo} className={styles.socialLogos}></img></a></li>
                <li><a href="https://www.linkedin.com/in/mason-leitch-78b90a206/" target="_blank"><img src={linkedInLogo} className={styles.socialLogos}></img></a></li>
                <li><a href="mailto:nosamleitch@gmail.com" target="_blank"><img src={emailLogo} className={styles.socialLogos}></img></a></li>
            </ul>
        </footer>

    )
}

export default Footer