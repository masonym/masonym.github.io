import { useRef } from 'react';
import Header from './components/Header/Header.jsx';
import Greetings from './components/Greetings/Greetings.jsx';
import Intro from './components/Intro/Intro.jsx'
import Projects from './components/Projects/Projects.jsx';
import Footer from './components/Footer/Footer.jsx';

import styles from './App.module.css';


function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <>
      <Header homeRef={homeRef} projectsRef={projectsRef} />
      
      <div ref={homeRef}>
        <Greetings />
        <Intro />
      </div>

      <div ref={projectsRef}>
        <Projects/>
      </div>
      
      <Footer />
    </>
  );
}

export default App;