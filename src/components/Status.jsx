import React, { useState } from "react";
import taskk from "../img/taskChrck.svg";
import { updateTasks } from "../api/tasks.api";
import { useNavigate } from "react-router-dom";

const Status = ({ task }) => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(true);
  const [newTask, setNewTask] = useState([]);

  const handleClick = async () => {
    const accent = window.confirm(
      "¿ Seguro de poner como completada la tarea ? "
    );
    if (accent) {
      setStatus(true);
      const updatedTask = { ...task, done: status };
      await updateTasks(task.id, updatedTask);
      navigate("/");
    }
  };

  return (
    <button className="set" onClick={handleClick}>
      <img src={taskk} alt="" />
      Set
    </button>
  );
};

export default Status;
