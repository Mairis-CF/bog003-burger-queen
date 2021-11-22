import '../CSS/Modal.css'
import React from 'react';




const Modal = ({children, isOpen, closeModal, tittle}) => {
  return (
    <article className={`modal ${isOpen && "open"}`}>
      <div className="modal-container">
        <div>
          <p className="add">{tittle}</p>
        </div>
        <div> 
        <button className="modal-close">X</button>
        </div>
        {children}
      </div>
   
    </article>
  )
}

export default Modal
