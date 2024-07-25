import portrait from '../../assets/cropped.jpg'

import styles from './Intro.module.css'

function Intro() {


    return (
        <div className={styles.introWrapper}>
            <hr style={{ color: 'white', width: '100%' }} />
            <div className={styles.greetingAndPortrait}>
                <h1 style={{ textAlign: "left", margin: 0 }}>Nice to meet you! 👋 <br></br>I'm <span style={{ color: "#2063d6" }}>Mason</span>.</h1>
                <img src={portrait} className={styles.portrait}></img>
            </div>
            <div className={styles.introParagraph}>
                <p>
                    I'm from the Greater Vancouver area, and eager to join a talented team building exciting products.
                    <br></br><br></br>
                    I have a keen interest lately in web development, and recently I've been building a few projects in React/Next.js. I love to learn, and ever since I finished my degree, that urge has been fueled like never before.

                    <br></br><br></br>

                    Currently learning: <b>C#</b><b></b>.
                </p>
            </div>
        </div>
    );
}

export default Intro