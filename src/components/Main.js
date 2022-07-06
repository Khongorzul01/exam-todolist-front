import React from "react";
import Header from "./Header";
import Body from "./Body";
import CheckedLists from "./CheckedLists";

export default function Main() {
  return (
    <div className="main">
      <Header />
      <Body />
      <CheckedLists />
    </div>
  );
}
