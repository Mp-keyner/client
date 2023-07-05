import React from "react";
import desp from "../img/desp.svg";
import title from "../img/titleTask.svg";

const Description = ({ task }) => {
  return (
    <div className="Dep">
      <div className="centrar">
        <img src={title} alt="" />
        <h1>Titulo de la Tarea</h1>
      </div>
      <h2>{task.title}</h2>
      <div className="centrar">
        <img src={desp} alt="" />
        <h2>Desscripcion de la Tarea</h2>
      </div>
      <p
        style={{
          width: "100%",
          wordWrap: "break-word",
          wordBreak: "break-all",
          maxHeight: "10pc",
          overflow: "scroll",
        }}
      >
        {task.description}
      </p>
    </div>
  );
};

export default Description;
