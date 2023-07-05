import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import icontasks from "../img/taskChrck.svg";
import TM from "../img/TM.svg";
import Close from "./close";
import Status from "./Status";
import DeleteTask from "./DeleteTask";
import AOS from "aos";
import "aos/dist/aos.css";

const TasksCard = ({ task }) => {
  AOS.init();
  let timestamp = task.created_at;
  let formattedDatetime = moment(timestamp).format("DD-MM-YYYY ");

  const navegate = useNavigate();
  let size = task.title;
  if (parseInt(task.title.length) > 15) {
    // size = `${parseInt(task.title.length) + 3}px`;
    size = size.substring(0, 20) + "...";
  }
  let description = task.description;
  if (description.length > 200) {
    description = description.substring(0, 190) + "...";
  }
  let colorStatus;
  if (task.done) {
    colorStatus = "#008000";
  } else {
    colorStatus = "#ff0000";
  }
  return (
    <div
      className="containerTask"
      style={{ opacity: task.done ? 0.5 : 1 }}
      data-aos="fade-up"
    >
      <div
        className="TasksCard"
        onClick={() => {
          navegate(`/tasks/${task.id}`);
        }}
      >
        <br />
        <h1>{size}</h1>
        <br />
        <hr />
        <br />
        <img src={TM} className="TM" />
        <p
          style={{
            width: "100%",
            wordWrap: "break-word",
            wordBreak: "break-all",
          }}
        >
          {description}
        </p>
        <br />
        <div className="centrar">
          <p>Estado :</p>
          <Close color={colorStatus} />
        </div>
        <div className="centrar cal">
          <img src={icontasks} style={{ width: "1pc" }} />
          <p>{formattedDatetime}</p>
        </div>
      </div>
      {task.done == false ? (
        <Status task={task} />
      ) : (
        <DeleteTask id={task.id} />
      )}
    </div>
  );
};

export default TasksCard;
