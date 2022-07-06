import React from "react";
import Task from "./Task";

export default function Tasks(props) {
  return (
    <div className="tasks">
      {props.tasks.map((e, i) => {
        return <Task topic={e.title} _id={e._id} key={i} isDone={e.isDone} />;
      })}
    </div>
  );
}
