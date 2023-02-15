import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { TaskType, Todolist } from "./Todolist";

let task1: Array<TaskType> = [
  { id: 1, title: "CSS", isDone: true },
  { id: 2, title: "JS", isDone: true },
  { id: 3, title: "React", isDone: true },
];

let task2: Array<TaskType> = [
  { id: 1, title: "Темный рыцарь", isDone: true },
  { id: 2, title: "Гуммо", isDone: true },
  { id: 3, title: "Побег из шоушенка", isDone: true },
];

function App() {
  return (
    <div className="App">
      <Todolist title="What to learn" tasks={task1} />
      <Todolist title="Movies" tasks={task2} />
    </div>
  );
}

export default App;
