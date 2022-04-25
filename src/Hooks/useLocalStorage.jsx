import React from "react";

export const useLocalStorage = (itemName, initialvalue) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [tasks, setTasks] = React.useState(initialvalue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialvalue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setTasks(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  });

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
