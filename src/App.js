import React, { useState } from "react";
import { ToDoCounter } from "./components/ToDoCounter";
import { ToDoSearch } from "./components/ToDoSearch";
import { ToDoList } from "./components/ToDoList";
import { ToDoItem } from "./components/ToDoItem";
import { CreateToDoButton } from "./components/CreateToDoButton";
import { useLocalStorage } from "./Hooks/useLocalStorage";
import "./app.css";

// const default_tasks = [
//   { id: "0", text: "Trabajar en supre", completed: true },
//   { id: "1", text: "Tomar curso de intro a React.js", completed: true },
//   { id: "2", text: "Investigar sobre linux", completed: false },
//   { id: "3", text: "Sacar cita Icetex", completed: false },
//   { id: "4", text: "Pagar cuotas Icetex", completed: false },
//   { id: "5", text: "Jugar GTA V", completed: false },
//   { id: "6", text: "ver curso de codestream", completed: false },
// ];

function App() {
  const {tasks, savetodos, loading, error} = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = useState("");  
  let searchedTask = [];

  const numbercompleted = tasks.filter((task) => task.completed === true).length;
  const allregister = tasks.length;

  if (searchValue.length === 0) {
    searchedTask = tasks;
  } else {
    searchedTask = tasks.filter((task) => {
      const todoText = task.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const onComplete = (text) => {
    const todoIndex = tasks.findIndex((task) => task.text === text);
    const newTasks = [...tasks];
    newTasks[todoIndex].completed = true;
    savetodos(newTasks);
  };

  const onProgress = (text) => {
    const todoIndex = tasks.findIndex((task) => task.text === text);
    const newTasks = [...tasks];
    newTasks[todoIndex].completed = false;
    savetodos(newTasks);
  };

  const onDelete = (text) => {
    const todoIndex = tasks.findIndex((task) => task.text === text);
    const newTasks = [...tasks];
    newTasks.splice(todoIndex, 1);
    savetodos(newTasks);
  };

  return (
    <div className="container_main">
      <div style={{ width: "85%", margin: "auto" }}>
        
        <ToDoCounter
          numbercompleted={numbercompleted}
          allregister={allregister}
        />
        <ToDoSearch setSearchValue={setSearchValue} />
        <ToDoList>
          {searchedTask.map((task) => (
            <ToDoItem
              key={task.id}
              text={task.text}
              completed={task.completed}
              onComplete={() => onComplete(task.text)}
              onDelete={() => onDelete(task.text)}
              onProgress={() => onProgress(task.text)}
            />
          ))}
        </ToDoList>
        {error && <p> Desesperate, hubo un error...</p>}
        {loading && <p> Estamos cargando...</p>}
        {(!loading && !allregister) && <p> Crea tu primer ToDo</p> }
        <CreateToDoButton />
      </div>
    </div>
  );
}

export default App;
