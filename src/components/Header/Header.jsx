import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import Pdf from '../../assets/Leitch, Mason.pdf';
import ModeToggle from '../ModeToggle/ModeToggle';
import styles from './Header.module.css';

// Set up the PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

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
                    <li><a href="#" onClick={handleResumeClick}>Resume</a></li>
                    <li><a href="https://www.linkedin.com/in/mason-leitch-78b90a206/" target='_blank'>LinkedIn</a></li>
                    <li><a href="https://github.com/masonym" target='_blank'>GitHub</a></li>
                    <li><a href="mailto:nosamleitch@gmail.com" target='_blank'>Contact</a></li>
                </ul>
            </nav>
            <hr style={{ marginTop: 0, marginBottom: "50px" }}></hr>
            
            {showPdf && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg max-w-3xl max-h-[90vh] overflow-auto">
                        <button 
                            onClick={() => setShowPdf(false)}
                            className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Close
                        </button>
                        <Document
                            file={Pdf}
                            options={{ workerSrc: "/pdf.worker.js" }}
                        >
                            <Page pageNumber={1} />
                        </Document>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;