import React from "react";
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";
import "../CSS/Modal.css";
import MenuItems from "./ItemMenu";

// Comando _rafce
const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  return (
    <div>
      <h2>Modal</h2>
      {/*Botón que despliega el modal*/}
      <button onClick={openModal1}>Adiciones</button>
    
      <Modal 
        isOpen={isOpenModal1} 
        closeModal={closeModal1}
        tittle="Adiciones">

        <div className="additional-menu"> 
        <MenuItems 
        foodType="Adiciones"
        />
        </div>

        <div className="food-add"> 

     {
     //Agregar item seleccionado de menú
     }
        <button className="acept" onClick={closeModal1}>Aceptar</button>
        </div>
      </Modal>
    </div>
  );
};

export default Modals;
