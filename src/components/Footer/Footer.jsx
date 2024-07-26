import styles from './Footer.module.css'

import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';
import gitHubLogo from '../../assets/github-mark-white.png'
import linkedInLogo from '../../assets/LI-In-Bug.png'
import emailLogo from '../../assets/email.png'

function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.footerText}>
                <p >&copy; Mason Leitch {(new Date().getFullYear())}</p>
                <p style={{ marginTop: "-1em", fontSize: "0.75em" }}>Page built with React</p>
            </div>
            <ul className={styles.socialLinks}>
                    <li><a href="https://github.com/masonym" target="_blank"><SiGithub className={styles.socialLogos}/></a></li>
                    <li><a href="https://www.linkedin.com/in/mason-leitch-78b90a206/" target="_blank"><SiLinkedin className={styles.socialLogos}/></a></li>
                    <li><a href="mailto:nosamleitch@gmail.com" target="_blank"><SiGmail className={styles.socialLogos}/></a></li>
            </ul>
        </footer>

    )
}

export default Footer