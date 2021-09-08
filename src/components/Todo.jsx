import React from "react";
import "./Todo.css";
import { useState } from "react";
import TodoList from "./TodoList";

export default function Todo() {
  const [item, setItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  const changeHandler = (e) => {
    setItem(e.target.value);
  };
  const clickHandler = () => {
    setTodoList([...todoList, item]);
    setItem("");
  };
  return (
    <div className="Container flex-column">
      <TodoList arr={todoList} />
      <div class="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={item}
          onChange={changeHandler}
          placeholder="Write Sometings"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <button className="mx-3" onClick={clickHandler}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-align-middle"
            viewBox="0 0 16 16"
          >
            <path d="M6 13a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10zM1 8a.5.5 0 0 0 .5.5H6v-1H1.5A.5.5 0 0 0 1 8zm14 0a.5.5 0 0 1-.5.5H10v-1h4.5a.5.5 0 0 1 .5.5z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
