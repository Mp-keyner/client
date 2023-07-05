import React, { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import TasksCard from "./TasksCard";

const TasksList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const { data } = await getAllTasks();
      setTasks(data);
    }
    loadTasks();
  }, []);

  // Ordenar las tareas: primero las no completadas, luego las completadas
  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.done && !b.done) {
      return 1;
    } else if (!a.done && b.done) {
      return -1;
    } else {
      return 0;
    }
  });

  return (
    <>
      <div className="containerTasks">
        {sortedTasks.map((task) => (
          <TasksCard task={task} key={task.id} />
        ))}
      </div>
    </>
  );
};

export default TasksList;
