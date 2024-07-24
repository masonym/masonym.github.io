import styles from './Header.module.css'

function Header() {

    return(
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div>
                    <h1 className={styles.h1}>Mason Leitch</h1>
                    <ul>
                        <li><a href="#projects">Projects</a></li>
                    </ul>
                </div>
                <ul className={styles.navItems}>
                    <li><a href="">resume</a></li>
                    <li><a href="https://www.linkedin.com/in/mason-leitch-78b90a206/" target='_blank'>linkedin</a></li>
                    <li><a href="https://github.com/masonym" target='_blank'>github</a></li>
                    <li><a href="mailto:nosamleitch@gmail.com" target='_blank'>contact</a></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );

}

export default Header