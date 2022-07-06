import React from "react";
import { useState } from "react";

export default function Task(props) {
  const [vali, setVali] = useState(true);

  function handleDelete(e) {
    fetch("http://localhost:5003/api/todo", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: props._id }),
    });

    alert("deleted");
    window.location.reload(false);
  }
  function handleEdit() {
    setVali(!vali);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setVali(!vali);
    fetch("http://localhost:5003/api/todo", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: e.target[0].value,
        _id: props.id,
      }),
    });

    window.location.reload(false);
  }

  function handleCheck() {
    fetch("http://localhost:5003/api/todo", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isDone: !props.isDone,
        _id: props._id,
      }),
    });

    window.location.reload(false);
  }
  return (
    <div className="task">
      <div className="task-suka">
        <div className="inputfield">
          <input
            type="radio"
            id={`${props.key}`}
            className="radiobtn"
            onClick={handleCheck}
          />
          {vali ? (
            <label
              htmlFor=""
              id={`${props.key}`}
              className={`${props.isDone ? "checkedtask" : ""}`}
            >
              {` ${props.topic} `}
            </label>
          ) : (
            <form action="" className="input-edit" onSubmit={handleSubmit}>
              <input type="text" placeholder={`${props.topic}`} />
            </form>
          )}
        </div>
        <div className="actions">
          <img className="img" src="/edit.png" alt="" onClick={handleEdit} />
          <img
            className="img"
            src="/delete.png"
            alt=""
            onClick={handleDelete}
          />
        </div>
      </div>
      <hr className="underline" />
    </div>
  );
}
