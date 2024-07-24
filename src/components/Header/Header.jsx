import styles from './Header.module.css'

function Header() {

    return(
        <header>
            <nav >
                <ul className={styles.navItems}>
                    <li><a href="">resume</a></li>
                    <li><a href="">linkedin</a></li>
                    <li><a href="">github</a></li>
                </ul>
            </nav>
        </header>
    );

}

export default Header