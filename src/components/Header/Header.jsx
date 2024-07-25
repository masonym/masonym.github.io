import styles from './Header.module.css'

function Header({ projectsRef }) {
    const scrollToRef = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.headerTitles}>
                    <ul>
                        <h1 className={styles.h1}>Mason Leitch</h1>
                        <h3>Software Developer</h3>
                    </ul>
                    <ul>
                        <li style={{fontSize: '1.25em', borderLeft: '1px solid white ', paddingLeft: "10px"}}><a href="#" onClick={(e) => { e.preventDefault(); scrollToRef(projectsRef); }}>Projects</a></li>
                    </ul>
                </div>
                <ul className={styles.navItems}>
                    <li><a href="">Resume</a></li>
                    <li><a href="https://www.linkedin.com/in/mason-leitch-78b90a206/" target='_blank'>LinkedIn</a></li>
                    <li><a href="https://github.com/masonym" target='_blank'>GitHub</a></li>
                    <li><a href="mailto:nosamleitch@gmail.com" target='_blank'>Contact</a></li>
                </ul>
            </nav>
            <hr style={{marginTop: 0, marginBottom: "50px"}}></hr>
        </header>
    );
}

export default Header;