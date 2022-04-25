import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faClockFour,
} from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../css/ListItem.css";

export const ToDoItem = (props) => {
  return (
    <li className="item">
      <span className="container_complete">
        {props.completed ? (
          <FontAwesomeIcon
            icon={faCircleCheck}
            style={{ color: "green" }}
            onClick={props.onProgress}
          />
        ) : (
          <FontAwesomeIcon
            icon={faClockFour}
            style={{ color: "#f68c00", fontWeight: "bold" }}
            onClick={props.onComplete}
          />
        )}
      </span>

      {props.completed ? (
        <p style={{ fontSize: "large" }}>
          <del>{props.text} </del>
        </p>
      ) : (
        <p style={{ fontSize: "large" }}> {props.text} </p>
      )}

      <span className="container_delete">
        <FontAwesomeIcon icon={faTrash} onClick={props.onDelete} />
      </span>
    </li>
  );
};
