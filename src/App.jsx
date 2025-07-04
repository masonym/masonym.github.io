import { useRef, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header.jsx';
import Greetings from './components/Greetings/Greetings.jsx';
import Intro from './components/Intro/Intro.jsx';
import Projects from './components/Projects/Projects.jsx';
import Footer from './components/Footer/Footer.jsx';
import Contact from './components/Contact/Contact.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import AdventCalendar from './components/AdventCalendar/AdventCalendar.jsx';
import Skills from './components/Skills/Skills.jsx';
import BirthMonth from './components/BirthMonth/BirthMonth.jsx';

import styles from './App.module.css'

function App() {

  const homeRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/advent" element={
          <div style={{ margin: 0, padding: 0, overflow: 'hidden', height: '100vh', background: '#1a1a1a' }}>
            <AdventCalendar />
          </div>
        } />
        <Route path="/birth-month" element={
          <div className={styles.app}>
            <Header homeRef={homeRef} projectsRef={projectsRef} />
            <BirthMonth />
            <Footer />
          </div>
        } />
        <Route path="/" element={
          <div className={styles.app}>
            <Header homeRef={homeRef} projectsRef={projectsRef} />
            
            
            <div ref={homeRef}>
              <Greetings />
              <Intro />
              <Skills />
            </div>
      
            <div ref={projectsRef}>
              <Projects/>
            </div>
            <Contact/>
            <Footer />
          </div>
        }/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;