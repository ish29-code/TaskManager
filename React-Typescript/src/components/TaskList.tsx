import React from "react";
import TaskItem from "./TaskItem";
import { Task } from "../types";


interface Props {
  tasks: Task[];
  toggleComplete: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskList: React.FC<Props> = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} toggleComplete={toggleComplete} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TaskList;
