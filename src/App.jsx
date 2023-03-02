import '../src/styles/styles.css';
import React, {useRef} from 'react';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const welcomeRef = useRef()
  const mainRef = useRef()
  const enterRef = useRef()
  const transition = () => {
    welcomeRef.current.classList.add('fade-out')
    welcomeRef.current.style.zIndex = -1;
    mainRef.current.classList.add('fade-in')
    const body = document.getElementById('body')
    body.style.overflowY = 'auto';
  } 
  return (
    <div className="container">
      <div ref={welcomeRef} className='welcome-page'>
        <div className='circles'>
          <div className='circle-1 pulse-1'></div>
          <div className='circle-2 pulse-2'></div>
          <div className='circle-3 pulse-3'></div>
          <div className='circle-4 pulse-4'></div>
          <div className='circle-5 pulse-5'></div>
          <div className='circle-6 pulse-6'></div>
          <div className='circle-7 pulse-7'></div>
        </div>
        <div className='start-text'>
          <h1>Antonella Zacagnino</h1>
          <span>Frontend Developer</span>
          <button onClick={(transition)} ref={enterRef}>Entrar a portfolio</button>
        </div>
      </div>
      <div ref={mainRef} className='main-page'>
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </div>

);
}

export default App;
