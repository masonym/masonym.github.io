import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Link } from 'react-router-dom';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import Pdf from '../../assets/Leitch, Mason.pdf';
import ModeToggle from '../ModeToggle/ModeToggle';
import styles from './Header.module.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

function Header({ projectsRef }) {
    const scrollToRef = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [showPdf, setShowPdf] = useState(false);

    useEffect(() => {
        document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const handleThemeToggle = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    const handleResumeClick = (e) => {
        e.preventDefault();
        setShowPdf(true);
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
                        <li style={{ fontSize: '1.25em', borderLeft: '1px solid white ', paddingLeft: "10px" }}>
                            <a href="#" onClick={(e) => { e.preventDefault(); scrollToRef(projectsRef); }}>Projects</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ModeToggle isDarkMode={isDarkMode} onToggle={handleThemeToggle} />
                </div>
                <ul className={styles.navItems}>
                    <li><Link to="/" className={styles.link}>Home</Link></li>
                    {/* <li><Link to="/advent" className={styles.link}>Advent Calendar</Link></li> */}
                    <li><a href="#" onClick={handleResumeClick}>Resume</a></li>
                    <li><a href="https://www.linkedin.com/in/mason-leitch-78b90a206/" target='_blank'>LinkedIn</a></li>
                    <li><a href="https://github.com/masonym" target='_blank'>GitHub</a></li>
                    <li><a href="mailto:nosamleitch@gmail.com" target='_blank'>Contact</a></li>
                </ul>
            </nav>
            {/* <hr style={{ marginTop: 0, marginBottom: "50px" }}></hr> */}
            
            {showPdf && (
                <div className={styles.pdfOverlay}>
                    <div className={styles.pdfPopup}>
                        <button 
                            onClick={() => setShowPdf(false)}
                            className={styles.closeButton}
                        >
                            Close
                        </button>
                        <Document
                            file={Pdf}
                            options={{ workerSrc: "/pdf.worker.js" }}
                        >
                            <Page pageNumber={1} renderTextLayer={false} scale={1.5}/>;
                        </Document>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;