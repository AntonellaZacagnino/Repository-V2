import React, {useState} from "react";
import Modal from './Modal';
import data from '../data.json';

function Projects() {
    const [modal, setModal] = useState(false)
    const [actualModal, setActualModal] = useState();
    return (
        <div className='projects-container'>
          <div className='title'>
            <span>Proyectos</span>
            <div className='square-1'></div>
            <div className='square-2'></div>
          </div>
          <div className='projects'>
            {data.projects.map((item) => 
            <div>
              <div className='project' key={item.id} >
                <div className='image' onClick={() => {setModal(true); setActualModal(item.id)}} style={{backgroundImage: item.img }}></div>
                <h6>{item.name}</h6>
                <p>{item.description}</p> 
              </div>
                {actualModal == item.id ? 
                <Modal show={modal} setModal={setModal} actualModal={actualModal} item={item} />
                : null }
              </div>
            )}
          </div>
        </div>
    )
}

export default Projects;