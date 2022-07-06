import React from "react";
import "../../src/App.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <h1 className="titlee">My ToDo list</h1>
        <div className="count">0/6</div>
      </div>
    </>
  );
}
