import styles from './Contact.module.css'

function Contact() {


    return (
        <div className={styles.contactWrapper}>
            <div>
                <h1 className={styles.contactHeader}>Get in touch.</h1>
                <img></img>
            </div>
            <div className={styles.contactParagraph}>
                <p>
                    If you'd like to learn more about me and my experience or look into working together; please contact me at <a href="mailto:nosamleitch@gmail.com">nosamleitch@gmail.com</a>.
                </p>
            </div>
        </div>
    );
}

export default Contact