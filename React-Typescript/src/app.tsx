import React, { useState } from "react";
import TaskList from "./components/TaskList";
import { Task } from "./types";
import "./index.css"

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [text, setText] = useState("");

  const addTask = () => {
    if (text.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text, completed: false }]);
      setText("");
    }
  };

  const toggleComplete = (id: number) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Task Manager</h1>
      <div className="flex space-x-3 mb-5">
        <input
          value={text}
          onChange={(e) => {
            if (e.target) {
              setText((e.target as HTMLInputElement).value);
            }
          }}
          placeholder="Add a task..."
          className="border border-gray-300 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
