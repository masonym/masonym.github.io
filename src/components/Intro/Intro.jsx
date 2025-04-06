import portrait from '../../assets/profile-portrait.jpg'

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
                    I write code, mostly with TypeScript and Next.js, and I love building things that real humans use! I'd love to expand my skill set and learn from others in the industry. I've spent a while learning the "safe" stuff like React, Next.js, and TypeScript, but I'm eager to move outside of the box.

                    <br></br><br></br>

                    Currently building <a href="https://github.com/masonym/phace-website" target="_blank" rel="noopener noreferrer">Phace</a>, a full-stack booking and e-commerce website for a small business in the medical aesthetics industry, located in Chilliwack, British Columbia. Designed to replace a Wix website and acuity scheduling platform. Built to extend the limitations of off-the-shelf booking tools by building a fully customized frontend integrated with the Square API.
                </p>
            </div>
        </div>
    );
}

export default Intro
