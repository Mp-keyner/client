import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import TasksPages from "./pages/TasksPages";
import TasksFormPages from "./pages/TasksFormPages";
import Nav from "./components/Nav";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to={"/tasks"} />} />
            <Route path="/tasks" element={<TasksPages />} />
            <Route path="/tasks-create" element={<TasksFormPages />} />
            <Route path="/tasks/:id" element={<TasksFormPages />} />
          </Routes>
        </BrowserRouter>
        <Toaster position="bottom-left" reverseOrder={false} />
      </div>
    </>
  );
}

export default App;
