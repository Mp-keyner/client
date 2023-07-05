import React from "react";
import TasksIcon from "../img/taskChrck.svg";

const Nav = () => {
  return (
    <div className="nav">
      <div className="centrar">
        <h1>TaskMaster</h1>
        <img src={TasksIcon} alt="" style={{ width: "2pc" }} />
      </div>
      <div className="centrar">
        <a href="/tasks">Tasks</a>
        <a href="/tasks-create">Tasks-Create</a>
      </div>
    </div>
  );
};

export default Nav;
