import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const CreateToDoButton = ({setOpenModal}) => {

  const buttonAdd = {
    display: 'flex',
    alignItems: 'center',
    background: '#00b0ff',
    border: 'none',
    borderRadius: '10px',
    width: '230px',
    margin: 'auto',
    marginTop: "20px",
    justifyContent: 'center',
    cursor: 'pointer'
  }

  const handleAddTodo = () => {
    setOpenModal(true)
  }

  return (
    <button style={buttonAdd} onClick={handleAddTodo}>
      <p style={{fontSize: '15px'}}>Añadir una nueva tarea</p>
      <FontAwesomeIcon icon={faPlus} style={{fontSize: '20px', marginLeft: '5px'}} />
    </button>
  );
};
