/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [list, setList] = useState([]);

  const thing = useRef(null);
  const date = useRef(null);
  const time = useRef(null);

  const display = (e) => {
    e.preventDefault();
    const newItem = {
      thing: thing.current.value,
      date: date.current.value,
      time: time.current.value,
    };
    setList([...list, newItem]);

    thing.current.value = "";
    date.current.value = "";
    time.current.value = "";
  };

  return (
    <div className="todo_container">
      <h2 className="heading">These are the todo things...</h2>
      <form onSubmit={display}>
        <input
          className="input"
          ref={thing}
          type="text"
          placeholder="Enter the thing you need to do"
        />
        <input className="input" ref={date} type="date" />
        <input className="input" ref={time} type="time" />
        <button className="btn" type="submit">
          Add to the list
        </button>
      </form>
      <div className="list_container">
        <ul>
          {list.map((todo, i) => (
            <li key={i}>
              {todo.thing}
              {todo.date}
              {todo.time}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
