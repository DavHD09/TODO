import React from 'react'

export const ToDoCounter = ({numbercompleted, allregister}) => {
  return (
    <React.Fragment>
        <h2>Bienvenidos al gestos de tareas ToDo's.</h2>
        <h2>{`Actualmente has completado ${numbercompleted} de ${allregister} tareas asignadas`}</h2>
    </React.Fragment>
  )
}
