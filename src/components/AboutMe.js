import React from "react";

function AboutMe() {
    return(
        <div className='aboutMe-container'>
          <div className='aboutMe'>
            <div className='text'>
              <div className='title'>
                <span>Sobre mi</span>
                <div className='square-1'></div>
                <div className='square-2'></div>
              </div>
              <p>
                Mi nombre es Antonella Zacagnino, vivo en Buenos Aires, Argentina, inicie en el 2018 en el mundo de la programación realizando mis primeros proyectos y trabajos en PHP. Actualmente estoy en busca de orientarme más hacia un perfil Frontend, los frameworks que más estoy manejando son Vue.js y React.js. Me gusta tener nuevas metas y desafíos y todo lo que sirva para crecimiento personal bienvenido sea!
              </p>
            </div>
            <img src="fotocv.jpg" />    
          </div>
          <div className='skills'>
            <h2>Skills</h2>
            <div className='skills-images'>
              <div className='skill'>
                <img src='css.png' />
                <div class="tooltip">
                  <div class="top">
                    <h3>CSS</h3>
                  </div>
                </div>
              </div>
              <div className='skill'>
                <img src='javascript.png' />
                <div class="tooltip">
                  <div class="top">
                    <h3>Javascript</h3>
                  </div>
                </div>
              </div>
              <div className='skill'>
                <img src='html.png' />
                <div class="tooltip">
                  <div class="top">
                    <h3>HTML</h3>
                  </div>
                </div>
              </div>
              <div className='skill'>
                <img src='git.png' style={{width: "170px", height: "80px"}} />
                <div class="tooltip">
                  <div class="top">
                    <h3>Git</h3>
                  </div>
                </div>
              </div>
              <div className='skill'>
                <img src='next.png' style={{width:"130px"}} />
                <div class="tooltip">
                  <div class="top">
                    <h3>Next.js</h3>
                  </div>
                </div>
              </div>
              <div className='skill'>
                <img src='react.png' />
                <div class="tooltip">
                  <div class="top">
                    <h3>React.js</h3>
                  </div>
                </div>
              </div>
              <div className='skill'>
                <img src='vue.png' />
                <div class="tooltip">
                  <div class="top">
                    <h3>Vue.js</h3>
                  </div>
                </div>
              </div>
              <div className='skill'>
                <img src='php.png' style={{width: "160px", height: "80px"}} />
                <div class="tooltip">
                  <div class="top">
                    <h3>PHP</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default AboutMe;
