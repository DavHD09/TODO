import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../css/Search.css";

export const ToDoSearch = ({ setSearchValue }) => {
  
  const onChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <section className="container_search">
      <input
        placeholder="Buscar actividad"
        className="search"
        onChange={onChangeSearch}
      />
      <FontAwesomeIcon icon={faSearch} className="icon_search" />
    </section>
  );
};
