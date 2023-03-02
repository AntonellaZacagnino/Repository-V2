import React from "react";

function Contact(){
    return(
        <div className='contact-container'>
        <div className='emptyDiv'></div>
        <div className='contact'>
          <div className='title' style={{marginLeft: '5vh', marginTop: '2vh', height: '10vh'}}>
            <span>Contacto</span>
            <div className='square-1'></div>
            <div className='square-2'></div>
          </div>
          <div className='data'>
            <p style={{width: '40vh'}}>
              Si mi perfil es de tu agrado te dejo mis datos de contacto y para descargar mi CV
            </p>
            <p>
              Muchas gracias!
            </p>
            <div className='icons'>
              <a href="https://github.com/AntonellaZacagnino" target={"_blank"}>
                <img src="github.png" style={{width: '9vh'}} />
              </a>
              <a href="https://www.linkedin.com/in/" target="_blank">
                <img src="linkedin.png" style={{width: '7vh'}} />
              </a>
              <a href='mailto:antonellazacagnino@gmail.com' target="_blank">
                <img src="mail.png" style={{width: '9vh' }}/>
              </a>
            </div>
            <a className='download' href="Antonella Zacagnino.pdf" target="_blank">Descargar CV</a>
          </div>
        </div>
      </div>
    )
}

export default Contact;