import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteTasks } from "../api/tasks.api";
import { toast } from "react-hot-toast";
import trash from "../img/trash.svg";

const DeleteTask = ({ id }) => {
  const Navigate = useNavigate();
  return (
    <div>
      <button
        className="set"
        onClick={async () => {
          const accent = window.confirm(
            "¿ Seguro de continuar con la accion ? "
          );
          if (accent) {
            await deleteTasks(id);
            Navigate("/");
            toast.success("Delete Tasks Success");
          }
        }}
      >
        <img src={trash} alt="" />
        Delete
      </button>
    </div>
  );
};

export default DeleteTask;
