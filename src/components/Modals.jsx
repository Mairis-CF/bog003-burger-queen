import React from "react";
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import "../CSS/Modal.css";
import "../CSS/menu.css"
import AditionItems from "./itemAdittions";

// Comando _rafce
const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  return (
    <section> 
      <button className="addButton" onClick={openModal1}>
      <img className="addImg" src="icons/plusButton.png" alt="add" />
      </button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1} tittle="Adiciones">
        <section className="additional-menu"> 
        <AditionItems foodType="Adiciones"/>
        </section>
        <section className="food-add"> 
        <button className="acept" onClick={closeModal1}>Aceptar</button>
        </section>
      </Modal>
    </section>
   
    
  );
};

export default Modals;
