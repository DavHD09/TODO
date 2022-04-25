import React from "react";
import '../css/ListOut.css'

export const ToDoList = (props) => {
  
  return (
    <React.Fragment>
      <h3 style={{margin: '40px 0px 20px 0px'}}>Listas de tareas asignadas </h3>
      <section className="container_list">
        <ul style={{ padding: "0px" }}>{props.children}</ul>
      </section>
    </React.Fragment>
  );
};
