import React from "react";
import { Task } from "../types";


interface Props {
  task: Task;
  toggleComplete: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskItem: React.FC<Props> = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow-md">
      {/* Checkbox to mark task as completed */}
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-3"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        {/* Show task text, strikethrough if completed */}
        <span className={`text-lg ${task.completed ? "line-through text-gray-500" : "text-gray-800"}`}>
          {task.text}
        </span>
      </div>

      {/* Delete button */}
      <button
        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
