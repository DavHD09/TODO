import React from "react";

export const useLocalStorage = (itemName, initialvalue) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [tasks, setTasks] = React.useState(initialvalue);

  React.useEffect(() => {
    // para simular una api
    setTimeout(() => {
      try {
        //para obtener el valor del localstorage
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          //para convertir el objeto de javascript en texto para que lo pueda almacenar el navegador (solo soporta texto)
          // con setItem guardamos en el local storage
          localStorage.setItem(itemName, JSON.stringify(initialvalue));
          parsedItem = [];
        } else {
          // para convertir de texto a objeto
          parsedItem = JSON.parse(localStorageItem);
        }

        setTasks(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
    //eslint-disable-next-line
  }, []);

  const savetodos = (newtodos) => {
    try {
      const stringifiedtodos = JSON.stringify(newtodos);
      localStorage.setItem(itemName, stringifiedtodos);
      setTasks(newtodos);
    } catch (error) {
      setError(error);
    }
  };

  return { tasks, savetodos, loading, error };
};
