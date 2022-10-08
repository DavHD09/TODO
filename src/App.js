import React, { useState } from "react";
import { ToDoCounter } from "./components/ToDoCounter";
import { ToDoSearch } from "./components/ToDoSearch";
import { ToDoList } from "./components/ToDoList";
import { ToDoItem } from "./components/ToDoItem";
import { CreateToDoButton } from "./components/CreateToDoButton";
import { useLocalStorage } from "./Hooks/useLocalStorage";
import { ModalAddTodo } from "./components/ModalAddTodo";
import "./app.css";

function App() {
  const { tasks, savetodos, loading, error } = useLocalStorage("TODOS_V2", []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  let searchedTask = [];

  const numbercompleted = tasks.filter(
    (task) => task.completed === true
  ).length;
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
        <ToDoList searchedTask={searchedTask}>
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
        {!loading && !allregister && <p> Crea tu primer ToDo</p>}
        <CreateToDoButton setOpenModal={setOpenModal} />
        {openModal && (
          <ModalAddTodo
            openModal={openModal}
            setOpenModal={setOpenModal}
            savetodos={savetodos}
            tasks={tasks}
          />
        )}
      </div>
    </div>
  );
}

export default App;
