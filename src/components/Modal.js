import React, {useRef} from "react";
import '../styles/styles.css';


function Modal({show, setModal, actualModal, item}) {
    const modalContainerRef = useRef()

    if(show == true){
        document.body.style.overflow = 'hidden'
    }
    const closeModal = () => {
        document.body.style.overflowY = 'auto';
        setModal(false)
    }
    return(
        <div>
            {show ? (
                <div ref={modalContainerRef} className="modal-container">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <div className="modal-body">
                        <img src={item.imgDesktop} />
                        <div className="buttons">
                            <a href={item.live} target="_blank">Live</a>
                            <a href={item.repo} target="_blank">Repositorio</a>
                        </div>
                    </div>
            </div>
            ) : null}

            </div>
            
    )
}

export default Modal;