import { useRef } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header.jsx';
import Greetings from './components/Greetings/Greetings.jsx';
import Intro from './components/Intro/Intro.jsx';
import Projects from './components/Projects/Projects.jsx';
import Footer from './components/Footer/Footer.jsx';
import Contact from './components/Contact/Contact.jsx';
import NotFound from './components/NotFound/NotFound.jsx';

function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header homeRef={homeRef} projectsRef={projectsRef} />
            
            <div ref={homeRef}>
              <Greetings />
              <Intro />
            </div>
      
            <div ref={projectsRef}>
              <Projects/>
            </div>
            <Contact/>
            <Footer />
          </>
        }/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;