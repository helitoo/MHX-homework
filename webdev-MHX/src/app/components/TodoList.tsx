"use client";

import { Task } from "../page";
import TodoItem from "./TodoItem";

const TodoList = ({
  tasks,
  ToggleTask,
  RemoveTask,
  UpdateTitle,
}: {
  tasks: Task[];
  ToggleTask: (id: number) => void;
  RemoveTask: (id: number) => void;
  UpdateTitle: (id: number, title: string) => void;
}) => {
  return (
    <ul className="w-full">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          ToggleTask={ToggleTask}
          RemoveTask={RemoveTask}
          UpdateTitle={UpdateTitle}
        />
      ))}
    </ul>
  );
};

export default TodoList;
