import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { taskService } from "../services/taskService";
import Tasks from "./Tasks";
import "../../src/App.css";

export default function CheckedLists() {
  const [data, setData] = useState([]);
  useEffect(() => {
    taskService.getTasks().then((data) => {
      let checked = data.data.filter((e) => {
        if (e.isDone) {
          return e.isDone;
        }
      });
      setData(checked);
    });
  }, []);

  return (
    <div className="checkedTasks">
      <h6>Checked Tasks</h6>
      <Tasks tasks={data} />
    </div>
  );
}
