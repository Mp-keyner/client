import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import {
  createTask,
  deleteTasks,
  updateTasks,
  getTasks,
} from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import Description from "../components/Description";
import title from "../img/titleTask.svg";

const TasksFormPages = () => {
  const Navigate = useNavigate();
  const [dataTask, setDataTask] = useState([]);
  const params = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateTasks(params.id, data);
      toast.success("Tasks updated successfully");
    } else {
      await createTask(data);
      toast.success("Good job!");
    }
    Navigate("/");
  });
  useEffect(() => {
    async function getTa() {
      if (params.id) {
        const { data } = await getTasks(params.id);
        setDataTask(data);
        setValue("title", data.title);
        setValue("description", data.description);
      }
    }
    getTa();
  }, []);
  errors.title &&
    toast.error("El titulo es Obligatorio", {
      style: { fontFamily: "fantasy", fontSize: "100" },
    });
  //   errors.title &&
  //     toast.error("This didn't work.", {
  //       style: { fontFamily: "fantasy", fontSize: "100" },
  //     });
  errors.descripcion &&
    toast.error("La descripcion es Obligatoria", {
      style: { fontFamily: "fantasy", fontSize: "100" },
    });
  return (
    <div>
      {params.id ? (
        <div className="containerDep">
          <Description task={dataTask} />
          <div className="containerFormDep">
            <form onSubmit={onSubmit} className="formFb">
              <label htmlFor="text">Title Task</label>
              <input
                type="text"
                placeholder="Title"
                {...register("title", { required: true })}
              />
              <label htmlFor="text">Description Task</label>

              <textarea
                rows="3"
                placeholder="Descripcion"
                {...register("description", { required: true })}
              ></textarea>
              <input placeholder="Save" type="submit" />
            </form>
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="formFb">
          <div className="centrar">
            <img src={title} alt="" />
            <label htmlFor="text">Title Task</label>
          </div>

          <input
            type="text"
            placeholder="Title"
            {...register("title", { required: true })}
          />
          <div className="centrar">
            <img src={title} alt="" />
            <label htmlFor="text">Description Task</label>
          </div>

          <textarea
            rows="3"
            placeholder="Descripcion"
            {...register("description", { required: true })}
          ></textarea>
          <input placeholder="Save" type="submit" />
        </form>
      )}
    </div>
  );
};

export default TasksFormPages;
