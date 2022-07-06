import React from "react";
import Tasks from "./Tasks";
import { taskService } from "../services/taskService";
import { useEffect } from "react";
import { useState } from "react";
import "../../src/App.css";

export default function MainBody() {
  const [tasks, setTasks] = useState([]);
  const [data, setData] = useState([]);
  const [newdata, setNewdata] = useState(true);

  useEffect(() => {
    taskService.getTasks().then((data) => {
      let checked = data.data.filter((e) => {
        if (!e.isDone) {
          return !e.isDone;
        }
      });
      setData(data.data);
      setTasks(checked);
    });
  }, [newdata]);
  function handleSubmit(e) {
    const maxtitle = data.sort((e) => {
      if (e.title) {
        return -1;
      }
    });
    e.preventDefault();
    taskService
      .createTask({
        title: e.target[0].value,
        // id: maxId[0]._id + 1,
        isDone: false,
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message == "success") {
          setNewdata(!newdata);
          e.target.reset();
        }
      });
  }

  return (
    <div className="mainBody">
      <Tasks tasks={tasks} />

      <form action="" onSubmit={handleSubmit}>
        <input
          className="input-text"
          placeholder={`What's next? `}
          type="text"
        />

        <button type="sumbit" className="submit-btn">
          {" "}
          Add task
        </button>
      </form>
    </div>
  );
}
